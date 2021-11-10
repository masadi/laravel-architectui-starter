<template>
  <div class="app-container app-theme-white body-tabs-shadow">
    <div class="app-container">
      <div class="h-100">
        <div class="h-100 no-gutters row">
          <div class="d-none d-lg-block col-lg-4">
            <div class="slider-light">
              <div class="slick-slider">
                <div>
                  <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate" tabindex="-1">
                    <div class="slide-img-bg" style="background-image: url('../assets/images/originals/city.jpg');"></div>
                    <div class="slider-content">
                      <h3>Perfect Balance</h3>
                      <p>ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified React Boostrap Components and Elements.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark" tabindex="-1">
                    <div class="slide-img-bg" style="background-image: url('../assets/images/originals/citynights.jpg');"></div>
                    <div class="slider-content">
                      <h3>Scalable, Modular, Consistent</h3>
                      <p>Easily exclude the components you don't require. Lightweight, consistent Bootstrap based styles across all elements and components</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning" tabindex="-1">
                    <div class="slide-img-bg" style="background-image: url('../assets/images/originals/citydark.jpg');"></div>
                    <div class="slider-content">
                      <h3>Complex, but lightweight</h3>
                      <p>We've included a lot of components that cover almost all use cases for any type of application.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
            <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
              <router-link :to="{ name: 'dashboard' }"><div class="app-logo"></div></router-link>
              <h4 class="mb-0">
                <span class="d-block">Welcome back,</span>
                <span>Please sign in to your account.</span>
              </h4>
              <h6 class="mt-3">No account? <a href="/register" class="text-primary">Sign up now</a></h6>
              <div class="divider row"></div>
              <div>
                <div class="form-row">
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="email" class="">Email</label>
                      <input id="email" type="email" class="form-control" placeholder="Email" v-model="data.email">
                      <p class="text-danger" v-if="errors.email">{{ errors.email[0] }}</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="position-relative form-group">
                      <label for="password" class="">Password</label>
                      <input id="password" type="password" class="form-control" placeholder="Password" v-model="data.password">
                      <p class="text-danger" v-if="errors.password">{{ errors.password[0] }}</p>
                    </div>
                  </div>
                </div>
                <div class="position-relative form-check">
                  <input class="form-check-input" type="checkbox" name="remember" id="remember" v-model="data.remember_me">
                  <label class="form-check-label" for="remember">Remember Me</label>
                </div>
                <div class="divider row"></div>
                <div class="d-flex align-items-center">
                  <div class="ml-auto">
                    <a href="#" class="btn btn-lg btn-link">I forgot my password</a>
                    <button type="submit" class="btn btn-primary btn-lg" @click.prevent="postLogin">Login to Dashboard</button>
                  </div>
                </div>
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