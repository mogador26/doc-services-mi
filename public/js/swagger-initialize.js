    
window.onload = function() {
    const scriptElement = document.getElementById('myScript');
    const apiPath = scriptElement.getAttribute('data-param');
    window.ui = SwaggerUIBundle({
      url: apiPath,
      dom_id: '#swagger-ui',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout", // Type de mise en page
      docExpansion: "none", // Afficher ou non les sections par défaut ("list", "full", "none")
      filter: true, // Ajoute une barre de filtre pour rechercher des opérations
      tryItOutEnabled: true // Permet de tester les requêtes directement depuis l'interface
    });
  };
  