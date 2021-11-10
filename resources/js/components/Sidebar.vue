<template>
    <div class="app-sidebar sidebar-shadow">
        <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
                <div>
                    <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                        data-class="closed-sidebar">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <span>
                <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                    <span class="btn-icon-wrapper">
                        <i class="fa fa-ellipsis-v fa-w-6"></i>
                    </span>
                </button>
            </span>
        </div>
        <perfect-scrollbar class="scrollbar-sidebar">
            <div class="app-sidebar__inner">
                <ul class="vertical-nav-menu">
                    <li class="app-sidebar__heading">Menu</li>
                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-rocket"></i> Dashboards
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <router-link tag="a" :to="{name: 'dashboard'}">
                                    <i class="metismenu-icon">
                                    </i>Analytics
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'commerce'}">
                                    <i class="metismenu-icon">
                                    </i>Commerce
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'sales'}">
                                    <i class="metismenu-icon">
                                    </i>Sales
                                </router-link>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="metismenu-icon"></i> Minimal
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <router-link tag="a" :to="{name: 'minimal-1'}">
                                            <i class="metismenu-icon">
                                            </i>Variation 1
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" :to="{name: 'minimal-2'}">
                                            <i class="metismenu-icon">
                                            </i>Variation 2
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'crm'}">
                                    <i class="metismenu-icon"></i> CRM
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-plugin"></i> Applications
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <router-link tag="a" :to="{name: 'mailbox'}">
                                    <i class="metismenu-icon">
                                    </i>Mailbox
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'chat'}">
                                    <i class="metismenu-icon">
                                    </i>Chat
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'faq-section'}">
                                    <i class="metismenu-icon">
                                    </i>FAQ Section
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="app-sidebar__heading">UI Components</li>
                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-diamond"></i> Elements
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="metismenu-icon"></i> Buttons
                                    <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <router-link tag="a" :to="{name: 'buttons-standard'}">
                                            <i class="metismenu-icon">
                                            </i>Standard
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" :to="{name: 'buttons-pills'}">
                                            <i class="metismenu-icon">
                                            </i>Pills
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" :to="{name: 'buttons-square'}">
                                            <i class="metismenu-icon">
                                            </i>Square
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" :to="{name: 'buttons-shadow'}">
                                            <i class="metismenu-icon">
                                            </i>Shadow
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link tag="a" :to="{name: 'buttons-icons'}">
                                            <i class="metismenu-icon">
                                            </i>With Icons
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'dropdowns'}">
                                    <i class="metismenu-icon">
                                    </i>Dropdowns
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'icons'}">
                                    <i class="metismenu-icon">
                                    </i>Icons
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'badges-labels'}">
                                    <i class="metismenu-icon">
                                    </i>Badges
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'cards'}">
                                    <i class="metismenu-icon">
                                    </i>Cards
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'loaders'}">
                                    <i class="metismenu-icon">
                                    </i>Loading Indicators
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'list-group'}">
                                    <i class="metismenu-icon">
                                    </i>List Groups
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'navigation'}">
                                    <i class="metismenu-icon">
                                    </i>Navigation Menus
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'timelines'}">
                                    <i class="metismenu-icon">
                                    </i>Timeline
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'utilities'}">
                                    <i class="metismenu-icon">
                                    </i>Utilities
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-car"></i> Components
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <router-link tag="a" :to="{name: 'tabs'}">
                                    <i class="metismenu-icon">
                                    </i>Tabs
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'accordions'}">
                                    <i class="metismenu-icon">
                                    </i>Accordions
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'notifications'}">
                                    <i class="metismenu-icon">
                                    </i>Notifications
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'modals'}">
                                    <i class="metismenu-icon">
                                    </i>Modals
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'loading-blocks'}">
                                    <i class="metismenu-icon">
                                    </i>Loading Blockers
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'progress-bar'}">
                                    <i class="metismenu-icon">
                                    </i>Progress Bar
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'tooltips-popovers'}">
                                    <i class="metismenu-icon">
                                    </i>Tooltips &amp; Popovers
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'carousel'}">
                                    <i class="metismenu-icon">
                                    </i>Carousel
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'calendar'}">
                                    <i class="metismenu-icon">
                                    </i>Calendar
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'pagination'}">
                                    <i class="metismenu-icon">
                                    </i>Pagination
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'count-up'}">
                                    <i class="metismenu-icon">
                                    </i>Count Up
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'scrollable-elements'}">
                                    <i class="metismenu-icon">
                                    </i>Scrollable
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'tree-view'}">
                                    <i class="metismenu-icon">
                                    </i>Tree View
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'maps'}">
                                    <i class="metismenu-icon">
                                    </i>Maps
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'ratings'}">
                                    <i class="metismenu-icon">
                                    </i>Ratings
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'image-crop'}">
                                    <i class="metismenu-icon">
                                    </i>Image Crop
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'guided-tours'}">
                                    <i class="metismenu-icon">
                                    </i>Guided Tours
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-display2"></i> Tables
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <router-link tag="a" :to="{name: 'data-tables'}">
                                    <i class="metismenu-icon">
                                    </i>Data Tables
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'regular-tables'}">
                                    <i class="metismenu-icon">
                                    </i>Regular Tables
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'grid-tables'}">
                                    <i class="metismenu-icon">
                                    </i>Grid Tables
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="app-sidebar__heading">Dashboard Widgets</li>
                    <li>
                        <router-link tag="a" :to="{name: 'chart-boxes'}">
                            <i class="metismenu-icon pe-7s-graph">
                            </i>Chart Boxes 1
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'chart-boxes-2'}">
                            <i class="metismenu-icon pe-7s-way">
                            </i>Chart Boxes 2
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'chart-boxes-3'}">
                            <i class="metismenu-icon pe-7s-ball">
                            </i>Chart Boxes 3
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'profile-boxes'}">
                            <i class="metismenu-icon pe-7s-id">
                            </i>Profile Boxes
                        </router-link>
                    </li>
                    <li class="app-sidebar__heading">Forms</li>
                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-light"></i> Elements
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <router-link tag="a" :to="{name: 'controls'}">
                                    <i class="metismenu-icon">
                                    </i>Controls
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'layouts'}">
                                    <i class="metismenu-icon">
                                    </i>Layouts
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'validation'}">
                                    <i class="metismenu-icon">
                                    </i>Validation
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'wizard'}">
                                    <i class="metismenu-icon">
                                    </i>Wizard
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="metismenu-icon pe-7s-joy"></i> Widgets
                            <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                        </a>
                        <ul>
                            <li>
                                <router-link tag="a" :to="{name: 'form.datepicker'}">
                                    <i class="metismenu-icon">
                                    </i>Datepicker
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'form.range-slider'}">
                                    <i class="metismenu-icon">
                                    </i>Range Slider
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'form.input-selects'}">
                                    <i class="metismenu-icon">
                                    </i>Input Selects
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'form.toggle-switch'}">
                                    <i class="metismenu-icon">
                                    </i>Toggle Switch
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'form.wysiwyg-editor'}">
                                    <i class="metismenu-icon">
                                    </i>WYSIWYG Editor
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'form.input-mask'}">
                                    <i class="metismenu-icon">
                                    </i>Input Mask
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'form.clipboard'}">
                                    <i class="metismenu-icon">
                                    </i>Clipboard
                                </router-link>
                            </li>
                            <li>
                                <router-link tag="a" :to="{name: 'form.textarea-autosize'}">
                                    <i class="metismenu-icon">
                                    </i>Textarea Autosize
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="app-sidebar__heading">Charts</li>
                    <li>
                        <router-link tag="a" :to="{name: 'chartjs'}">
                            <i class="metismenu-icon pe-7s-graph2">
                            </i>ChartJS
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'apexcharts'}">
                            <i class="metismenu-icon pe-7s-graph">
                            </i>Apex Charts
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" :to="{name: 'sparklines'}">
                            <i class="metismenu-icon pe-7s-graph1">
                            </i>Chart Sparklines
                        </router-link>
                    </li>
                </ul>
            </div>
        </perfect-scrollbar>
    </div>
</template>

<script>
export default {
    
}
</script>