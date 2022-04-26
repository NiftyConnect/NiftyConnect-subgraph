# NiftyConnect Subgraph

TheGraph exposes a GraphQL endpoint to query the events and entities on EVM compatible chain

## Subgraphs

**[Orders](https://thegraph.com/hosted-service/subgraph/redefiine/nifty-connect)**: Tracks all orders

## Dependencies

- [Graph CLI](https://github.com/graphprotocol/graph-cli)
  - Required to generate and build local GraphQL dependencies.

```shell
yarn global add @graphprotocol/graph-cli
```

## Deployment

For any of the subgraph: `blocks` as `[subgraph]`

1. Run the `yarn codegen` command to prepare the TypeScript sources for the GraphQL (generated/\*).

2. Run the `yarn build` command to build the subgraph, and check compilation errors before deploying.

3. Run `graph auth --product hosted-service '<ACCESS_TOKEN>'`

4. Deploy via `graph deploy --product hosted-service redefiine/nifty-connect`.
