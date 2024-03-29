# Llama Auctions Subgraph

Subgraph to track Llamas Auctions House https://thellamas.io

To use the graph, you can go to the public Graph API:

https://thegraph.com/hosted-service/subgraph/eabz/the-llamas-auctions

## Getting Started

First of all, install the dependencies to run this app:

- [NodeJS](https://nodejs.org)
- [pnpm](https://pnpm.io/installation)

```bash
# Install the graph cli globally
$ npm i -g @graphprotocol/graph-cli

# Clone this repository
$ git clone https://github.com/eabz/llama-auctions-subgraph && cd llama-auctions-subgraph

# Install dependencies
$ pnpm i

# Generate the code
$ pnpm codegen

# Build the graph to upload
$ pnpm build
```

## Commands

- `codegen`: generates the graph specific structures from the abi.
- `build`: compile the subpgrah code.
- `deploy`: deploy the subgraph to the hosted service.

Check [package.json](./package.json) for other useful scripts.

## Contribution Guidelines

Developers are expected to follow contribution guidelines to keep the codebase efficient, readable, and standardized. Contribution guidelines are laid out so developers and contributors can submit their work without much revision, resulting in faster development and more useful contributions. These guidelines are specified through eslint modules.
