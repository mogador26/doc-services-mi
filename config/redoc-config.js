 module.exports = function(eleventyConfig) {
 
    // Copier les fichiers Redoc locaux dans le dossier public
 eleventyConfig.addPassthroughCopy({
    "node_modules/redoc/bundles/redoc.standalone.js": "redoc/redoc.standalone.js"
    });
    // Shortcode pour Redoc
    eleventyConfig.addShortcode("redocUI", function(apiPath) {
    return `
      <script src="/redoc/redoc.standalone.js"></script>
      <div id="redoc-container"></div>
      <script>
        Redoc.init('${apiPath}', { scrollYOffset: 60,
        menuToggle: false,
        disableSearch: false,
        pathInMiddlePanel: false,
        showObjectSchemaExamples: false ,
        theme: {
            colors: {
                primary: {
                    main: '#007bff'
                }
            }
        }
    }, document.getElementById('redoc-container'));
      </script>
    `;
    });
}