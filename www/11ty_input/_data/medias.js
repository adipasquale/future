const strapiApiFetch = require("../../lib/strapiApiFetch");

module.exports = async () =>
  (await strapiApiFetch(`projets?populate[medias][populate][0]=media&pagination[pageSize]=1000`))
    .flatMap(projet => projet.attributes.medias.data)
    .filter(media => media)

