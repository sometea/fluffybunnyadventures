module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./_tmp/styles.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/styles.css": "./styles.css" });

  eleventyConfig.addPassthroughCopy("templates/favicon.ico");
  eleventyConfig.addPassthroughCopy("templates/images");
  eleventyConfig.addPassthroughCopy("templates/admin");

  eleventyConfig.addCollection("posts", function (collectionApi) {
      return collectionApi
        .getFilteredByGlob("templates/content/posts/*.md")
        .filter(item => !item.data.draft)
        .reverse();
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
