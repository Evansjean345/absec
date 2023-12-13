document.addEventListener('DOMContentLoaded', function () {
    // Attendez que le DOM soit chargé avant d'exécuter le code
  
    // Exemple de requête avec fetch
    fetch('http://localhost:4000/futur_event/absec')
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
            serviceBlock.classList.add('auto-container"')

            serviceBlock.innerHTML = `
            <div class="inner-box">
            <h3>${item.title}</h3>
            <p>
              ${item.synopsis}
            </p>

            <!-- Featured Outer -->
            <div class="featured-outer">
              <div class="feature-inner">
                <div class="row clearfix">
                  <!-- Feature Block Three -->
                  <div class="feature-block-three col-lg-4 col-md-6 col-sm-12">
                    <div class="block-inner">
                      <div class="inner-content">
                        <span class="icon flaticon-user-4"></span>
                        <strong>By</strong>
                        ${item.by}
                      </div>
                    </div>
                  </div>

                  <!-- Feature Block Three -->
                  <div class="feature-block-three col-lg-4 col-md-6 col-sm-12">
                    <div class="block-inner">
                      <div class="inner-content">
                        <span class="icon flaticon-calendar"></span>
                        <strong>Date</strong>
                        ${item.date}
                      </div>
                    </div>
                  </div>

                  <!-- Feature Block Three -->
                  <div class="feature-block-three col-lg-4 col-md-6 col-sm-12">
                    <div class="block-inner">
                      <div class="inner-content">
                        <span class="icon flaticon-home"></span>
                        <strong>Category</strong>
                        ${item.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" class="theme-btn live-preview" style="color: #fff"
                >live preview <span class="arrow flaticon-right-arrow-1"></span
              ></a>
            </div>
            <!-- End Featured Outer -->

            <!-- Main Image -->
            <div class="main-image">
              <img
                src=${item?.picture?.[0]}
                alt
                style="
                  object-fit: cover;
                  background-size: cover;
                  width: 1170px;
                  height: 570px;
                "
              />
            </div>
            <!-- End Main Image -->

            <h6>thématique</h6>
            <div class="blocks-outer">
              <div class="row clearfix">
                <!-- Feature Block Four -->
                <div
                  class="feature-block-four col-xl-4 col-lg-4 col-md-6 col-sm-12"
                >
                  <div class="feature-inner transition-300ms">
                    <div class="icon transition-500ms flaticon-search-2"></div>
                    <h5>
                      <a href="service-detail.html">${item.theme1}</a>
                    </h5>
                  </div>
                </div>

                <!-- Feature Block Four -->
                <div
                  class="feature-block-four col-xl-4 col-lg-4 col-md-6 col-sm-12"
                >
                  <div class="feature-inner transition-300ms">
                    <div
                      class="icon transition-500ms flaticon-website-design"
                    ></div>
                    <h5><a href="service-detail.html">${item.theme2}</a></h5>
                  </div>
                </div>

                <!-- Feature Block Four -->
                <div
                  class="feature-block-four col-xl-4 col-lg-4 col-md-6 col-sm-12"
                >
                  <div class="feature-inner transition-300ms">
                    <div class="icon transition-500ms flaticon-magnifier"></div>
                    <h5><a href="service-detail.html">${item.theme3}</a></h5>
                  </div>
                </div>
              </div>
            </div>
            <p>
              ${item.theme}
            </p>
            <!-- Gallery Images -->
            <div class="gallery-images">
              <div class="row clearfix">
                <!-- Column -->
                <div class="column col-lg-6 col-md-6 col-sm-12">
                  <!-- Main Image -->
                  <div class="main-image">
                    <img
                      src=${item?.picture?.[1]}
                      alt
                      style="
                        object-fit: cover;
                        background-size: cover;
                        width: 570px;
                        height: 400px;
                      "
                    />
                  </div>
                  <!-- End Main Image -->
                </div>
                <!-- Column -->
                <div class="column col-lg-6 col-md-6 col-sm-12">
                  <!-- Main Image -->
                  <div class="main-image">
                    <img
                      src=${item?.picture?.[2]}
                      alt
                      style="
                        object-fit: cover;
                        background-size: cover;
                        width: 570px;
                        height: 400px;
                      "
                    />
                  </div>
                  <!-- End Main Image -->
                </div>
              </div>
            </div>
            <!--<h6>Seminaires</h6>-->
            <!-- Steps Outer -->
          <!--  <div class="steps-outer">
              <div class="row clearfix">-->
                <!-- Step Block -->
             <!--   <div class="step-block col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="step-content">
                      <span class="number" style="color: #fff">01</span>
                      <h5>Research & Analyze</h5>
                      <div class="step-text">
                        "Recherche et Analyse" pour des études et analyses
                        approfondies
                      </div>
                    </div>
                  </div>
                </div>-->

                <!-- Step Block -->
              <!--  <div class="step-block col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="step-content">
                      <span
                        class="number"
                        style="color: #07983d; background: #f7f5f5"
                        >02</span
                      >
                      <h5>Troubleshooting</h5>
                      <div class="step-text">
                        Trouvez des solutions rapides dans notre section
                        "Dépannage".
                      </div>
                    </div>
                  </div>
                </div>-->

                <!-- Step Block -->
              <!--  <div class="step-block col-lg-4 col-md-6 col-sm-12">
                  <div class="inner-box">
                    <div class="step-content">
                      <span
                        class="number"
                        style="background: #07983d; color: #fff"
                        >03</span
                      >
                      <h5>Deep Consultancy</h5>
                      <div class="step-text">
                        Expertise approfondie grâce à "Deep Consultancy".
                      </div>
                    </div>
                  </div>
                </div>-->
          <!--    </div>
            </div>-->
         <!--   <h6>Thematique</h6>
            <p>
              Séminaires, Cours et Ateliers de formation de courte durée avec
              délivrance de certificat de spécialisation
              <br />
              Thématique business d’actualité orientée sur des solutions
              pratiques applicables par les participants dans leurs entreprises
              <br />
              Enseignements par la méthode de cas type MBA
            </p>-->
            <!-- Lower Image -->
            <!--<div class="lower-image">
              <img
                src="assets/images/event-two/event-6.jpg"
                alt
                style="
                  object-fit: cover;
                  background-size: cover;
                  width: 1170px;
                  height: 400px;
                "
              />
            </div>-->
            <!-- End Lower Image -->
            <!-- Lower Image -->
           <!-- <div class="lower-image">
              <img
                src="assets/images/event-two/event-5.jpg"
                alt
                style="
                  object-fit: cover;
                  background-size: cover;
                  width: 1170px;
                  height: 400px;
                "
              />
            </div>-->
            <!-- End Lower Image -->
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
  