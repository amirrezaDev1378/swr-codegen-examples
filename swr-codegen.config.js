const fs = require("fs");

module.exports = {
    gqlGlob: "./**/*.gql",
    targetPath: "src/generated/swr/",
    schema: "./schema.graphql",
    gatewayAddress: "http://localhost:4000/graphql",
};

// -----------

// module.exports = {
//     gqlGlob: "/**/*.gql", ADD . in aval
//     targetPath: "./src/generated/swr",  ADD /
//     schema: "./schema.graphql"
// };


// --------------
// const fs = require("fs");

// module.exports = {
//     gqlGlob: "./**/*.gql",
//     targetPath: "src/generated/swr/",
//     schema: "./schema.graphql"
// };
