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
    body {
    background-color: #fff;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
</style>
