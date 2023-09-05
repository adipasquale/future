const marked = require('marked')
const { sanitize } = require('dompurify')

// markdown.register(env, marked);

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img")
  eleventyConfig.addPassthroughCopy("js")
  eleventyConfig.addPassthroughCopy("css")
  eleventyConfig.addPassthroughCopy({
    "node_modules/photoswipe/dist/photoswipe-lightbox.esm.js": "js/photoswipe-lightbox.esm.js",
    "node_modules/photoswipe/dist/photoswipe.esm.js": "js/photoswipe.esm.js",
    "node_modules/photoswipe/dist/photoswipe.css": "css/photoswipe.css",
  })


  eleventyConfig.addShortcode(
    "cloudinaryImg",
    media => {
      const { hash, ext, caption, width, height } = media.attributes
      const filename = `${hash}${ext}`
      const widths = [256, 512, 768, 1024, 1280]
      const maxWidth = Math.min(width, 1280)
      const maxHeight = Math.round(maxWidth * (height / width))

      return `
        <a
          data-pswp-srcset="${widths.map(w => `https://res.cloudinary.com/outofscreen/image/upload/f_auto/q_auto/c_limit,w_${w}/${filename} ${w}w`).join(", ")}"
          data-pswp-width="${maxWidth}"
          data-pswp-height="${maxHeight}"
          href="https://res.cloudinary.com/outofscreen/image/upload/f_auto/q_auto/c_limit,w_1280/${filename}">
          <figure>
            <img
              width="${maxWidth}"
              height="${maxWidth * 3 / 2}"
              sizes="(min-width: 50em) 50em, 100vw"
              srcset="${widths.map(w => `https://res.cloudinary.com/outofscreen/image/upload/f_auto/q_auto/c_fill,ar_2:3,w_${w}/${filename} ${w}w`).join(", ")}"
              src="https://res.cloudinary.com/outofscreen/image/upload/f_auto/q_auto/c_fill,ar_2:3,w_512/${filename}"
              alt="${caption}"
              />
            ${caption ? `<figcaption>${caption}</figcaption>` : ""}
          </figure>
        </a>
      `
    }
  )

  eleventyConfig.addFilter("markdown", function (value) {
    return marked.parse(value)
  })

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
