# Llama Auctions Subgraph

1. Install the graph cli
2. Run command

graph init @llama/auctions-subgraph ./subpgrah \
 --index-events \
 --protocol ethereum \
 --product hosted-service \
 --from-contract 0x47a37ea6b691eb76aaf771d5bdbba2ca68add173 \
 --network mainnet \
 --contract-name LlamaAuctionHouse \
 --start-block 17145207
