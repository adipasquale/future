require('dotenv').config()
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  let url = `${process.env.STRAPI_API_URL}/api/posts?populate=*&pagination[pageSize]=1000`;

  /* This returns a promise */
  const res = await EleventyFetch(url, {
    duration: "1m",
    type: "json",
    fetchOptions: {
      headers: {
        Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`
      }
    }
  });
  return res.data;
};
