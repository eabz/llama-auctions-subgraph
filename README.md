# Llama Auctions Subgraph

Subgraph to track Llamas Auctions House https://thellamas.io

To use the graph, you can go to the publick Graph API:

https://api.thegraph.com/subgraphs/name/eabz/the-llamas-auctions

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

# Lints and fixes files
$ pnpm lint
```

## Commands

- `codegen`: generates the graph specific structures from the abi.
- `build`: compile the subpgrah code.
- `deploy`: deploy the subgraph to the hosted service.
- `lint`: runs the linter in all the files.

Check [package.json](./package.json) for other useful scripts.

## Contribution Guidelines

Developers are expected to follow contribution guidelines to keep the codebase efficient, readable, and standardized. Contribution guidelines are clearly laid out so developers and contributors can submit their work without much revision, resulting in faster development and more useful contributions. These guideliness are specified through the `rome` configuration.