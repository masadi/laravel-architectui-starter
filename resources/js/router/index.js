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
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../layouts/Frontend.vue'),
      children: [
        {
          path: "",
          name: 'front',
          meta: {
            title: 'Halaman Utama',
          },
          component: () => import('../pages/Front.vue')
        }
      ]
      //beforeEnter: guards.authenticate
    },
    {
      path: '',
      component: () => import('../layouts/Auth.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          meta: {
            title: 'Masuk Aplikasi',
          },
          component: () => import('../pages/Login.vue')
        }
      ]
      //beforeEnter: guards.authenticate
    },
    {
      path: '/admin',
      component: () => import('../layouts/Admin.vue'),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "dashboard",
          name: 'dashboard',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/Dashboard.vue')
        },
        {
          path: "mailbox",
          name: 'mailbox',
          meta: {
            title: 'mailbox',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'commerce',
          name: 'commerce',
          meta: {
            title: 'commerce',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'sales',
          name: 'sales',
          meta: {
            title: 'Sales',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'minimal-1',
          name: 'minimal-1',
          meta: {
            title: 'Minimal 1',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'minimal-2',
          name: 'minimal-2',
          meta: {
            title: 'Minimal 2',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'crm',
          name: 'crm',
          meta: {
            title: 'CRM',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'chat',
          name: 'chat',
          meta: {
            title: 'Chat',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'faq-section',
          name: 'faq-section',
          meta: {
            title: 'FAQ',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        // Elements
        {
          path: 'elements/buttons-standard',
          name: 'buttons-standard',
          meta: {
            title: 'buttons-standard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/buttons-pills',
          name: 'buttons-pills',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/buttons-square',
          name: 'buttons-square',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/buttons-shadow',
          name: 'buttons-shadow',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/buttons-icons',
          name: 'buttons-icons',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/dropdowns',
          name: 'dropdowns',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/icons',
          name: 'icons',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/badges-labels',
          name: 'badges-labels',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/cards',
          name: 'cards',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/loaders',
          name: 'loaders',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/navigation',
          name: 'navigation',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/list-group',
          name: 'list-group',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/timelines',
          name: 'timelines',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'elements/utilities',
          name: 'utilities',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/tabs',
          name: 'tabs',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/accordions',
          name: 'accordions',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/notifications',
          name: 'notifications',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/loading-blocks',
          name: 'loading-blocks',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/modals',
          name: 'modals',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/calendar',
          name: 'calendar',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/count-up',
          name: 'count-up',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/scrollable-elements',
          name: 'scrollable-elements',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/tree-view',
          name: 'tree-view',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/progress-bar',
          name: 'progress-bar',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/ratings',
          name: 'ratings',
          meta: {
            title: 'Dashboard',
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/image-crop',
          name: 'image-crop',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/guided-tours',
          name: 'guided-tours',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/tooltips-popovers',
          name: 'tooltips-popovers',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/carousel',
          name: 'carousel',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/pagination',
          name: 'pagination',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'components/maps',
          name: 'maps',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
    
        // Tables
    
        {
          path: 'tables/data-tables',
          name: 'data-tables',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'tables/regular',
          name: 'regular-tables',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'tables/grid',
          name: 'grid-tables',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
    
        // Dashboard Widgets
    
        {
          path: 'widgets/chart-boxes',
          name: 'chart-boxes',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'widgets/chart-boxes-2',
          name: 'chart-boxes-2',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'widgets/chart-boxes-3',
          name: 'chart-boxes-3',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'widgets/profile-boxes',
          name: 'profile-boxes',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        // Forms
    
        {
          path: 'forms/controls',
          name: 'controls',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'forms/layouts',
          name: 'layouts',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'forms/validation',
          name: 'validation',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'forms/wizard',
          name: 'wizard',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        // Form Widgets
    
        {
          path: 'form/widgets/datepicker',
          name: 'form.datepicker',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'form/widgets/range-slider',
          name: 'form.range-slider',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'form/widgets/input-selects',
          name: 'form.input-selects',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'form/widgets/toggle-switch',
          name: 'form.toggle-switch',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'form/widgets/wysiwyg-editor',
          name: 'form.wysiwyg-editor',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'form/widgets/input-mask',
          name: 'form.input-mask',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'form/widgets/clipboard',
          name: 'form.clipboard',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'form/widgets/textarea-autosize',
          name: 'form.textarea-autosize',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        // Charts
    
        {
          path: 'charts/chartjs',
          name: 'chartjs',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'charts/apexcharts',
          name: 'apexcharts',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
        {
          path: 'charts/sparklines',
          name: 'sparklines',
          meta: {
            title: 'Dashboard',
            requiresAuth: true
          },
          component: () => import('../components/ExampleComponent.vue')
        },
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
  let title = 'e-Kurikulum'
  //test
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