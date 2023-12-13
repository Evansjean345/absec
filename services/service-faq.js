document.addEventListener('DOMContentLoaded', function () {
    // Attendez que le DOM soit chargé avant d'exécuter le code
  
    // Exemple de requête avec fetch
    fetch('https://caauri-api.cyclic.cloud/faq/absec/656943302f6a0cc03fac708d')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Manipuler le DOM pour afficher les données dans la div
        const answer1 = document.getElementById('answer-1');
        const question1 = document.getElementById('question-1');
        const answer2 = document.getElementById('answer-2');
        const question2 = document.getElementById('question-2');
        const answer3 = document.getElementById('answer-3');
        const question3 = document.getElementById('question-3');
        const answer4 = document.getElementById('answer-4');
        const question4 = document.getElementById('question-4');
        const answer5 = document.getElementById('answer-5');
        const question5 = document.getElementById('question-5');
        const answer6 = document.getElementById('answer-6');
        const question6 = document.getElementById('question-6');
        const answer7 = document.getElementById('answer-7');
        const question7 = document.getElementById('question-7');
        const answer8 = document.getElementById('answer-8');
        const question8 = document.getElementById('question-8');
        const answer9 = document.getElementById('answer-9');
        const question9 = document.getElementById('question-9');
        const answer10 = document.getElementById('answer-10');
        const question10 = document.getElementById('question-10');

  
        // Utilisez white-space: pre-line pour conserver les sauts de ligne
        answer1.style.whiteSpace = 'pre-line';
        question1.style.whiteSpace = 'pre-line';
        answer2.style.whiteSpace = 'pre-line';
        question2.style.whiteSpace = 'pre-line';
        answer3.style.whiteSpace = 'pre-line';
        question3.style.whiteSpace = 'pre-line';
        answer4.style.whiteSpace = 'pre-line';
        question4.style.whiteSpace = 'pre-line';
        answer5.style.whiteSpace = 'pre-line';
        question5.style.whiteSpace = 'pre-line';
        answer6.style.whiteSpace = 'pre-line';
        question6.style.whiteSpace = 'pre-line';
        answer7.style.whiteSpace = 'pre-line';
        question7.style.whiteSpace = 'pre-line';
        answer8.style.whiteSpace = 'pre-line';
        question8.style.whiteSpace = 'pre-line';
        answer9.style.whiteSpace = 'pre-line';
        question9.style.whiteSpace = 'pre-line';
        answer10.style.whiteSpace = 'pre-line';
        question10.style.whiteSpace = 'pre-line';

  
        // Affichez le texte brut dans le contenu de la div
        answer1.textContent = data.one.text;
        question1.textContent = data.one.title;
        answer2.textContent = data.two.text;
        question2.textContent = data.two.title;
        answer3.textContent = data.three.text;
        question3.textContent = data.three.title;
        answer4.textContent = data.four.text;
        question4.textContent = data.four.title;
        answer5.textContent = data.five.text;
        question5.textContent = data.five.title;
        answer6.textContent = data.six.text;
        question6.textContent = data.six.title;
        answer7.textContent = data.seven.text;
        question7.textContent = data.seven.title;
        answer8.textContent = data.eight.text;
        question8.textContent = data.eight.title;
        answer9.textContent = data.nine.text;
        question9.textContent = data.nine.title;
        answer10.textContent = data.ten.text;
        question10.textContent = data.ten.title;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  });
  