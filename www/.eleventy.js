module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img")
  eleventyConfig.addPassthroughCopy("js")
  eleventyConfig.addPassthroughCopy("css")

  return {
    dir: {
      input: "11ty_input",
      output: "11ty_output",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk"
  }
}
