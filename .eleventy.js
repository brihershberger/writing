module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("writing", function(collectionApi) {
    return collectionApi.getFilteredByTag("writing");
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};