const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = "https://future-strapi.fly.dev/api/posts?populate=*&pagination[pageSize]=1000";

  /* This returns a promise */
  const res = await EleventyFetch(url, {
    duration: "1d",
    type: "json",
    fetchOptions: {
      headers: {
        Authorization: "bearer 384056d0f6a723f7a9172d805e663bbf16013cc1317286714c321980a1ffec95a75374773b78a369a1bd8940ee14ef62e47ab696554127da45fdea3911a54bd69dd39da235ae88e414fea488d8b30bae530522ae00918c2cec21ebf56a0e5ea6ad2271b78a8576d45e52edfdf5916a9fcd7bc246626cdee2e5287e71890c2697"
      }
    }
  });
  return res.data;
};
