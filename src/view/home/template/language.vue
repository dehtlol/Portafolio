<script>
export default {
  name: "LanguageTemplate",
  data() {
    return {
      selectedLang: null,
      showModal: false,
      categories: [
        {
          title: "Front-End",
          languages: [
            {
              name: "HTML5",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              desc: "Estructuración de interfaces semánticas, limpias y optimizadas para SEO, garantizando accesibilidad y compatibilidad entre navegadores.",
              exp: "3 años de experiencia",
            },
            {
              name: "CSS3",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
              desc: "Dominio de Flexbox, Grid y animaciones avanzadas, aplicadas en diseños responsive y centrados en la experiencia del usuario (UI/UX).",
              exp: "3 años de experiencia",
            },
            {
              name: "JavaScript",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              desc: "Implementación de interactividad avanzada, manipulación eficiente del DOM y optimización del rendimiento en interfaces dinámicas.",
              exp: "2 años de experiencia",
            },
            {
              name: "TypeScript",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              desc: "Desarrollo escalable y mantenible mediante tipado estricto y arquitectura modular en frameworks como Angular y Vue.",
              exp: "1 año de experiencia",
            },
          ],
        },
        {
          title: "Back-End",
          languages: [
            {
              name: "PHP",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
              desc: "Desarrollo de sistemas y aplicaciones web con autenticación segura, validación robusta y conexión a bases de datos MySQL.",
              exp: "2 años de experiencia",
            },
            {
              name: "C#",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
              desc: "Implementación de APIs RESTful, controladores MVC y sistemas internos bajo entornos ASP.NET y .NET Core.",
              exp: "1 año de experiencia",
            },
            {
              name: "Java",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              desc: "Diseño e implementación de servicios backend y microservicios con Spring Boot, priorizando modularidad y rendimiento.",
              exp: "2 años de experiencia",
            },
            {
              name: "Visual Basic",
              logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg",
              desc: "Automatización de procesos, gestión de datos y mantenimiento de aplicaciones internas en entornos corporativos .NET.",
              exp: "1 año de experiencia",
            },
          ],
        },
        {
          title: "Base de Datos",
          languages: [
            {
              name: "MySQL / SQL Server",
              logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
              desc: "Diseño de esquemas relacionales, optimización de consultas, creación de procedimientos almacenados y mantenimiento de integridad referencial.",
              exp: "2 años de experiencia",
            },
          ],
        },
      ],
    };
  },
  methods: {
    openModal(lang) {
      this.selectedLang = lang;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<template>
  <section class="language-section">
    <div class="header">
      <h2 class="title">[ Lenguajes que domino ]</h2>
      <div class="line"></div>
      <p class="subtitle">
        Divididos por áreas de especialización: Front-End, Back-End y Base de Datos.
      </p>
    </div>
    <div v-for="(cat, i) in categories" :key="i" class="category">
      <h3 class="category-title">{{ cat.title }}</h3>
      <div class="grid">
        <div v-for="(lang, index) in cat.languages" :key="index" class="card" @click="openModal(lang)">
          <div class="logo">
            <img :src="lang.logo" :alt="lang.name" />
          </div>
          <p class="name">{{ lang.name }}</p>
        </div>
      </div>
    </div>
    <transition name="fade-zoom">
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <h2>{{ selectedLang.name }}</h2>
          <img :src="selectedLang.logo" alt="" />
          <p><strong>Descripción:</strong> {{ selectedLang.desc }}</p>
          <p><strong>Experiencia:</strong> {{ selectedLang.exp }}</p>
          <button @click="closeModal">Cerrar</button>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
  .fade-zoom-enter-active {
    animation: zoomIn 0.4s ease forwards;
  }
  .fade-zoom-leave-active {
    animation: zoomOut 0.3s ease forwards;
  }
  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale(0.6);
      filter: drop-shadow(0 0 0 #00ff41);
    }
    100% {
      opacity: 1;
      transform: scale(1);
      filter: drop-shadow(0 0 15px #00ff41);
    }
  }
  @keyframes zoomOut {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.7);
    }
  }
  .language-section {
    position: relative;
    padding: 2rem;
    color: #00ff41;
    font-family: "Courier New", monospace;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(0, 255, 65, 0.15);
    overflow: hidden;
  }
  .header {
    text-align: center;
    margin-bottom: 2rem;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 0 0 10px #00ff41;
    animation: flicker 2s infinite alternate;
  }
  @keyframes flicker {
    0%, 100% {
      text-shadow: 0 0 10px #00ff41;
    }
    50% {
      text-shadow: 0 0 6px #69ff94;
      opacity: 0.9;
    }
  }
  .line {
    width: 100px;
    height: 3px;
    margin: 0.5rem auto 1rem;
    background: linear-gradient(90deg, #00ff41, #69ff94, #00ff41);
    border-radius: 3px;
    animation: moveLine 2s linear infinite;
  }
  @keyframes moveLine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
  .subtitle {
    color: #c8ffcb;
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.8;
  }
  .category {
    margin-top: 3rem;
  }
  .category-title {
    text-align: center;
    font-size: 1.5rem;
    color: #69ff94;
    text-shadow: 0 0 6px #00ff41;
    margin-bottom: 1rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
  .card {
    background: rgba(0, 255, 65, 0.05);
    border: 1px solid rgba(0, 255, 65, 0.2);
    border-radius: 8px;
    text-align: center;
    padding: 1.5rem 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.1);
  }
  .card:hover {
    border-color: #00ff41;
    box-shadow: 0 0 15px #00ff41, inset 0 0 15px rgba(0, 255, 65, 0.2);
    transform: scale(1.05);
  }
  .logo img {
    width: 60px;
    height: 60px;
    filter: drop-shadow(0 0 6px #00ff41);
    transition: 0.3s;
  }
  .card:hover .logo img {
    filter: drop-shadow(0 0 15px #00ff41);
  }
  .name {
    margin-top: 0.5rem;
    color: #69ff94;
    font-weight: bold;
    font-size: 1rem;
  }
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    backdrop-filter: blur(5px);
  }
  .modal-content {
    background: rgba(0, 255, 65, 0.05);
    border: 1px solid #00ff41;
    border-radius: 12px;
    padding: 2rem;
    width: 90%;
    max-width: 500px;
    text-align: center;
    color: #c8ffcb;
    box-shadow: 0 0 20px #00ff41;
  }
  .modal-content h2 {
    color: #00ff41;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px #00ff41;
  }
  .modal-content img {
    width: 70px;
    height: 70px;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0 8px #00ff41);
  }
  .modal-content button {
    margin-top: 1.5rem;
    background: #00ff41;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
  .modal-content button:hover {
    background: #69ff94;
  }
</style>
