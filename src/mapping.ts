import { BigDecimal, BigInt, ethereum } from "@graphprotocol/graph-ts";
import {
  OrderApprovedPartOne,
  OrderApprovedPartTwo,
  OrderCancelled,
  OrdersMatched,
} from "../generated/NiftyConnectExchange/NiftyConnectExchange";
import { NiftyConnectOrder } from "../generated/schema";

export function handleOrderApprovedPartOne(event: OrderApprovedPartOne): void {
  const params = event.params;

  const entity = new NiftyConnectOrder(params.hash.toHex());
  entity.txHash = event.transaction.hash.toHex();
  entity.orderHash = params.hash.toHex();
  entity.exchange = params.exchange;
  entity.maker = params.maker;
  entity.taker = params.taker;
  entity.makerRelayerFeeRecipient = params.makerRelayerFeeRecipient;
  entity.side = BigInt.fromI32(params.side);
  entity.saleKind = BigInt.fromI32(params.saleKind);
  entity.nftAddress = params.nftAddress;
  entity.tokenId = params.tokenId.toHex();
  entity.ipfsHash = params.ipfsHash.toHex();

  entity.save();
}

export function handleOrderApprovedPartTwo(event: OrderApprovedPartTwo): void {
  const params = event.params;
  const entity = NiftyConnectOrder.load(params.hash.toHex());
  if (entity) {
    entity.calldata = params.calldata;
    entity.replacementPattern = params.replacementPattern;
    entity.staticTarget = params.staticTarget.toHex();
    entity.staticExtradata = params.staticExtradata.toHex();
    entity.paymentToken = params.paymentToken;
    entity.orderPrice = new BigDecimal(params.basePrice);
    entity.extra = params.extra.toHex();
    entity.listingTime = params.listingTime;
    entity.expirationTime = params.expirationTime;
    entity.salt = params.salt.toHex();
    entity.save();
  }
}

export function handleOrderCancelled(event: OrderCancelled): void {
  const params = event.params;
  const entity = NiftyConnectOrder.load(params.hash.toHex());
  if (entity) {
    entity.isCancelled = true;
    entity.save();
  }
}

export function handleOrdersMatched(event: OrdersMatched): void {
  const params = event.params;
  const entity = NiftyConnectOrder.load(params.buyHash.toHex());
  const entity2 = NiftyConnectOrder.load(params.sellHash.toHex());
  if (entity) {
    entity.isFinalized = true;
    entity.maker = params.maker;
    entity.taker = params.taker;
    entity.save();
  }

  if (entity2) {
    entity2.isFinalized = true;
    entity2.maker = params.maker;
    entity2.taker = params.taker;
    entity2.save();
  }
}
