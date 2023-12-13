document.addEventListener('DOMContentLoaded', function () {
    // Attendez que le DOM soit chargé avant d'exécuter le code
  
    // Exemple de requête avec fetch
    fetch('https://caauri-api.cyclic.cloud/courses/absec')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const allData = [...data]
        const ServiceContainer = document.getElementById('service-container')
        const serviceBlocks = allData.map(item => {
            const serviceBlock = document.createElement('option')
            serviceBlock.innerHTML = `
            <option
             id='course'
             name='course'
            >${item.title}</option>
          `;
      
          return serviceBlock;

          
        })

    // Ajoutez les éléments à la container
  serviceBlocks.forEach(block => {
    ServiceContainer.appendChild(block);
  });

      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }); 
  