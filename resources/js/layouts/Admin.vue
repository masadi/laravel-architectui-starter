<template>
    <div class="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar fixed-footer" v-if="isAuth">
        <app-header></app-header>

        <div class="app-main">
            <app-sidebar></app-sidebar>
            <div class="app-main__outer">
                <router-view></router-view>
                <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters } from 'vuex'
    import Header from '../components/Header.vue'
    import Sidebar from '../components/Sidebar.vue'
    import Footer from '../components/Footer.vue'
    export default {
      name: "AdminLayout",
        computed: {
            ...mapState(['token']),
            ...mapGetters(['isAuth'])
        },
        components: {
            'app-header': Header,
            'app-sidebar': Sidebar,
            'app-footer': Footer,
        },
        created() {
          if(!this.isAuth){
            //window.open('/login', '_self')
            //next({ name: 'login' })
            router.push("login")
          }
        },
    }
</script>