<script setup>
  import { ref } from "vue";
  const selectedJob = ref(null);
  const showModal = ref(false);
  const openModal = (job) => {
    selectedJob.value = job;
    showModal.value = true;
  };
  const closeModal = () => {
    showModal.value = false;
  };
  const jobs = [
    {
      title: "Programador Jr",
      company: "Fincrece SOFOM",
      period: "Abril 2025 – Octubre 2025",
      location: "Villahermosa, Tabasco",
      summary: "Desarrollo en Angular 15, UX/UI y automatización del flujo de solicitudes de crédito.",
      tasks: [
        "Desarrollo y mantenimiento en <strong>Angular 15</strong> con enfoque en rendimiento y UX/UI.",
        "Reestructuración del flujo de solicitudes de crédito.",
        "Creación de formulario tipo <strong>chatbot interactivo</strong>.",
        "Diseño de <strong>panel administrativo</strong> para promotores.",
        "Publicación del sitio web en <strong>HostGator</strong>.",
      ],
    },
    {
      title: "Auxiliar de Sistemas",
      company: "Mersol Sureste",
      period: "Agosto 2024 – Marzo 2025",
      location: "Villahermosa, Tabasco",
      summary: "Desarrollo en ASP.NET y mantenimiento de infraestructura tecnológica.",
      tasks: [
        "Programación en <strong>ASP.NET</strong> (Visual Basic), <strong>HTML</strong>, <strong>CSS</strong> y <strong>JavaScript</strong>.",
        "Rediseño de sitios con <strong>HTML5</strong> y <strong>CSS3</strong>.",
        "Gestión de servidores y respaldo de datos.",
        "Soporte técnico y mantenimiento de red y CCTV.",
      ],
    },
    {
      title: "Técnico Informático",
      company: "RBTEC MEX",
      period: "Diciembre 2023 – Agosto 2024",
      location: "Villahermosa, Tabasco",
      summary: "Soporte técnico, mantenimiento preventivo y gestión de servidores.",
      tasks: [
        "Mantenimiento y respaldo (<strong>backup</strong>) de equipos y servidores.",
        "Instalación y soporte de <strong>CCTV</strong> y redes internas.",
        "Supervisión de almacenamiento y seguridad de datos.",
      ],
    },
    {
      title: "Programador",
      company: "COBATAB",
      period: "Marzo 2022 – Agosto 2022",
      location: "Villahermosa, Tabasco",
      summary: "Desarrollo web en PHP y mantenimiento de sistemas escolares.",
      tasks: [
        "Programación web con <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JS</strong> y <strong>PHP</strong>.",
        "Soporte técnico, copias de seguridad y actualización de contenidos.",
        "Adaptación de <strong>plantillas</strong> y optimización de código.",
      ],
    },
  ];
</script>

<template>
  <section class="experience-container">
    <div class="experience-header">
      <h2 class="title">[ Experiencia Laboral ]</h2>
      <div class="line"></div>
    </div>
    <div class="cards-grid">
      <div v-for="(job, index) in jobs" :key="index" class="job-card" @click="openModal(job)">
        <div class="card-header">
          <h4>{{ job.title }}</h4>
          <span>{{ job.company }}</span>
        </div>
        <p class="summary">{{ job.summary }}</p>
        <small>{{ job.period }} • {{ job.location }}</small>
      </div>
    </div>
    <transition name="fade-zoom">
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">×</button>
          <h3>{{ selectedJob.title }} | <span>{{ selectedJob.company }}</span></h3>
          <small>{{ selectedJob.period }} | {{ selectedJob.location }}</small>
          <ul>
            <li v-for="(task, i) in selectedJob.tasks" :key="i" v-html="task"></li>
          </ul>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
  .experience-container {
    color: #00ff41;
    font-family: "Courier New", monospace;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 0 25px rgba(0, 255, 65, 0.15);
  }
  .title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 0 0 10px #00ff41;
    animation: flicker 2s infinite alternate;
  }
  .line {
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #00ff41, #69ff94, #00ff41);
    border-radius: 3px;
    margin: 0.5rem auto 2rem;
    animation: moveLine 2s linear infinite;
  }
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  .job-card {
    background: rgba(0, 255, 65, 0.05);
    border: 1px solid rgba(0, 255, 65, 0.2);
    border-radius: 10px;
    padding: 1.2rem;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.1);
  }
  .job-card:hover {
    transform: scale(1.05);
    border-color: #00ff41;
    box-shadow: 0 0 20px #00ff41;
  }
  .card-header h4 {
    color: #00ff41;
    margin-bottom: 0.2rem;
  }
  .card-header span {
    color: #69ff94;
    font-size: 0.9rem;
  }
  .summary {
    color: #c8ffcb;
    font-size: 0.95rem;
    margin: 0.6rem 0;
  }
  small {
    color: #69ff94;
    font-size: 0.85rem;
  }
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    backdrop-filter: blur(6px);
  }
  .modal-content {
    background: rgba(0, 255, 65, 0.05);
    border: 1px solid #00ff41;
    border-radius: 12px;
    padding: 2rem;
    width: 90%;
    max-width: 550px;
    color: #c8ffcb;
    box-shadow: 0 0 25px #00ff41;
    position: relative;
  }
  .modal-content h3 {
    color: #00ff41;
    margin-bottom: 0.3rem;
    text-shadow: 0 0 8px #00ff41;
  }
  .modal-content span {
    color: #69ff94;
  }
  .modal-content small {
    color: #c8ffcb;
    display: block;
    margin-bottom: 0.8rem;
  }
  .modal-content ul {
    list-style: none;
    padding: 0;
  }
  .modal-content ul li {
    margin-bottom: 0.6rem;
    line-height: 1.5;
    position: relative;
  }
  .modal-content ul li::before {
    content: "•";
    color: #00ff41;
    margin-right: 0.5rem;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 14px;
    background: transparent;
    border: none;
    color: #00ff41;
    font-size: 1.5rem;
    cursor: pointer;
  }
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
    }
    100% {
      opacity: 1;
      transform: scale(1);
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
</style>
