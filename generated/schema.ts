// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NiftyConnectOrder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("orderHash", Value.fromString(""));
    this.set("txHash", Value.fromString(""));
    this.set("exchange", Value.fromBytes(Bytes.empty()));
    this.set("maker", Value.fromBytes(Bytes.empty()));
    this.set("taker", Value.fromBytes(Bytes.empty()));
    this.set("side", Value.fromBigInt(BigInt.zero()));
    this.set("saleKind", Value.fromBigInt(BigInt.zero()));
    this.set("nftAddress", Value.fromBytes(Bytes.empty()));
    this.set("calldata", Value.fromBytes(Bytes.empty()));
    this.set("paymentToken", Value.fromBytes(Bytes.empty()));
    this.set("orderPrice", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("listingTime", Value.fromBigInt(BigInt.zero()));
    this.set("expirationTime", Value.fromBigInt(BigInt.zero()));
    this.set("salt", Value.fromString(""));
    this.set("isCancelled", Value.fromBoolean(false));
    this.set("isFinalized", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NiftyConnectOrder entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NiftyConnectOrder must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NiftyConnectOrder", id.toString(), this);
    }
  }

  static load(id: string): NiftyConnectOrder | null {
    return changetype<NiftyConnectOrder | null>(
      store.get("NiftyConnectOrder", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get orderHash(): string {
    let value = this.get("orderHash");
    return value!.toString();
  }

  set orderHash(value: string) {
    this.set("orderHash", Value.fromString(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value!.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }

  get exchange(): Bytes {
    let value = this.get("exchange");
    return value!.toBytes();
  }

  set exchange(value: Bytes) {
    this.set("exchange", Value.fromBytes(value));
  }

  get maker(): Bytes {
    let value = this.get("maker");
    return value!.toBytes();
  }

  set maker(value: Bytes) {
    this.set("maker", Value.fromBytes(value));
  }

  get taker(): Bytes {
    let value = this.get("taker");
    return value!.toBytes();
  }

  set taker(value: Bytes) {
    this.set("taker", Value.fromBytes(value));
  }

  get makerRelayerFeeRecipient(): Bytes | null {
    let value = this.get("makerRelayerFeeRecipient");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set makerRelayerFeeRecipient(value: Bytes | null) {
    if (!value) {
      this.unset("makerRelayerFeeRecipient");
    } else {
      this.set("makerRelayerFeeRecipient", Value.fromBytes(<Bytes>value));
    }
  }

  get side(): BigInt {
    let value = this.get("side");
    return value!.toBigInt();
  }

  set side(value: BigInt) {
    this.set("side", Value.fromBigInt(value));
  }

  get saleKind(): BigInt {
    let value = this.get("saleKind");
    return value!.toBigInt();
  }

  set saleKind(value: BigInt) {
    this.set("saleKind", Value.fromBigInt(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    return value!.toBytes();
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get tokenId(): string | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenId(value: string | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromString(<string>value));
    }
  }

  get ipfsHash(): string | null {
    let value = this.get("ipfsHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ipfsHash(value: string | null) {
    if (!value) {
      this.unset("ipfsHash");
    } else {
      this.set("ipfsHash", Value.fromString(<string>value));
    }
  }

  get calldata(): Bytes {
    let value = this.get("calldata");
    return value!.toBytes();
  }

  set calldata(value: Bytes) {
    this.set("calldata", Value.fromBytes(value));
  }

  get replacementPattern(): Bytes | null {
    let value = this.get("replacementPattern");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set replacementPattern(value: Bytes | null) {
    if (!value) {
      this.unset("replacementPattern");
    } else {
      this.set("replacementPattern", Value.fromBytes(<Bytes>value));
    }
  }

  get staticTarget(): string | null {
    let value = this.get("staticTarget");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set staticTarget(value: string | null) {
    if (!value) {
      this.unset("staticTarget");
    } else {
      this.set("staticTarget", Value.fromString(<string>value));
    }
  }

  get staticExtradata(): string | null {
    let value = this.get("staticExtradata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set staticExtradata(value: string | null) {
    if (!value) {
      this.unset("staticExtradata");
    } else {
      this.set("staticExtradata", Value.fromString(<string>value));
    }
  }

  get paymentToken(): Bytes {
    let value = this.get("paymentToken");
    return value!.toBytes();
  }

  set paymentToken(value: Bytes) {
    this.set("paymentToken", Value.fromBytes(value));
  }

  get orderPrice(): BigDecimal {
    let value = this.get("orderPrice");
    return value!.toBigDecimal();
  }

  set orderPrice(value: BigDecimal) {
    this.set("orderPrice", Value.fromBigDecimal(value));
  }

  get extra(): string | null {
    let value = this.get("extra");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set extra(value: string | null) {
    if (!value) {
      this.unset("extra");
    } else {
      this.set("extra", Value.fromString(<string>value));
    }
  }

  get listingTime(): BigInt {
    let value = this.get("listingTime");
    return value!.toBigInt();
  }

  set listingTime(value: BigInt) {
    this.set("listingTime", Value.fromBigInt(value));
  }

  get expirationTime(): BigInt {
    let value = this.get("expirationTime");
    return value!.toBigInt();
  }

  set expirationTime(value: BigInt) {
    this.set("expirationTime", Value.fromBigInt(value));
  }

  get salt(): string {
    let value = this.get("salt");
    return value!.toString();
  }

  set salt(value: string) {
    this.set("salt", Value.fromString(value));
  }

  get isCancelled(): boolean {
    let value = this.get("isCancelled");
    return value!.toBoolean();
  }

  set isCancelled(value: boolean) {
    this.set("isCancelled", Value.fromBoolean(value));
  }

  get isFinalized(): boolean {
    let value = this.get("isFinalized");
    return value!.toBoolean();
  }

  set isFinalized(value: boolean) {
    this.set("isFinalized", Value.fromBoolean(value));
  }
}
