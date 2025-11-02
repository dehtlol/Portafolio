<script>
  export default {
    name: "ContactTemplate",
    data() {
      return {
        contacts: [
          {
            name: "Correo",
            value: "deht2001@gmail.com",
            icon: "fas fa-envelope",
            link: "mailto:deht2001@gmail.com",
          },
          {
            name: "LinkedIn",
            value: "David Hernandez",
            icon: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/davidehdeztorres/",
          },
          {
            name: "GitHub",
            value: "David Hernandez",
            icon: "fab fa-github",
            link: "https://github.com/dehtlol",
          },
          {
            name: "WhatsApp",
            value: "+52 993 255 8434",
            icon: "fab fa-whatsapp",
            link: "https://wa.me/529932558434",
          },
        ],
      };
    },
  };
</script>

<template>
  <section class="contact-section">
    <div class="header">
      <h2 class="title">[ Mis Contactos ]</h2>
      <div class="line"></div>
      <p class="subtitle">
        Si deseas colaborar, cotizar un proyecto o simplemente conectar, puedes encontrarme en los siguientes canales:
      </p>
    </div>
    <div class="contact-grid">
      <div v-for="(c, i) in contacts" :key="i" class="contact-card">
        <a :href="c.link" target="_blank" rel="noopener noreferrer">
          <i :class="c.icon"></i>
          <div class="info">
            <h4>{{ c.name }}</h4>
            <p>{{ c.value }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .contact-section {
    position: relative;
    padding: 2rem;
    color: #00ff41;
    font-family: "Courier New", monospace;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(0, 255, 65, 0.15);
    overflow: hidden;
    text-align: center;
  }
  .header {
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
  .subtitle {
    color: #c8ffcb;
    font-size: 1rem;
    max-width: 650px;
    margin: 0 auto;
    opacity: 0.8;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  .contact-card {
    background: rgba(0, 255, 65, 0.05);
    border: 1px solid rgba(0, 255, 65, 0.2);
    border-radius: 8px;
    padding: 1rem 1.2rem;
    text-align: left;
    transition: all 0.3s ease;
    box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.1);
  }
  .contact-card a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #c8ffcb;
    gap: 1rem;
  }
  .contact-card i {
    font-size: 2rem;
    color: #00ff41;
    text-shadow: 0 0 10px #00ff41;
    transition: transform 0.3s ease;
  }
  .contact-card:hover {
    border-color: #00ff41;
    box-shadow: 0 0 20px #00ff41, inset 0 0 10px rgba(0, 255, 65, 0.2);
    transform: translateY(-4px);
  }
  .contact-card:hover i {
    transform: scale(1.2) rotate(5deg);
  }
  .info h4 {
    color: #69ff94;
    font-weight: bold;
    margin: 0;
    font-size: 1.1rem;
  }
  .info p {
    color: #c8ffcb;
    margin: 0.2rem 0 0;
    font-size: 0.95rem;
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    .title { font-size: 1.6rem; }
    .contact-card { text-align: center; }
    .contact-card a { flex-direction: column; gap: 0.5rem; }
    .info p { font-size: 0.85rem; }
  }
</style>
