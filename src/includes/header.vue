<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
    <nav class="navbar navbar-expand-md  shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">
                David Hernandez
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
            aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav mx-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#index">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#About">Sobre mí</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#language">Lenguajes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#framework">Frameworks</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#project">Proyectos</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contacto</a>
                    </li>
                </ul>
                <div class="d-none d-md-flex align-items-center">
                    <a class="btn btn-outline-primary btn-sm ms-2" href="/cv.pdf" target="_blank" rel="noopener">CV</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .navbar {
        display: block;              
        margin: 10px auto;
        padding: 10px 20px;
        color: #fff;
        border-radius: 8px;
        z-index: 1;
        overflow: hidden;
        width: fit-content;        
        max-width: 95%;
    }

.navbar .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0;
}


@media (max-width: 767.98px) {
  .navbar .container {
    justify-content: space-between;
    padding-left: .5rem;
    padding-right: .5rem;
  }
}

.navbar::before{
    content: "";
    position: absolute;
    inset: 0; /* cubre todo el contorno */
    border-radius: 8px;
    padding: 2px; /* grosor del borde */
    background: linear-gradient(90deg, #1f1956, #00c6ff, #1f1956);
    background-size: 200% 200%;
    -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    animation: moverBorde 3s linear infinite; /* corregido nombre de keyframes */
    z-index: 0;
}

@keyframes moverBorde {
    0%{background-position:0% 50%;}
    100%{background-position:200% 50%;}
}
</style>