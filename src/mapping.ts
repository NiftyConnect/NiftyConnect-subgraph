import { BigInt } from "@graphprotocol/graph-ts"
import {
  NiftyConnectExchange,
  OrderApprovedPartOne,
  OrderApprovedPartTwo,
  OrderCancelled,
  OrdersMatched,
  NonceIncremented,
  OwnershipRenounced,
  OwnershipTransferred
} from "../generated/NiftyConnectExchange/NiftyConnectExchange"
import { ExampleEntity } from "../generated/schema"

export function handleOrderApprovedPartOne(event: OrderApprovedPartOne): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.hash = event.params.hash
  entity.exchange = event.params.exchange

  // Entities can be written to the store with `.save()`
  entity.save()

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

export function handleOrderApprovedPartTwo(event: OrderApprovedPartTwo): void {}

export function handleOrderCancelled(event: OrderCancelled): void {}

export function handleOrdersMatched(event: OrdersMatched): void {}

export function handleNonceIncremented(event: NonceIncremented): void {}

export function handleOwnershipRenounced(event: OwnershipRenounced): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
