<script>
export default {
  name: "AboutTemplate",
};
</script>

<template>
  <section class="about-container">
    <div class="about-header">
      <h2 class="title">[ Sobre mí ]</h2>
      <div class="line"></div>
    </div>
    <div class="about-content">
      <div class="about-text">
        <p>
          Soy <strong>David Enrique Hernández Torres</strong>, Ingeniero en Sistemas Computacionales
          con una sólida formación técnica y pasión por el desarrollo web. Me enfoco en construir
          soluciones eficientes, escalables y con un diseño atractivo, aplicando buenas prácticas y
          tecnologías modernas.
        </p>
        <p>
          Tengo experiencia en <strong>Angular</strong>, <strong>Vue.js</strong>, <strong>.NET</strong>,
          <strong>Java Spring Boot</strong> y <strong>Laravel</strong>, tanto en el desarrollo Front-End
          como en la integración de sistemas y API REST.
        </p>
      </div>
      <div class="about-info">
        <ul>
          <li><span>⚙️</span> Desarrollo Front-End con Angular y Vue.js</li>
          <li><span>💻</span> Backend con .NET, Laravel y Spring Boot</li>
          <li><span>🧠</span> Enfoque en UX/UI moderno y responsive</li>
          <li><span>📊</span> Consumo e integración de API REST</li>
          <li><span>🔒</span> Interés en Ciberseguridad y protección de datos</li>
        </ul>
      </div>
    </div>
    <div class="extra-info">
      <div class="education">
        <h3 class="subtitle">🎓 Formación Académica</h3>
        <ul>
          <li>
            <strong>Diplomado de Alta Dirección</strong><br />
            Universidad Más Educación y Enseñanza<br />
            <small>2022 – 2023</small>
          </li>
          <li>
            <strong>Ingeniería en Sistemas Computacionales</strong><br />
            Universidad Más Educación y Enseñanza<br />
            <small>2019 – 2022</small>
          </li>
        </ul>
      </div>
      <div class="certifications">
        <h3 class="subtitle">📜 Certificaciones</h3>
        <ul>
          <li><strong>Desarrollo Front-End</strong> – Grupo Salinas</li>
          <li><strong>Desarrollador Back-End</strong> – Grupo Salinas</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .about-container {
    position: relative;
    color: #00ff41;
    font-family: "Courier New", monospace;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 0 25px rgba(0, 255, 65, 0.2);
    overflow: hidden;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 0 0 10px #00ff41;
    animation: flicker 2s infinite alternate;
  }
  @keyframes flicker {
    0%, 100% { text-shadow: 0 0 10px #00ff41; }
    50% { text-shadow: 0 0 6px #69ff94; opacity: 0.9; }
  }
  .line {
    width: 90px;
    height: 3px;
    background: linear-gradient(90deg, #00ff41, #69ff94, #00ff41);
    border-radius: 2px;
    animation: moveLine 2s linear infinite;
    margin-top: 0.5rem;
  }
  @keyframes moveLine {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
  .about-content {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }
  .about-text {
    flex: 1 1 60%;
    font-size: 1rem;
    line-height: 1.6;
    color: #c8ffcb;
  }
  .about-text strong { color: #69ff94; }
  .about-info {
    flex: 1 1 35%;
    background: rgba(0, 255, 65, 0.05);
    border: 1px solid rgba(0, 255, 65, 0.2);
    border-radius: 8px;
    padding: 1rem 1.5rem;
    box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.1);
  }
  .about-info ul { list-style: none; padding: 0; margin: 0; }
  .about-info li { margin-bottom: 0.8rem; display: flex; align-items: center; color: #c8ffcb; transition: 0.3s; }
  .about-info li span { color: #00ff41; margin-right: 0.5rem; }
  .about-info li:hover { transform: translateX(5px); color: #00ff41; }
  .extra-info {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .education, .certifications {
    flex: 1 1 45%;
    background: rgba(0, 255, 65, 0.05);
    border: 1px solid rgba(0, 255, 65, 0.2);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.1);
  }
  .subtitle {
    font-size: 1.3rem;
    font-weight: bold;
    color: #69ff94;
    margin-bottom: 1rem;
    text-shadow: 0 0 8px #00ff41;
  }
  li { color: #c8ffcb; margin-bottom: 0.8rem; }
  small { color: #69ff94; font-size: 0.9rem; }
  @media (max-width: 768px) {
    .about-content { flex-direction: column; }
    .about-info, .education, .certifications { flex: 1 1 100%; }
    .title { font-size: 1.6rem; }
  }
</style>
