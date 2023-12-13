document.addEventListener('DOMContentLoaded', function () {
    // Attendez que le DOM soit chargé avant d'exécuter le code
  
    // Exemple de requête avec fetch
    fetch('https://caauri-api.cyclic.cloud/courses_details/absec/656806637ed0d3bd7761ba35')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Manipuler le DOM pour afficher les données dans la div
        const p1 = document.getElementById('p1');
        const p2 = document.getElementById('p2');

  
        // Utilisez white-space: pre-line pour conserver les sauts de ligne
        p1.style.whiteSpace = 'pre-line';
        p2.style.whiteSpace = 'pre-line';

  
        // Affichez le texte brut dans le contenu de la div
        p1.textContent = data.p1;
        p2.textContent = data.p2;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
  