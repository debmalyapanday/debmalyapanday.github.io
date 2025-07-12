module.exports = function(eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("debmalyapanday.github.io/css");
  eleventyConfig.addPassthroughCopy("debmalyapanday.github.io/js");
  eleventyConfig.addPassthroughCopy("debmalyapanday.github.io/images");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "debmalyapanday.github.io",
      output: "_site"
    }
  };
};
