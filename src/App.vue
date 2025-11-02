<script setup>
    import HeaderComponent from './includes/header.vue';
    import FooterComponent from './includes/footer.vue';
</script>

<template>
    <header-component/>
    <main class="container py-4">
        <router-view />
    </main>
    <footer-component/>
</template>

<style scoped>
</style>
