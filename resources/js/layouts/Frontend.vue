<template>
<div>
    <div class="container">
        <app-header></app-header>
    </div>
    <router-view></router-view>
    <app-footer></app-footer>
</div>
</template>
<script>
import Header from '../components/FrontHeader.vue'
import Footer from '../components/FrontFooter.vue'
export default {
    name: "FrontendLayout",
    components: {
        'app-header': Header,
        'app-footer': Footer,
    },
}
</script>
<style>
  @import '/css/blog.css';
</style>
