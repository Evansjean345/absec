document.addEventListener('DOMContentLoaded', function () {
    // Attendez que le DOM soit chargé avant d'exécuter le code
  
    // Exemple de requête avec fetch
    fetch('https://caauri-api.cyclic.cloud/event_recent/absec')
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
            serviceBlock.classList.add('news-block-two')

            serviceBlock.innerHTML = `
            <div class="inner-box">
                    <div class="image">
                      <a href="blog-detail.html"
                        ><img
                          class="transition-500ms"
                          src=${item.imageUrl}
                          style="
                            background-size: cover;
                            object-fit: cover;
                            width: 894px;
                            height: 382px;
                          "
                          alt=""
                      /></a>
                    </div>
                    <div class="lower-content">
                      <div class="category" style="color: #07983d">Event</div>
                      <div class="author-box">
                        <div class="box-inner">
                          <div class="author-image">
                            <img
                              src=${item.imageUrl}
                              alt=""
                              style="
                              background-size: contain;
                              object-fit: contain;
                              width: 40px;
                              height: 40px;
                            "
                            />
                          </div>
                          by ${item.by}
                        </div>
                      </div>
                      <h3>
                        <a href="blog-detail.html"
                          >Cérémonie de lancement officiel le samedi 13 novembre
                          2021</a
                        >
                      </h3>
                      <div class="text">
                        Cérémonie de lancement officiel le samedi13 novembre
                        2021
                      </div>
                      <ul class="post-meta">
                        <li>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              image-rendering="optimizeQuality"
                              shape-rendering="geometricPrecision"
                              text-rendering="geometricPrecision"
                              viewBox="0 0 6.827 6.827"
                              id="location"
                              style="color: #777777; margin-top: 4px"
                            >
                              <path
                                fill-rule="nonzero"
                                d="M3.413 1.722c.239 0 .455.094.611.245a.821.821 0 0 1 0 1.184.875.875 0 0 1-.61.245.875.875 0 0 1-.611-.245.821.821 0 0 1 0-1.184.875.875 0 0 1 .61-.245zm.46.392a.659.659 0 0 0-.46-.185c-.18 0-.342.07-.46.185a.618.618 0 0 0 0 .89c.118.115.28.185.46.185s.343-.07.46-.184a.618.618 0 0 0 0-.891z"
                              ></path>
                              <path
                                fill-rule="nonzero"
                                d="M3.319 5.838c-.138-.252-.305-.538-.48-.836-.367-.63-.767-1.312-.985-1.842a1.577 1.577 0 0 1-.119-.6c0-.45.188-.856.492-1.15A1.7 1.7 0 0 1 3.413.933 1.7 1.7 0 0 1 4.6 1.41a1.596 1.596 0 0 1 .37 1.755c-.22.53-.615 1.208-.982 1.834-.174.298-.342.585-.48.84a.108.108 0 0 1-.189-.001zM3.025 4.9c.138.235.271.463.388.671.118-.21.252-.439.39-.675.363-.62.755-1.29.97-1.809a1.374 1.374 0 0 0 .105-.529c0-.392-.164-.747-.429-1.003a1.484 1.484 0 0 0-1.036-.416c-.404 0-.77.159-1.035.416a1.393 1.393 0 0 0-.327 1.528c.212.515.609 1.192.974 1.817z"
                              ></path>
                              <path fill="none" d="M0 0h6.827v6.827H0z"></path>
                            </svg> </span
                          >${item.place}
                        </li>
                        <li>
                          <span class="icon fa fa-calendar"></span>${item.hours} GMT
                        </li>
                      </ul>
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
  
document.addEventListener('DOMContentLoaded', function () {
    // Attendez que le DOM soit chargé avant d'exécuter le code
  
    // Exemple de requête avec fetch
    fetch('https://caauri-api.cyclic.cloud/event_recent/absec')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const allData = [...data]
        const ServiceContainer = document.getElementById('service-container-2')
        const serviceBlocks = allData.map(item => {
            const serviceBlock = document.createElement('article')
            serviceBlock.classList.add('post')

            serviceBlock.innerHTML = `
            <figure class="post-thumb">
              <img
                src=${item.imageUrl}
                alt=""
                style="width: 80px; height: 80px; object-fit: cover; background-size: cover;"
              /><a href="blog-detail.html" class="overlay-box"
                ><span class="icon fa fa-link"></span
              ></a>
            </figure>
            <div class="text">
              <a href="blog-detail.html"
                >${item.title}</a
              >
            </div>
            <div class="post-info">${item.hours} GMT - ${item.place}</div>
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

document.addEventListener('DOMContentLoaded', function () {
    // Attendez que le DOM soit chargé avant d'exécuter le code
  
    // Exemple de requête avec fetch
    fetch('https://caauri-api.cyclic.cloud/futur_event/absec')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const allData = [...data]
        const ServiceContainer = document.getElementById('service-container-3')
        const serviceBlocks = allData.map(item => {
            const serviceBlock = document.createElement('ul')
            serviceBlock.classList.add('cat-list-two')

            serviceBlock.innerHTML = `
            <li>
            <a href="#">${item.category}<span></span></a>
          </li>
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
   
document.addEventListener('DOMContentLoaded', function () {
    // Attendez que le DOM soit chargé avant d'exécuter le code
  
    // Exemple de requête avec fetch
    fetch('https://caauri-api.cyclic.cloud/futur_event/absec')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const allData = [...data]
        const ServiceContainer = document.getElementById('service-container-4')
        const serviceBlocks = allData.map(item => {
            const serviceBlock = document.createElement('a')
            serviceBlock.innerHTML = `
            ${item.category}
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
   