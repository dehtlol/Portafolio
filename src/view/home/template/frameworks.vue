<script>
export default {
  name: "FrameworksTemplate",
  data() {
    return {
      selectedFramework: null,
      frameworksFront: [
        {
          name: "Angular",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          description:
            "Framework TypeScript para construir aplicaciones web dinámicas y escalables con arquitectura basada en componentes.",
          experience:
            "2 años de experiencia ",
        },
        {
          name: "Vue.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          description:
            "Framework progresivo usado para interfaces reactivas y proyectos personales, con integración ágil mediante Vite.",
          experience:
            "2 años de experiencia",
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          description:
            "Librería JavaScript enfocada en la construcción de interfaces dinámicas basadas en componentes reutilizables.",
          experience:
            "1 año de experiencia",
        },
        {
          name: "Bootstrap",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          description:
            "Framework CSS para maquetación responsiva, combinado con animaciones personalizadas y diseños modernos.",
          experience:
            "3 años de experiencia",
        },
      ],
      frameworksBack: [
        {
          name: "Laravel",
          logo: "https://static.cdnlogo.com/logos/l/23/laravel.svg",
          description:
            "Framework moderno de PHP orientado al desarrollo de APIs y sistemas administrativos usando Eloquent ORM y autenticación.",
          experience:
            "1 años de experiencia",
        },
        {
          name: "Spring Boot",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
          description:
            "Framework Java para construir servicios backend y microservicios con configuración automática y Spring Data.",
          experience:
            "1 años de experiencia",
        },
        {
          name: ".NET",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
          description:
            "Ecosistema de Microsoft utilizado para crear APIs REST y sistemas internos empresariales en C# y Visual basic",
          experience:
            "2 años de experiencia",
        },
      ],
    };
  },
  methods: {
    openModal(fw) {
      this.selectedFramework = fw;
    },
    closeModal() {
      this.selectedFramework = null;
    },
  },
};
</script>

<template>
  <section class="frameworks-section">
    <div class="header">
      <h2 class="title">[ Frameworks que uso ]</h2>
      <div class="line"></div>
      <p class="subtitle">
        Frameworks Front-End y Back-End en los que tengo experiencia práctica profesional.
      </p>
    </div>
    <div class="category">
      <h3 class="category-title">Front-End</h3>
      <div class="grid">
        <div v-for="(fw, i) in frameworksFront" :key="'front-' + i" class="card" @click="openModal(fw)" >
          <div class="logo">
            <img :src="fw.logo" :alt="fw.name" />
          </div>
          <p class="name">{{ fw.name }}</p>
        </div>
      </div>
    </div>
    <div class="category">
      <h3 class="category-title">Back-End</h3>
      <div class="grid">
        <div v-for="(fw, i) in frameworksBack" :key="'back-' + i" class="card" @click="openModal(fw)">
          <div class="logo">
            <img :src="fw.logo" :alt="fw.name" />
          </div>
          <p class="name">{{ fw.name }}</p>
        </div>
      </div>
    </div>
    <transition name="fade-zoom">
      <div v-if="selectedFramework" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <h2>{{ selectedFramework.name }}</h2>
          <img :src="selectedFramework.logo" alt="" />
          <p><strong>Descripción:</strong> {{ selectedFramework.description }}</p>
          <p><strong>Experiencia:</strong> {{ selectedFramework.experience }}</p>
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
  .frameworks-section {
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
