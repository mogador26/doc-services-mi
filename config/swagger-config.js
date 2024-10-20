// config/swagger-config.js
const swaggerUiPath = require("swagger-ui-dist").getAbsoluteFSPath();

module.exports = function(eleventyConfig) {
  // Copier les fichiers Swagger UI dans le répertoire de sortie (public)
  eleventyConfig.addPassthroughCopy({ [swaggerUiPath]: 'swagger-ui' });

  // Shortcode pour intégrer Swagger UI
  eleventyConfig.addShortcode("swaggerUI", function(apiPath) {
    const safeApiPath = encodeURI(apiPath);
    return `
      <link rel="stylesheet" type="text/css" href="/swagger-ui/swagger-ui.css" />
      <script src="/swagger-ui/swagger-ui-bundle.js"></script>
      <script src="/swagger-ui/swagger-ui-standalone-preset.js"></script>
      <script type="text/javascript" src="/js/swagger-initialize.js" data-param="${safeApiPath}" id="myScript"></script>
      <div id="swagger-ui"></div>
      `;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
