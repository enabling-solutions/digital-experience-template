require("dotenv").config()

module.exports = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: ["./apps/**/*.graphql"],
  ignoreNoDocuments: true,
  generates: {
    "./packages/graphql-codegen-types/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query"
      ],
      config: {
        fetcher: "graphql-request",
        exposeQueryKeys: true,
        exposeFetcher: true
      }
    }
  }
}
