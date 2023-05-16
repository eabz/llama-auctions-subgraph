import {
	AuctionBid as AuctionBidEvent,
	AuctionCreated as AuctionCreatedEvent,
	AuctionDurationUpdated as AuctionDurationUpdatedEvent,
	AuctionExtended as AuctionExtendedEvent,
	AuctionMinBidIncrementPercentageUpdated as AuctionMinBidIncrementPercentageUpdatedEvent,
	AuctionReservePriceUpdated as AuctionReservePriceUpdatedEvent,
	AuctionSettled as AuctionSettledEvent,
	AuctionTimeBufferUpdated as AuctionTimeBufferUpdatedEvent,
	Withdraw as WithdrawEvent
} from '../generated/LlamaAuctions/LlamaAuctions'
import {
	AuctionBid,
	AuctionCreated,
	AuctionDurationUpdated,
	AuctionExtended,
	AuctionMinBidIncrementPercentageUpdated,
	AuctionReservePriceUpdated,
	AuctionSettled,
	AuctionTimeBufferUpdated,
	Withdraw
} from '../generated/schema'

export function handleAuctionBid(event: AuctionBidEvent): void {
	const entity = new AuctionBid(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	)
	entity._llama_id = event.params._llama_id
	entity._sender = event.params._sender
	entity._value = event.params._value
	entity._extended = event.params._extended

	entity.blockNumber = event.block.number
	entity.blockTimestamp = event.block.timestamp
	entity.transactionHash = event.transaction.hash

	entity.save()
}

export function handleAuctionExtended(event: AuctionExtendedEvent): void {
	const entity = new AuctionExtended(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	)
	entity._llama_id = event.params._llama_id
	entity._end_time = event.params._end_time

	entity.blockNumber = event.block.number
	entity.blockTimestamp = event.block.timestamp
	entity.transactionHash = event.transaction.hash

	entity.save()
}

export function handleAuctionTimeBufferUpdated(
	event: AuctionTimeBufferUpdatedEvent
): void {
	const entity = new AuctionTimeBufferUpdated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	)
	entity._time_buffer = event.params._time_buffer

	entity.blockNumber = event.block.number
	entity.blockTimestamp = event.block.timestamp
	entity.transactionHash = event.transaction.hash

	entity.save()
}

export function handleAuctionReservePriceUpdated(
	event: AuctionReservePriceUpdatedEvent
): void {
	const entity = new AuctionReservePriceUpdated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	)
	entity._reserve_price = event.params._reserve_price

	entity.blockNumber = event.block.number
	entity.blockTimestamp = event.block.timestamp
	entity.transactionHash = event.transaction.hash

	entity.save()
}

export function handleAuctionMinBidIncrementPercentageUpdated(
	event: AuctionMinBidIncrementPercentageUpdatedEvent
): void {
	const entity = new AuctionMinBidIncrementPercentageUpdated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	)
	entity._min_bid_increment_percentage =
		event.params._min_bid_increment_percentage

	entity.blockNumber = event.block.number
	entity.blockTimestamp = event.block.timestamp
	entity.transactionHash = event.transaction.hash

	entity.save()
}

export function handleAuctionDurationUpdated(
	event: AuctionDurationUpdatedEvent
): void {
	const entity = new AuctionDurationUpdated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	)
	entity._duration = event.params._duration

	entity.blockNumber = event.block.number
	entity.blockTimestamp = event.block.timestamp
	entity.transactionHash = event.transaction.hash

	entity.save()
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
	const entity = new AuctionCreated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	)
	entity._llama_id = event.params._llama_id
	entity._start_time = event.params._start_time
	entity._end_time = event.params._end_time

	entity.blockNumber = event.block.number
	entity.blockTimestamp = event.block.timestamp
	entity.transactionHash = event.transaction.hash

	entity.save()
}

export function handleAuctionSettled(event: AuctionSettledEvent): void {
	const entity = new AuctionSettled(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	)
	entity._llama_id = event.params._llama_id
	entity._winner = event.params._winner
	entity._amount = event.params._amount

	entity.blockNumber = event.block.number
	entity.blockTimestamp = event.block.timestamp
	entity.transactionHash = event.transaction.hash

	entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
	const entity = new Withdraw(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	)
	entity._withdrawer = event.params._withdrawer
	entity._amount = event.params._amount

	entity.blockNumber = event.block.number
	entity.blockTimestamp = event.block.timestamp
	entity.transactionHash = event.transaction.hash

	entity.save()
}
