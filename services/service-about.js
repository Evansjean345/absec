document.addEventListener('DOMContentLoaded', function () {
    // Attendez que le DOM soit chargé avant d'exécuter le code
  
    // Exemple de requête avec fetch
    fetch('http://localhost:4000/about/absec/6567cf27ea164cafe5de6aa3')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Manipuler le DOM pour afficher les données dans la div
        const resultContainer = document.getElementById('skill-one');
        const resultContainer2 = document.getElementById('skill-two');
        const resultContainer3 = document.getElementById('skill-three');
        const resultContainer4 = document.getElementById('skill-four');
        const resultContainer5 = document.getElementById('skill-five');
        const history1Title = document.getElementById('history-1-title')
        const history1Text = document.getElementById('history-1-text')
        const history2Title = document.getElementById('history-2-title')
        const history2Text = document.getElementById('history-2-text')
        const history3Title = document.getElementById('history-3-title')
        const history3Text = document.getElementById('history-3-text')
        const history4Title = document.getElementById('history-4-title')
        const history4Text = document.getElementById('history-4-text')
  
        // Utilisez white-space: pre-line pour conserver les sauts de ligne
        resultContainer.style.whiteSpace = 'pre-line';
        resultContainer2.style.whiteSpace = 'pre-line';
        resultContainer3.style.whiteSpace = 'pre-line';
        resultContainer4.style.whiteSpace = 'pre-line';
        resultContainer5.style.whiteSpace = 'pre-line';
        history1Title.style.whiteSpace = 'pre-line'
        history1Text.style.whiteSpace = 'pre-line'
        history2Title.style.whiteSpace = 'pre-line'
        history2Text.style.whiteSpace = 'pre-line'
        history3Title.style.whiteSpace = 'pre-line'
        history3Text.style.whiteSpace = 'pre-line'
        history4Title.style.whiteSpace = 'pre-line'
        history4Text.style.whiteSpace = 'pre-line'
  
        // Affichez le texte brut dans le contenu de la div
        resultContainer.textContent = data.skillOne;
        resultContainer2.textContent = data.skillTwo;
        resultContainer3.textContent = data.skillThree;
        resultContainer4.textContent = data.skillFour;
        resultContainer5.textContent = data.skillFive;
        history1Title.textContent = data.HistoryOne.title
        history1Text.textContent = data.HistoryOne.text
        history2Title.textContent = data.HistoryTwo.title
        history2Text.textContent = data.HistoryTwo.text
        history3Title.textContent = data.HistoryThree.title
        history3Text.textContent = data.HistoryThree.text
        history4Title.textContent = data.HistoryFour.title
        history4Text.textContent = data.HistoryFour.text
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });

  