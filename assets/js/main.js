// chama o Section
function addSection() {
    const sectionHTML = `


    <!-- CARROSSEL -->


    <section>
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555"
                        dy=".3em">Sua foto aqui</text>
                </svg>
                <!-- <img src="..." class="d-block w-100" alt="..."> -->
                <div class="carousel-caption d-none d-md-block">
                    <h5>VENHA SER (INSTITUIÇÃO)!</h5>
                    <p>Construa seu futuro aqui.</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444"
                        dy=".3em">Sua foto aqui</text>
                </svg>
                <!-- <img src="..." class="d-block w-100" alt="..."> -->
                <div class="carousel-caption d-none d-md-block">
                    <h5>PLANO DE ENSINO</h5>
                    <p>Conheça nosso plano de ensino.</p>
                </div>
            </div>
            <div class="carousel-item">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide"
                    preserveAspectRatio="xMidYMid slice" focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333"
                        dy=".3em">Sua foto aqui</text>
                </svg>
                <!-- <img src="..." class="d-block w-100" alt="..."> -->
                <div class="carousel-caption d-none d-md-block">
                    <h5>SEMANA DO ALUNO</h5>
                    <p>Vem aí a semana do aluno!</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</section>


    <!-- CARDS E INFORMATIVOS -->

<section style="padding-top: 5rem; padding-bottom: 5rem;" class="container">
    <div class="cards-e-infomativos-geral">
        <div class="cards">
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Módulos</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Vestibular</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Enem</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content.</p>
                </div>
            </div>
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Preparatórios</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
            </div>
            <div class="informativo-e-institucional">
                <h1>Informativo Institucional</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sit molestias libero, assumenda nobis
                    harum
                    facere incidunt eos maiores aperiam repellendus delectus id quia. Deleniti, exercitationem. Dolor aut
                    eligendi
                    illum?
                </p>
            </div>
    </div>

</section>
<section>
    <div></div>
    <div></div>
    <div></div>
</section>
    `;

    document.querySelector('header').insertAdjacentHTML("afterend", sectionHTML);
}

// Chama as funções quando a página for carregada
window.onload = function () {
    addSection();
};
