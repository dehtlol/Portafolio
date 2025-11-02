<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      navItems: [
        { text: "Inicio", target: "index" },
        { text: "Sobre mí", target: "about" },
        { text: "Lenguajes", target: "languages" },
        { text: "Frameworks", target: "frameworks" },
        { text: "Contacto", target: "contact" },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-md hacker-navbar">
    <div class="container">
      <a class="navbar-brand" href="#" @click.prevent="scrollToSection('index')">
        <span class="name-main">David</span>
        <span class="name-last">Hernandez</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto mb-2 mb-md-0">
          <li class="nav-item" v-for="item in navItems" :key="item.text">
            <a class="nav-link neon-link" href="#" @click.prevent="scrollToSection(item.target)">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </div>
      <div class="d-none d-md-flex align-items-center">
        <a class="btn btn-neon ms-2" href="/doc/cv.pdf" download="David_Hernandez_CV.pdf">
          <i class="fa-solid fa-download me-1"></i> Descargar CV
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .hacker-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(0, 255, 65, 0.25);
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.1);
    z-index: 9999;
    transition: all 0.4s ease-in-out;
  }
  .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.8);
  }
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.95)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
  .hacker-navbar::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 0 0 16px 16px;
    background: linear-gradient(
      90deg,
      #000000,
      #0f1f0f,
      #146b24,
      #00a83f,
      #00ff41,
      #69ff94,
      #c8ffcb,
      #69ff94,
      #00ff41,
      #00a83f,
      #146b24,
      #0f1f0f,
      #000000
    );
    background-size: 200% 200%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderMove 3s linear infinite;
    z-index: -1;
  }
  @keyframes borderMove {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
  .navbar-brand {
    font-family: "Share Tech Mono", monospace;
    font-weight: bold;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    z-index: 1;
    cursor: pointer;
  }
  .name-main {
    color: #ffffff;
    font-size: 1.3rem;
    text-shadow: 0 0 8px #00ff41;
  }
  .name-last {
    color: #ffffff;
    font-size: 1.1rem;
    text-shadow: 0 0 12px #69ff94;
  }
  .nav-link {
    color: #e0eae0 !important;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;
    position: relative;
    transition: all 0.3s ease;
    margin: 0 10px;
  }
  .nav-link:hover {
    color: #00ff41 !important;
    text-shadow: 0 0 10px #00ff41;
  }
  .neon-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: #00ff41;
    transition: width 0.3s ease;
  }
  .neon-link:hover::after {
    width: 100%;
  }
  .btn-neon {
    border: 1px solid #00ff41;
    color: #00ff41;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 6px 14px;
    border-radius: 6px;
    background: transparent;
    text-shadow: 0 0 8px #00ff41;
    box-shadow: 0 0 8px rgba(0, 255, 65, 0.2);
    transition: all 0.3s ease;
  }
  .btn-neon:hover {
    background: #00ff41;
    color: #000;
    text-shadow: none;
    box-shadow: 0 0 15px #00ff41;
    transform: translateY(-2px);
  }
  @media (max-width: 767.98px) {
    .navbar-collapse {
      background: rgba(0, 0, 0, 0.9);
      border-radius: 12px;
      padding: 1rem;
      box-shadow: 0 0 15px rgba(0, 255, 65, 0.1);
    }
    .navbar-brand {
      font-size: 1.1rem;
    }
  }
</style>
