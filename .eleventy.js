const markdownIt = require("markdown-it");
const md = new markdownIt({
  html: true,
  breaks: true,
  linkify: true
});

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("assets/css");
    eleventyConfig.addWatchTarget("assets/css");
    eleventyConfig.addPassthroughCopy("assets/scripts");
    eleventyConfig.addFilter("markdown", (content) => {
      return md.render(content);
    });
}