<script>
import IndexTemplate from "./template/index.vue";
import AboutTemplate from "./template/about.vue";
import LanguageTemplate from "./template/language.vue";
import FrameworksTemplate from "./template/frameworks.vue";
import ContactTemplate from "./template/contact.vue";

export default {
  name: "HomePage",
  components: {
    IndexTemplate,
    AboutTemplate,
    LanguageTemplate,
    FrameworksTemplate,
    ContactTemplate,
  },
};
</script>

<template>
  <div class="main-wrapper">
    <!-- Hero Section -->
    <section class="hero-section py-5 mb-4">
      <div class="container">
        <IndexTemplate />
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section py-5 bg-light mb-4">
      <div class="container">
        <AboutTemplate />
      </div>
    </section>

    <!-- Languages Section -->
    <section class="languages-section py-5 mb-4">
      <div class="container">
        <LanguageTemplate />
      </div>
    </section>

    <!-- Frameworks Section -->
    <section class="frameworks-section py-5 bg-light mb-4">
      <div class="container">
        <FrameworksTemplate />
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section py-5 mb-4">
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

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.about-section,
.frameworks-section {
  background-color: #f8f9fa;
}

.languages-section,
.contact-section {
  background-color: #ffffff;
}

/* Espaciado responsive */
@media (max-width: 768px) {
  .hero-section,
  .about-section,
  .languages-section,
  .frameworks-section,
  .contact-section {
    padding: 2rem 0 !important;
    margin-bottom: 2rem !important;
  }
}

/* Transiciones suaves */
.hero-section,
.about-section,
.languages-section,
.frameworks-section,
.contact-section {
  transition: all 0.3s ease-in-out;
}
</style>