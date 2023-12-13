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
            const serviceBlock = document.createElement('div')
            serviceBlock.classList.add('service-block','col-lg-3','col-md-6')

            serviceBlock.innerHTML = `
            <div class="inner-box">
              <div class="image">
                <a href="course-detail.html">
                  <img class="transition-500ms" src="${item.imageUrl}" alt="" style="height: 351px; width: 300px; background-size: cover; object-fit: cover;">
                </a>
              </div>
              <div class="lower-content">
                <div class="lessons color-two">${item.lessons}</div>
                <div class="lower-box">
                  <h4><a href="course-detail.html">${item.title}</a></h4>
                </div>
              </div>
            </div>
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
  