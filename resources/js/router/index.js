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
      component: () => import('../layouts/Auth.vue'),
      children: [
        {
          path: "",
          name: 'login',
          meta: {
            title: 'Login',
          },
          component: () => import('../pages/Login.vue')
        }
      ]
      //beforeEnter: guards.authenticate
    },
    // Dashboard

    {
      path: '/dashboard',
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          name: 'dashboard',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
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
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
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
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/mailbox',
      name: 'mailbox',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/chat',
      name: 'chat',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/faq-section',
      name: 'faq-section',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    
    // Users

    {
      path: '/commerce',
      name: 'commerce',
      meta: {
        title: 'commerce',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },

    // Clients

    {
      path: '/sales',
      name: 'sales',
      meta: {
        title: 'Clients',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },

    // User Settings

    {
      path: '/minimal-1',
      name: 'minimal_1',
      meta: {
        title: 'User Settings',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },

    // Pages

    {
      path: '/minimal-2',
      name: 'minimal_1',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/crm',
      name: 'crm',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    

    // Elements

    {
      path: '/elements/buttons-standard',
      name: 'buttons-standard',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/buttons-pills',
      name: 'buttons-pills',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/buttons-square',
      name: 'buttons-square',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/buttons-shadow',
      name: 'buttons-shadow',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/buttons-icons',
      name: 'buttons-icons',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/dropdowns',
      name: 'dropdowns',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/icons',
      name: 'icons',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/badges-labels',
      name: 'badges',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/cards',
      name: 'cards',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/loaders',
      name: 'loaders',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/navigation',
      name: 'navigation',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/list-group',
      name: 'list-group',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/timelines',
      name: 'timeline',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/elements/utilities',
      name: 'utilities',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },

    // Components

    {
      path: '/components/tabs',
      name: 'tabs',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/accordions',
      name: 'accordions',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/notifications',
      name: 'notifications',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/loading-blocks',
      name: 'loading-blocks',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/modals',
      name: 'modals',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/calendar',
      name: 'calendar',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/count-up',
      name: 'count-up',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/scrollable-elements',
      name: 'scrollable-elements',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/tree-view',
      name: 'tree-view',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/progress-bar',
      name: 'progress-bar',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/ratings',
      name: 'ratings',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/image-crop',
      name: 'image-crop',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/guided-tours',
      name: 'guided-tours',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/tooltips-popovers',
      name: 'tooltips-popovers',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/carousel',
      name: 'carousel',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/pagination',
      name: 'pagination',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/components/maps',
      name: 'maps',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },

    // Tables

    {
      path: '/tables/data-tables',
      name: 'data-tables',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/tables/regular',
      name: 'regular-tables',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/tables/grid',
      name: 'grid-tables',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },

    // Dashboard Widgets

    {
      path: '/widgets/chart-boxes',
      name: 'chart-boxes',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/widgets/chart-boxes-2',
      name: 'chart-boxes-2',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/widgets/chart-boxes-3',
      name: 'chart-boxes-3',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/widgets/profile-boxes',
      name: 'profile-boxes',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    // Forms

    {
      path: '/forms/controls',
      name: 'controls',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/forms/layouts',
      name: 'layouts',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/forms/validation',
      name: 'validation',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/forms/wizard',
      name: 'wizard',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    // Form Widgets

    {
      path: '/form/widgets/datepicker',
      name: 'form.datepicker',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/form/widgets/range-slider',
      name: 'form.range-slider',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/form/widgets/input-selects',
      name: 'form.input-selects',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/form/widgets/toggle-switch',
      name: 'form.toggle-switch',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/form/widgets/wysiwyg-editor',
      name: 'form.wysiwyg-editor',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/form/widgets/input-mask',
      name: 'form.input-mask',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/form/widgets/clipboard',
      name: 'form.clipboard',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/form/widgets/textarea-autosize',
      name: 'form.textarea-autosize',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    // Charts

    {
      path: '/charts/chartjs',
      name: 'chartjs',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/charts/apexcharts',
      name: 'apexcharts',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
    },
    {
      path: '/charts/sparklines',
      name: 'sparklines',
      meta: {
        title: 'Dashboard',
        requiresAuth: true
      },
      component: () => import('../layouts/Admin.vue'),
      children: [
        {
          path: "",
          component: () => import('../components/ExampleComponent.vue')
        }
      ]
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
  console.log(to);
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