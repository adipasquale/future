const strapiApiFetch = require("../../lib/strapiApiFetch");

module.exports = async () =>
  await strapiApiFetch(`tags?populate[medias][populate][0]=media&pagination[pageSize]=1000`)
