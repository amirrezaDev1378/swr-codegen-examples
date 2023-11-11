const fs = require("fs");

module.exports = {
    gqlGlob: "./graphql/testQuery.gql",
    targetPath: "./src/generated/swr/",
    schema: "./schema.graphql",
    gatewayAddress: "https://graphqlzero.almansi.me/api",
};
