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
  entity.maker = params.maker;
  entity.taker = params.taker;
  entity.makerRelayerFeeRecipient = params.makerRelayerFeeRecipient;
  entity.side = BigInt.fromI32(params.side);
  entity.saleKind = BigInt.fromI32(params.saleKind);
  entity.nftAddress = params.nftAddress;
  entity.tokenId = params.tokenId.toHex();
  entity.ipfsHash = params.ipfsHash.toHex();

  entity.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.name(...)
  // - contract.tokenTransferProxy(...)
  // - contract.exchangeFeeRate(...)
  // - contract.staticCall(...)
  // - contract.DOMAIN_SEPARATOR(...)
  // - contract.royaltyRegisterHub(...)
  // - contract.takerRelayerFeeShare(...)
  // - contract.version(...)
  // - contract.protocolFeeRecipient(...)
  // - contract.registry(...)
  // - contract.nonces(...)
  // - contract.cancelledOrFinalized(...)
  // - contract.owner(...)
  // - contract.protocolFeeShare(...)
  // - contract._deriveDomainSeparator(...)
  // - contract.INVERSE_BASIS_POINT(...)
  // - contract.approvedOrders(...)
  // - contract.makerRelayerFeeShare(...)
  // - contract.merkleValidatorContract(...)
  // - contract.splitToMerkleRootAndProof(...)
  // - contract.buildCallData(...)
  // - contract.guardedArrayReplace(...)
  // - contract.calculateFinalPrice(...)
  // - contract.hashToSign_(...)
  // - contract.validateOrderParameters_(...)
  // - contract.validateOrder_(...)
  // - contract.calculateCurrentPrice_(...)
  // - contract.ordersCanMatch_(...)
  // - contract.orderCalldataCanMatch(...)
  // - contract.calculateMatchPrice_(...)
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
  if (entity) {
    entity.isFinalized = true;
    entity.maker = params.maker;
    entity.taker = params.taker;
    entity.save();
  }
}
