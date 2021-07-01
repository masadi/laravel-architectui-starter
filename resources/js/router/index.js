import Vue from 'vue'
import Router from 'vue-router'
//import guards from '@/guards'
import store from '../store.js'
Vue.use(Router);

const router = new Router({
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: 'smooth'});
  },
  //mode: 'history',
  base: '/admin/',
  mode: 'history',
  routes: [

    // Login

    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login',
      },
      component: () => import('../layouts/Auth.vue'),
      children: [
        {
          path: "",
          component: () => import('../pages/Login.vue')
        }
      ]
      //beforeEnter: guards.authenticate
    },
    // Dashboard

    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/Dashboard.vue')
        }
      ]
      //beforeEnter: guards.accessApp
    },
    // Checkpoint

    {
      path: '/login-boxed',
      name: 'login_boxed',
      meta: {
        title: 'Checkpoint',
      },
      component: () => import('../layouts/Auth.vue'),
      children: [
        {
          path: "",
          component: () => import('../pages/LoginBoxed.vue')
        }
      ]
    },

    {
      path: '/register',
      name: 'register',
      meta: {
        title: 'Activate Google Two Factor Authentication',
        requiresAuth: true
      },
      component: () => import('../components/ExampleComponent.vue'),
      //beforeEnter: guards.activateGoogle2fa
    },


    // Password Reset

    {
      path: '/register-boxed',
      name: 'register_boxed',
      meta: {
        title: 'Reset Password',
        requiresAuth: true
      },
      component: () => import('../components/ExampleComponent.vue'),
      //beforeEnter: guards.authenticate
    },

    {
      path: '/forgot-password',
      name: 'forgot_password',
      meta: {
        title: 'Reset Password',
        requiresAuth: true
      },
      component: () => import('../components/ExampleComponent.vue'),
      props: true,
      //beforeEnter: guards.authenticate
    },
    {
      path: '/forgot-password-boxed',
      name: 'forgot-password-boxed',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/chat',
      name: 'chat',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/faq-section',
      name: 'faq-section',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/mailbox',
      name: 'mailbox',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },

    // Users

    {
      path: '/commerce',
      name: 'commerce',
      meta: {
        title: 'commerce',
        requiresAuth: true
      },
      component: () => import('../components/ExampleComponent.vue'),
      //beforeEnter: guards.accessApp
    },

    // Clients

    {
      path: '/sales',
      name: 'sales',
      meta: {
        title: 'Clients',
        requiresAuth: true
      },
      component: () => import('../components/ExampleComponent.vue'),
      //beforeEnter: guards.accessApp
    },

    // User Settings

    {
      path: '/minimal-1',
      name: 'minimal_1',
      meta: {
        title: 'User Settings',
        requiresAuth: true
      },
      component: () => import('../components/ExampleComponent.vue'),
      //beforeEnter: guards.accessApp
    },

    // Pages

    {
      path: '/minimal-2',
      name: 'minimal_1',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/crm',
      name: 'crm',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    

    // Elements

    {
      path: '/elements/buttons-standard',
      name: 'buttons-standard',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/buttons-pills',
      name: 'buttons-pills',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/buttons-square',
      name: 'buttons-square',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/buttons-shadow',
      name: 'buttons-shadow',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/buttons-icons',
      name: 'buttons-icons',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/dropdowns',
      name: 'dropdowns',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/icons',
      name: 'icons',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/badges-labels',
      name: 'badges',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/cards',
      name: 'cards',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/loaders',
      name: 'loaders',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/navigation',
      name: 'navigation',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/list-group',
      name: 'list-group',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/timelines',
      name: 'timeline',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/utilities',
      name: 'utilities',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },

    // Components

    {
      path: '/components/tabs',
      name: 'tabs',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/accordions',
      name: 'accordions',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/notifications',
      name: 'notifications',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/loading-blocks',
      name: 'loading-blocks',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/modals',
      name: 'modals',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/calendar',
      name: 'calendar',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/count-up',
      name: 'count-up',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/scrollable-elements',
      name: 'scrollable-elements',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/tree-view',
      name: 'tree-view',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/progress-bar',
      name: 'progress-bar',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/ratings',
      name: 'ratings',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/image-crop',
      name: 'image-crop',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/guided-tours',
      name: 'guided-tours',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/tooltips-popovers',
      name: 'tooltips-popovers',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/carousel',
      name: 'carousel',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/pagination',
      name: 'pagination',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/maps',
      name: 'maps',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },

    // Tables

    {
      path: '/tables/data-tables',
      name: 'data-tables',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/tables/regular',
      name: 'regular-tables',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/tables/grid',
      name: 'grid-tables',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },

    // Dashboard Widgets

    {
      path: '/widgets/chart-boxes',
      name: 'chart-boxes',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/widgets/chart-boxes-2',
      name: 'chart-boxes-2',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/widgets/chart-boxes-3',
      name: 'chart-boxes-3',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/widgets/profile-boxes',
      name: 'profile-boxes',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    // Forms

    {
      path: '/forms/controls',
      name: 'controls',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/forms/layouts',
      name: 'layouts',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/forms/validation',
      name: 'validation',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/forms/wizard',
      name: 'wizard',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    // Form Widgets

    {
      path: '/form/widgets/datepicker',
      name: 'form.datepicker',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/form/widgets/range-slider',
      name: 'form.range-slider',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/form/widgets/input-selects',
      name: 'form.input-selects',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/form/widgets/toggle-switch',
      name: 'form.toggle-switch',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/form/widgets/wysiwyg-editor',
      name: 'form.wysiwyg-editor',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/form/widgets/input-mask',
      name: 'form.input-mask',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/form/widgets/clipboard',
      name: 'form.clipboard',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/form/widgets/textarea-autosize',
      name: 'form.textarea-autosize',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    // Charts

    {
      path: '/charts/chartjs',
      name: 'chartjs',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/charts/apexcharts',
      name: 'apexcharts',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/charts/sparklines',
      name: 'sparklines',
      meta: {requiresAuth: true},
      component: () => import('../components/ExampleComponent.vue'),
    },
    { 
      path: '*', 
      component: () => import('../components/NotFound.vue'),
    },
  ]
})
//Navigation Guards
router.beforeEach((to, from, next) => {
  let title = 'Laravel'

  if (to.meta.title)
    title += ' - ' + to.meta.title

  document.title = title
  if (to.matched.some(record => record.meta.requiresAuth)) {
      let auth = store.getters.isAuth
      if (!auth) {
          next({ name: 'login' })
      } else {
          next()
      }
  } else {
      next()
  }
})

export default router