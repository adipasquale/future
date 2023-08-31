const strapiApiFetch = require("../../lib/strapiApiFetch");

module.exports = async () =>
  await strapiApiFetch(`tags?populate=*&pagination[pageSize]=1000`)
