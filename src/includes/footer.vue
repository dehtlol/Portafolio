<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      socials: [
        { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/davidehdeztorres/ " },
        { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/dehtlol" },
        { name: "Correo", icon: "fa-solid fa-envelope", url: "mailto:deht2001@gmail.com" },
        { name: "Whatsapp", icon: "fa-brands fa-whatsapp", url: "https://wa.me/529932558434" },
      ],
    };
  },
};
</script>

<template>
  <footer class="hacker-footer">
    <div class="footer-line"></div>
    <div class="footer-content container">
      <div class="brand">
        <h3>David <span>Hernandez</span></h3>
        <p>Desarrollador Full-Stack | Programador | Ingeniero en Sistemas</p>
      </div>
      <div class="socials">
        <a v-for="(social, index) in socials" :key="index" :href="social.url" target="_blank" rel="noopener" :aria-label="social.name">
          <i :class="social.icon"></i>
        </a>
      </div>
    </div>
    <div class="footer-separator"></div>
    <div class="footer-bottom">
      <p>
        © {{ new Date().getFullYear() }} <span class="neon">David Hernandez</span> — Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<style scoped>
  .hacker-footer {
    position: relative;
    background: radial-gradient(circle at top, #001a00 0%, #000 90%);
    color: #c8ffcb;
    font-family: "Courier New", monospace;
    padding-top: 2rem;
    text-align: center;
    border-top: 1px solid rgba(0, 255, 65, 0.3);
    box-shadow: 0 -5px 25px rgba(0, 255, 65, 0.15);
    overflow: hidden;
  }
  .footer-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      #000,
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
      #000
    );
    background-size: 200% 200%;
    animation: borderMove 4s linear infinite;
  }
  @keyframes borderMove {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 2rem;
  }
  .brand h3 {
    color: #ffffff;
    font-size: 1.8rem;
    font-weight: bold;
    text-shadow: 0 0 12px #00ff41;
    position: relative;
  }
  .brand h3::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 2px;
    bottom: -5px;
    left: 10%;
    background: linear-gradient(90deg, transparent, #00ff41, transparent);
    box-shadow: 0 0 15px #00ff41;
  }
  .brand span {
    color: #00ff41;
    text-shadow: 0 0 15px #00ff41;
  }
  .brand p {
    color: #c8ffcb;
    font-size: 1rem;
    opacity: 0.85;
    margin-top: 0.5rem;
  }
  .socials {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }
  .socials a {
    color: #c8ffcb;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    background: rgba(0, 255, 65, 0.05);
    border: 1px solid rgba(0, 255, 65, 0.3);
    padding: 10px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 0 10px #69ff94;
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.15);
  }
  .socials a:hover {
    color: #000;
    background: #00ff41;
    transform: scale(1.15);
    text-shadow: none;
    box-shadow: 0 0 20px #00ff41;
  }
  .footer-separator {
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #00ff41, transparent);
    margin: 1rem auto;
    opacity: 0.6;
  }
  .footer-bottom {
    background: rgba(10, 10, 10, 0.95);
    padding: 1rem;
    border-top: 1px solid rgba(0, 255, 65, 0.15);
    font-size: 0.9rem;
  }
  .footer-bottom p {
    margin: 0;
    color: #c8ffcb;
  }
  .footer-bottom .neon {
    color: #00ff41;
    text-shadow: 0 0 12px #00ff41;
  }
  @media (max-width: 768px) {
    .brand h3 {
      font-size: 1.4rem;
    }
    .brand p {
      font-size: 0.9rem;
    }
    .socials a {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }
  }
</style>
