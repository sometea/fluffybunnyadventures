module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  eleventyConfig.addPassthroughCopy("templates/favicon.ico");

  eleventyConfig.addCollection("posts", function (collectionApi) {
      return collectionApi.getFilteredByGlob("templates/content/posts/*.md");
  });
  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("templates/content/pages/*.md");
  });
  eleventyConfig.addCollection("ads", function (collectionApi) {
    return collectionApi.getFilteredByGlob("templates/content/ads/*.md");
  });
  return {
    dir: {
      input: "templates",
      includes: "../_includes",
    },
  };
};
