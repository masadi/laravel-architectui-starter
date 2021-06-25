import Vue from 'vue'
import Router from 'vue-router'
//import guards from '@/guards'

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: 'smooth'});
  },
  //mode: 'history',
  base: '/app/',
  mode: 'history',
  routes: [

    // Login

    {
      path: '/',
      name: 'login',
      meta: {
        title: 'Login',
        layout: 'userpages'
      },
      component: () => import('../components/ExampleComponent.vue'),
      //beforeEnter: guards.authenticate
    },

    // Checkpoint

    {
      path: '/checkpoint',
      name: 'checkpoint',
      meta: {
        title: 'Checkpoint',
        layout: 'userpages'
      },
      component: () => import('../components/ExampleComponent.vue'),
      //beforeEnter: guards.verifyOtpAtLogin
    },

    {
      path: '/checkpoint/google2fa/activate',
      name: 'google2fa.activate',
      meta: {
        title: 'Activate Google Two Factor Authentication',
        layout: 'userpages'
      },
      component: () => import('../components/ExampleComponent.vue'),
      //beforeEnter: guards.activateGoogle2fa
    },


    // Password Reset

    {
      path: '/password/reset',
      name: 'password.request',
      meta: {
        title: 'Reset Password',
        layout: 'userpages'
      },
      component: () => import('../components/ExampleComponent.vue'),
      //beforeEnter: guards.authenticate
    },

    {
      path: '/password/reset/:token',
      name: 'password.reset',
      meta: {
        title: 'Reset Password',
        layout: 'userpages'
      },
      component: () => import('../components/ExampleComponent.vue'),
      props: true,
      //beforeEnter: guards.authenticate
    },

    // Dashboard

    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        title: 'Dashboard',
        layout: 'default'
      },
      component: () => import('../components/Dashboard.vue'),
      //beforeEnter: guards.accessApp
    },

    // Users

    {
      path: '/commerce',
      name: 'commerce',
      meta: {
        title: 'commerce',
        layout: 'default'
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
        layout: 'default'
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
        layout: 'default'
      },
      component: () => import('../components/ExampleComponent.vue'),
      //beforeEnter: guards.accessApp
    },

    // Pages

    {
      path: '/minimal-2',
      name: 'minimal_1',
      meta: {layout: 'userpages'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/pages/register-boxed',
      name: 'register-boxed',
      meta: {layout: 'userpages'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/pages/forgot-password-boxed',
      name: 'forgot-password-boxed',
      meta: {layout: 'userpages'},
      component: () => import('../components/ExampleComponent.vue'),
    },

    // Elements

    {
      path: '/elements/buttons-standard',
      name: 'buttons-standard',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/dropdowns',
      name: 'dropdowns',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/icons',
      name: 'icons',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/badges-labels',
      name: 'badges',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/cards',
      name: 'cards',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/list-group',
      name: 'list-group',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/timelines',
      name: 'timeline',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/elements/utilities',
      name: 'utilities',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },

    // Components

    {
      path: '/components/tabs',
      name: 'tabs',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/accordions',
      name: 'accordions',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/modals',
      name: 'modals',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/progress-bar',
      name: 'progress-bar',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/tooltips-popovers',
      name: 'tooltips-popovers',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/carousel',
      name: 'carousel',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/pagination',
      name: 'pagination',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/components/maps',
      name: 'maps',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },

    // Tables

    {
      path: '/tables/regular-tables',
      name: 'regular-tables',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },

    // Dashboard Widgets

    {
      path: '/widgets/chart-boxes-3',
      name: 'chart-boxes-3',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },

    // Forms

    {
      path: '/forms/controls',
      name: 'controls',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    {
      path: '/forms/layouts',
      name: 'layouts',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
    // Charts

    {
      path: '/charts/chartjs',
      name: 'chartjs',
      meta: {layout: 'default'},
      component: () => import('../components/ExampleComponent.vue'),
    },
  ]
})
