<script>
export default {
  name: "IndexTemplate",
  data() {
    return {
      titles: [
        "Soy Programador",
        "Soy Desarrollador Full Stack",
        "Soy Ingeniero en Sistemas",
      ],
      currentTitle: "",
      titleIndex: 0,
      isDeleting: false,
    };
  },
  mounted() {
    this.typingEffect();
  },
  methods: {
    typingEffect() {
      const fullText = this.titles[this.titleIndex];
      const speed = this.isDeleting ? 60 : 120;
      if (this.isDeleting) {
        this.currentTitle = fullText.substring(0, this.currentTitle.length - 1);
      } else {
        this.currentTitle = fullText.substring(0, this.currentTitle.length + 1);
      }
      if (!this.isDeleting && this.currentTitle === fullText) {
        setTimeout(() => (this.isDeleting = true), 1500);
      } else if (this.isDeleting && this.currentTitle === "") {
        this.isDeleting = false;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      }
      setTimeout(this.typingEffect, speed);
    },
  },
};
</script>

<template>
  <section class="index-section">
    <div class="header">
      <h2 class="title">[ Bienvenido a mi mundo digital ]</h2>
      <div class="line"></div>
    </div>
    <div class="hero-content">
      <div class="photo">
        <div class="photo-frame">
          <img src="/img/Rostro.png" alt="Foto de David Hernandez" />
          <div class="scan-line"></div>
        </div>
      </div>
      <div class="info">
        <h1>Ing. David Enrique Hernandez Torres</h1>
        <h2>{{ currentTitle }}<span class="cursor">█</span></h2>
        <p>
          Desarrollador apasionado por la tecnología, la innovación y la creación de interfaces modernas.
          Con experiencia en Angular, Vue.js, .NET , Laravel y más, enfocado en desarrollar soluciones limpias,
          seguras y eficientes.
        </p>
        <div class="tech-stack">
          <span>Trabajo en equipo</span>
          <span>Comunicación efectiva</span>
          <span>Resolución de problemas</span>
          <span>Pensamiento lógico</span>
          <span>Aprendizaje continuo</span>
          <span>Adaptabilidad</span>
          <span>Control de versiones (Git)</span>
          <span>Buenas prácticas de código</span>
          <span>Depuración y testing</span>
          <span>Colaboración en proyectos ágiles</span>
          <span>Optimización de código</span>
          <span>Diseño UX/UI básico</span>
          <span>Consumo de API REST</span>
          <span>Integración Front-Back</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .index-section {
    position: relative;
    padding: 3rem 2rem;
    color: #00ff41;
    font-family: "Courier New", monospace;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(0, 255, 65, 0.15);
    text-align: center;
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
    0% { opacity: 1; text-shadow: 0 0 10px #00ff41; }
    50% { opacity: 0.9; text-shadow: 0 0 6px #69ff94; }
    100% { opacity: 1; text-shadow: 0 0 12px #00ff41; }
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
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
  .hero-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .photo-frame {
    position: relative;
    width: 320px;
    height: 360px;
    overflow: hidden;
    border: 2px solid #00ff41;
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(0, 255, 65, 0.3);
    background: linear-gradient(180deg, #001a00, #000);
    animation: frameGlow 3s ease-in-out infinite alternate;
  }
  @keyframes frameGlow {
    from { box-shadow: 0 0 15px #00ff41; }
    to { box-shadow: 0 0 35px #00ff41; }
  }
  .photo-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    transition: transform 0.4s ease, opacity 0.4s;
  }
  .photo-frame:hover img {
    transform: scale(1.05);
    opacity: 1;
  }
  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, transparent, #00ff41, transparent);
    animation: scan 3s linear infinite;
    opacity: 0.8;
  }
  @keyframes scan {
    0% { top: 0; opacity: 0.2; }
    50% { opacity: 1; }
    100% { top: 100%; opacity: 0.2; }
  }
  .info {
    max-width: 700px;
    text-align: center;
  }
  .info h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 10px #00ff41;
  }
  .info h2 {
    font-size: 1.5rem;
    color: #69ff94;
    min-height: 30px;
  }
  .cursor {
    animation: blink 0.8s infinite;
  }
  @keyframes blink {
    0%, 50% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
  p {
    color: #c8ffcb;
    margin-top: 1rem;
    line-height: 1.6;
    opacity: 0.85;
    font-size: 1rem;
  }
  .tech-stack {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.7rem;
  }
  .tech-stack span {
    border: 1px solid #00ff41;
    padding: 6px 14px;
    border-radius: 6px;
    font-size: 0.9rem;
    text-shadow: 0 0 6px #00ff41;
    background: rgba(0, 255, 65, 0.05);
    transition: 0.3s;
  }
  .tech-stack span:hover {
    background: #00ff41;
    color: #000;
    transform: scale(1.05);
    text-shadow: none;
  }
  @media (max-width: 768px) {
    .title { font-size: 1.6rem; }
    .info h1 { font-size: 1.8rem; }
    .info h2 { font-size: 1.2rem; }
    .photo-frame {
      width: 160px;
      height: 190px;
    }
  }
</style>
