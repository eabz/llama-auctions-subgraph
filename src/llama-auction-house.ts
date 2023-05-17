import {
	AuctionBid as AuctionBidEvent,
	AuctionCreated as AuctionCreatedEvent,
	AuctionDurationUpdated as AuctionDurationUpdatedEvent,
	AuctionExtended as AuctionExtendedEvent,
	AuctionMinBidIncrementPercentageUpdated as AuctionMinBidIncrementPercentageUpdatedEvent,
	AuctionReservePriceUpdated as AuctionReservePriceUpdatedEvent,
	AuctionSettled as AuctionSettledEvent,
	AuctionTimeBufferUpdated as AuctionTimeBufferUpdatedEvent,
	Withdraw as WithdrawEvent,
} from "../generated/LlamaAuctionHouse/LlamaAuctionHouse";
import {
	Auction,
	AuctionGlobalConfiguration,
	CurrentAuction,
} from "../generated/schema";
import { Address, BigInt, ByteArray, Bytes } from "@graphprotocol/graph-ts";

const mainConfigId = "LlamaAuctionHouseConfig";
const currentAuctionId = "LlamaAuctionHouseCurrentAuction";

export function handleAuctionBid(event: AuctionBidEvent): void {
	const id = Bytes.fromUTF8(currentAuctionId);

	let entity = CurrentAuction.load(id);
	if (!entity) {
		entity = new CurrentAuction(id);
	}

	entity.winning_bid = event.params._value;
	entity.winner = event.params._sender;
	entity.total_bids = entity.total_bids.plus(BigInt.fromI64(1));

	entity.save();
}

export function handleAuctionExtended(event: AuctionExtendedEvent): void {
	const id = Bytes.fromUTF8(currentAuctionId);

	let entity = CurrentAuction.load(id);
	if (!entity) {
		entity = new CurrentAuction(id);
	}

	entity.end_time = event.params._end_time;

	entity.save();
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
	const id = Bytes.fromUTF8(currentAuctionId);

	let entity = CurrentAuction.load(id);
	if (!entity) {
		entity = new CurrentAuction(id);
	}

	entity.llama_id = event.params._llama_id;
	entity.end_time = event.params._end_time;
	entity.start_time = event.params._start_time;
	entity.total_bids = BigInt.fromI64(0);
	entity.winning_bid = BigInt.fromI64(0);
	entity.winner = Address.zero();

	entity.save();
}

export function handleAuctionSettled(event: AuctionSettledEvent): void {
	const id = Bytes.fromUTF8(currentAuctionId);

	const entity = CurrentAuction.load(id);
	if (!entity) return;

	const auctionId = Bytes.fromByteArray(ByteArray.fromBigInt(entity.llama_id));

	const auction = new Auction(auctionId);

	auction.llama_id = entity.llama_id;
	auction.start_time = entity.start_time;
	auction.end_time = entity.end_time;
	auction.total_bids = entity.total_bids;
	auction.amount = event.params._amount;
	auction.winner = event.params._winner;

	auction.save();
}

export function handleAuctionTimeBufferUpdated(
	event: AuctionTimeBufferUpdatedEvent,
): void {
	const id = Bytes.fromUTF8(mainConfigId);

	let entity = AuctionGlobalConfiguration.load(id);
	if (!entity) {
		entity = new AuctionGlobalConfiguration(id);
		setDefaultGlobalConfig(entity);
	}

	entity.time_buffer = event.params._time_buffer;
	entity.save();
}

export function handleAuctionMinBidIncrementPercentageUpdated(
	event: AuctionMinBidIncrementPercentageUpdatedEvent,
): void {
	const id = Bytes.fromUTF8(mainConfigId);

	let entity = AuctionGlobalConfiguration.load(id);
	if (!entity) {
		entity = new AuctionGlobalConfiguration(id);
		setDefaultGlobalConfig(entity);
	}

	entity.min_bid_increment_percentage =
		event.params._min_bid_increment_percentage;
	entity.save();
}

export function handleAuctionReservePriceUpdated(
	event: AuctionReservePriceUpdatedEvent,
): void {
	const id = Bytes.fromUTF8(mainConfigId);

	let entity = AuctionGlobalConfiguration.load(id);
	if (!entity) {
		entity = new AuctionGlobalConfiguration(id);
		setDefaultGlobalConfig(entity);
	}

	entity.reserve_price = event.params._reserve_price;
	entity.save();
}

export function handleAuctionDurationUpdated(
	event: AuctionDurationUpdatedEvent,
): void {
	const id = Bytes.fromUTF8(mainConfigId);

	let entity = AuctionGlobalConfiguration.load(id);
	if (!entity) {
		entity = new AuctionGlobalConfiguration(id);
		setDefaultGlobalConfig(entity);
	}

	entity.duration = event.params._duration;
	entity.save();
}

function setDefaultGlobalConfig(entity: AuctionGlobalConfiguration): void {
	entity.time_buffer = BigInt.fromI64(300);
	entity.reserve_price = BigInt.fromString("200000000000000000");
	entity.min_bid_increment_percentage = BigInt.fromI64(2);
	entity.duration = BigInt.fromI64(5400);
}
