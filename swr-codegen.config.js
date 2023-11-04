const fs = require("fs");

module.exports = {
    gqlGlob: "[!node_module]**/*.gql",
    targetPath: "src/generated/swr/",
    schema: "graphql/schema.graphql",
    gatewayAddress: "https://graphqlzero.almansi.me/api",
};
