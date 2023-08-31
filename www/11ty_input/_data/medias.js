const strapiApiFetch = require("../../lib/strapiApiFetch");

module.exports = async () =>
  await strapiApiFetch(`medias?populate=*&pagination[pageSize]=1000`)
