const strapiApiFetch = require("../../lib/strapiApiFetch");
const getContenus = require("./contenus");

module.exports = async () => {
  const photoPrincipale = (await getContenus())["photo-principale"]
    .attributes
    .illustration
    .data

  const medias = (await strapiApiFetch(`projets?populate[medias][populate][0]=media&pagination[pageSize]=1000`))
    .flatMap(projet => projet.attributes.medias.data)
    .filter(media => media)
    .filter(media => media.id !== photoPrincipale.id)
    .sort(() => Math.random() - 0.5)
  return medias
}
