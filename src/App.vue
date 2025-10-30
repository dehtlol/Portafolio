<script setup>
    import HeaderComponent from './includes/header.vue';
</script>

<template>
    <header-component/>
    <main class="container py-4">
        <router-view />
    </main>
</template>

<style scoped>
</style>
