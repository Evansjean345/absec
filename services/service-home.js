document.addEventListener('DOMContentLoaded', function () {
    // Attendez que le DOM soit chargé avant d'exécuter le code
  
    // Exemple de requête avec fetch
    fetch('http://localhost:4000/home/absec/6567ca9d6ef4e5557750b8d9')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Manipuler le DOM pour afficher les données dans la div
        const resultContainer = document.getElementById('first-title');
        const resultContainer2 = document.getElementById('second-title');
        const Synopsis = document.getElementById('synopsis');
        const Mission = document.getElementById('mission');
        const Excellence = document.getElementById('excellence');
        const Innovation = document.getElementById('innovation');
        const Ouverture = document.getElementById('ouverture');
        const Pragmatisme = document.getElementById('pragmatisme');
        const Vision = document.getElementById('vision');
        const IconBook = document.getElementById('icon-book');
        const IconBag = document.getElementById('icon-bag');
  
        // Utilisez white-space: pre-line pour conserver les sauts de ligne
        resultContainer.style.whiteSpace = 'pre-line';
        resultContainer2.style.whiteSpace = 'pre-line';
        Synopsis.style.whiteSpace = 'pre-line';
        Mission.style.whiteSpace = 'pre-line';
        Excellence.style.whiteSpace = 'pre-line';
        Innovation.style.whiteSpace = 'pre-line';
        Ouverture.style.whiteSpace = 'pre-line';
        Pragmatisme.style.whiteSpace = 'pre-line';
        Pragmatisme.style.whiteSpace = 'pre-line';
        Vision.style.whiteSpace = 'pre-line';
        IconBook.style.whiteSpace = 'pre-line';
        IconBag.style.whiteSpace = 'pre-line';
  
        // Affichez le texte brut dans le contenu de la div
        resultContainer.textContent = data.title;
        resultContainer2.textContent = data.titleTwo;
        Synopsis.textContent = data.synopsis;
        Mission.textContent = data.mission;
        Excellence.textContent = data.excellence;
        Innovation.textContent = data.innovation;
        Ouverture.textContent = data.ouverture;
        Pragmatisme.textContent = data.pragmatisme;
        Vision.textContent = data.vision;
        IconBook.textContent = data.iconBook;
        IconBag.textContent = data.iconBag;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
  