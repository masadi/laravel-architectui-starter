<template>
  <div class="h-100 bg-plum-plate bg-animation">
    <div class="d-flex h-100 justify-content-center align-items-center">
      <div class="mx-auto app-login-box col-md-8">
        <router-link :to="{ name: 'dashboard' }"><div class="app-logo-inverse mx-auto mb-3"></div></router-link>
        <div class="modal-dialog w-100 mx-auto">
          <div class="modal-content">
            <div class="modal-body">
              <div class="h5 modal-title text-center">
                <h4 class="mt-2">
                  <div>Welcome back,</div>
                  <span>Please sign in to your account below.</span>
                </h4>
              </div>
              <div class="form-row">
                <div class="col-md-12">
                  <div class="position-relative form-group">
                    <input type="email" class="form-control" placeholder="Email" v-model="data.email">
                    <p class="text-danger" v-if="errors.email">{{ errors.email[0] }}</p>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12">
                  <div class="position-relative form-group">
                    <input type="password" class="form-control" placeholder="Password" v-model="data.password">
                    <p class="text-danger" v-if="errors.password">{{ errors.password[0] }}</p>
                  </div>
                </div>
              </div>
              <div class="position-relative form-check">
                <input class="form-check-input" type="checkbox" name="remember" id="remember" v-model="data.remember_me">
                <label class="form-check-label" for="remember">Remember Me</label>
              </div>
            </div>
            <div class="modal-footer clearfix">
              <div class="float-left">
                <a href="#" class="btn btn-link">I forgot my password</a>
              </div>
              <div class="float-right">
                <button type="submit" class="btn btn-primary" @click.prevent="postLogin">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- JAVASCRIPT SECTION -->
<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
export default {
    data() {
        return {
            data: {
                email: '',
                password: '',
                remember_me: false
            }
        }
    },
    //SEBELUM COMPONENT DI-RENDER
    created() {
        //KITA MELAKUKAN PENGECEKAN JIKA SUDAH LOGIN DIMANA VALUE isAuth BERNILAI TRUE
        if (this.isAuth) {
            //MAKA DI-DIRECT KE ROUTE DENGAN NAME home
            //this.$router.push({ name: 'dashboard' })
            window.open('/admin/dashboard', '_self')
        }
    },
    computed: {
        ...mapGetters(['isAuth']), //MENGAMBIL GETTERS isAuth DARI VUEX
      	...mapState(['errors'])
    },
    methods: {
        ...mapActions('auth', ['submit']), //MENGISIASI FUNGSI submit() DARI VUEX AGAR DAPAT DIGUNAKAN PADA COMPONENT TERKAIT. submit() BERASAL DARI ACTION PADA FOLDER STORES/auth.js
        ...mapMutations(['CLEAR_ERRORS']),
      
      	//KETIKA TOMBOL LOGIN DITEKAN, MAKA AKAN MEMINCU METHODS postLogin()
        postLogin() {
            //DIMANA TOMBOL INI AKAN MENJALANKAN FUNGSI submit() DENGAN MENGIRIMKAN DATA YANG DIBUTUHKAN
            this.submit(this.data).then(() => {
                //KEMUDIAN DI CEK VALUE DARI isAuth
                //APABILA BERNILAI TRUE
                if (this.isAuth) {
                    this.CLEAR_ERRORS()
                    //MAKA AKAN DI-DIRECT KE ROUTE DENGAN NAME home
                    //this.$router.push({ name: 'dashboard' })
                    window.open('/admin/dashboard', '_self')
                }
            })
        }
    }
}
</script>