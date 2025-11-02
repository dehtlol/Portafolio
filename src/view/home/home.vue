<script>
import IndexTemplate from "./template/index.vue";
import AboutTemplate from "./template/about.vue";
import LanguageTemplate from "./template/language.vue";
import FrameworksTemplate from "./template/frameworks.vue";
import ContactTemplate from "./template/contact.vue";
import ExperienceTemplate from "./template/experience.vue";

export default {
  name: "HomePage",
  components: {
    IndexTemplate,
    AboutTemplate,
    LanguageTemplate,
    FrameworksTemplate,
    ContactTemplate,
    ExperienceTemplate,
  },
};
</script>
<template>
  <div class="main-wrapper">
    <section id="index" class="hero-section py-5 mb-4">
      <div class="container">
        <IndexTemplate />
      </div>
    </section>
    <section id="about" class="about-section py-5 mb-4">
      <div class="container">
        <AboutTemplate />
      </div>
    </section>
    <section id="languages" class="languages-section py-5 mb-4">
      <div class="container">
        <LanguageTemplate />
      </div>
    </section>
    <section id="frameworks" class="frameworks-section py-5 mb-4">
      <div class="container">
        <FrameworksTemplate />
      </div>
    </section>
    <section id="experience" class="experience-section py-5 mb-4">
      <div class="container">
        <ExperienceTemplate />
      </div>
    </section>
    <section id="contact" class="contact-section py-5 mb-4">
      <div class="container">
        <ContactTemplate />
      </div>
    </section>
  </div>
</template>

<style scoped>
  .main-wrapper {
    min-height: 100vh;
  }
  @media (max-width: 768px) {
    .hero-section,
    .experience-section
    .about-section,
    .languages-section,
    .frameworks-section,
    .contact-section {
      padding: 2rem 0 !important;
      margin-bottom: 2rem !important;
    }
  }
  .hero-section,
  .about-section,
  .experience-section,
  .languages-section,
  .frameworks-section,
  .contact-section {
    transition: all 0.3s ease-in-out;
  }
</style>