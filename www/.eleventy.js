module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img")
  eleventyConfig.addPassthroughCopy("js")
  eleventyConfig.addPassthroughCopy("css")

  eleventyConfig.addShortcode(
    "cloudinaryImg",
    media => {
      const { description } = media.attributes
      const { hash, ext } = media.attributes.media.data.attributes
      const filename = `${hash}${ext}`
      return `
        <figure>
          <img
          sizes="(min-width: 50em) 50em, 100vw"
          srcset="https://res.cloudinary.com/outofscreen/image/upload/f_auto/q_auto/c_scale,w_256/${filename} 256w,
                  https://res.cloudinary.com/outofscreen/image/upload/f_auto/q_auto/c_scale,w_512/${filename} 512w,
                  https://res.cloudinary.com/outofscreen/image/upload/f_auto/q_auto/c_scale,w_768/${filename} 768w,
                  https://res.cloudinary.com/outofscreen/image/upload/f_auto/q_auto/c_scale,w_1024/${filename} 1024w,
                  https://res.cloudinary.com/outofscreen/image/upload/f_auto/q_auto/c_scale,w_1280/${filename} 1280w"
          src="https://res.cloudinary.com/outofscreen/image/upload/f_auto/q_auto/c_scale,w_512/${filename}"
          alt="${description}" />
          <figcaption>${description}</figcaption>
        </figure>
      `
    }
  )

  eleventyConfig.addFilter("jsonify", function (value) {
    return JSON.stringify(value)
  })

  return {
    dir: {
      input: "11ty_input",
      output: "11ty_output",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk"
  }
}
