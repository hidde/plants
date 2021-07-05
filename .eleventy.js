module.exports = (function(eleventyConfig) {


  // Base Config
  return {
    dir: {
        input: "src",
        output: "dist",
        includes: "_includes",
        layouts: "_layouts",
        data: "_data"
    },
    templateFormats: ["njk", "md", "txt", "css", "png", "jpg", "jpeg", "svg", "webmanifest"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  }
});
