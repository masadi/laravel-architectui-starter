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
                            <router-link tag="a" to="/dashboard">
                                <i class="metismenu-icon">
                                </i>Analytics
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/commerce">
                                <i class="metismenu-icon">
                                </i>Commerce
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/sales">
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
                                    <router-link tag="a" to="/minimal-1">
                                        <i class="metismenu-icon">
                                        </i>Variation 1
                                    </router-link>
                                </li>
                                <li>
                                    <router-link tag="a" to="/minimal-2">
                                        <i class="metismenu-icon">
                                        </i>Variation 2
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link tag="a" to="/crm">
                                <i class="metismenu-icon"></i> CRM
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class="metismenu-icon pe-7s-browser"></i> Pages
                        <i class="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                    </a>
                    <ul>
                        <li>
                            <router-link tag="a" to="/login">
                                <i class="metismenu-icon"></i> Login
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/login-boxed">
                                <i class="metismenu-icon">
                                </i>Login Boxed
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/register">
                                <i class="metismenu-icon">
                                </i>Register
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/register-boxed">
                                <i class="metismenu-icon">
                                </i>Register Boxed
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/forgot-password">
                                <i class="metismenu-icon">
                                </i>Forgot Password
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/forgot-password-boxed">
                                <i class="metismenu-icon">
                                </i>Forgot Password Boxed
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
                            <router-link tag="a" to="/mailbox">
                                <i class="metismenu-icon">
                                </i>Mailbox
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/chat">
                                <i class="metismenu-icon">
                                </i>Chat
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/faq-section">
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
                                    <router-link tag="a" to="/elements/buttons-standard">
                                        <i class="metismenu-icon">
                                        </i>Standard
                                    </router-link>
                                </li>
                                <li>
                                    <router-link tag="a" to="/elements/buttons-pills">
                                        <i class="metismenu-icon">
                                        </i>Pills
                                    </router-link>
                                </li>
                                <li>
                                    <router-link tag="a" to="/elements/buttons-square">
                                        <i class="metismenu-icon">
                                        </i>Square
                                    </router-link>
                                </li>
                                <li>
                                    <router-link tag="a" to="/elements/buttons-shadow">
                                        <i class="metismenu-icon">
                                        </i>Shadow
                                    </router-link>
                                </li>
                                <li>
                                    <router-link tag="a" to="/elements/buttons-icons">
                                        <i class="metismenu-icon">
                                        </i>With Icons
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link tag="a" to="/elements/dropdowns">
                                <i class="metismenu-icon">
                                </i>Dropdowns
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/elements/icons">
                                <i class="metismenu-icon">
                                </i>Icons
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/elements/badges-labels">
                                <i class="metismenu-icon">
                                </i>Badges
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/elements/cards">
                                <i class="metismenu-icon">
                                </i>Cards
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/elements/loaders">
                                <i class="metismenu-icon">
                                </i>Loading Indicators
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/elements/list-group">
                                <i class="metismenu-icon">
                                </i>List Groups
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/elements/navigation">
                                <i class="metismenu-icon">
                                </i>Navigation Menus
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/elements/timelines">
                                <i class="metismenu-icon">
                                </i>Timeline
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/elements/utilities">
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
                            <router-link tag="a" to="/components/tabs">
                                <i class="metismenu-icon">
                                </i>Tabs
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/accordions">
                                <i class="metismenu-icon">
                                </i>Accordions
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/notifications">
                                <i class="metismenu-icon">
                                </i>Notifications
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/modals">
                                <i class="metismenu-icon">
                                </i>Modals
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/loading-blocks">
                                <i class="metismenu-icon">
                                </i>Loading Blockers
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/progress-bar">
                                <i class="metismenu-icon">
                                </i>Progress Bar
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/tooltips-popovers">
                                <i class="metismenu-icon">
                                </i>Tooltips &amp; Popovers
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/carousel">
                                <i class="metismenu-icon">
                                </i>Carousel
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/calendar">
                                <i class="metismenu-icon">
                                </i>Calendar
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/pagination">
                                <i class="metismenu-icon">
                                </i>Pagination
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/count-up">
                                <i class="metismenu-icon">
                                </i>Count Up
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/scrollable-elements">
                                <i class="metismenu-icon">
                                </i>Scrollable
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/tree-view">
                                <i class="metismenu-icon">
                                </i>Tree View
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/maps">
                                <i class="metismenu-icon">
                                </i>Maps
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/ratings">
                                <i class="metismenu-icon">
                                </i>Ratings
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/image-crop">
                                <i class="metismenu-icon">
                                </i>Image Crop
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/components/guided-tours">
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
                            <router-link tag="a" to="/tables/data-tables">
                                <i class="metismenu-icon">
                                </i>Data Tables
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/tables/regular">
                                <i class="metismenu-icon">
                                </i>Regular Tables
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/tables/grid">
                                <i class="metismenu-icon">
                                </i>Grid Tables
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="app-sidebar__heading">Dashboard Widgets</li>
                <li>
                    <router-link tag="a" to="/widgets/chart-boxes">
                        <i class="metismenu-icon pe-7s-graph">
                        </i>Chart Boxes 1
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/widgets/chart-boxes-2">
                        <i class="metismenu-icon pe-7s-way">
                        </i>Chart Boxes 2
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/widgets/chart-boxes-3">
                        <i class="metismenu-icon pe-7s-ball">
                        </i>Chart Boxes 3
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/widgets/profile-boxes">
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
                            <router-link tag="a" to="/forms/controls">
                                <i class="metismenu-icon">
                                </i>Controls
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/forms/layouts">
                                <i class="metismenu-icon">
                                </i>Layouts
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/forms/validation">
                                <i class="metismenu-icon">
                                </i>Validation
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/forms/wizard">
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
                            <router-link tag="a" to="/widgets/datepicker">
                                <i class="metismenu-icon">
                                </i>Datepicker
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/widgets/range-slider">
                                <i class="metismenu-icon">
                                </i>Range Slider
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/widgets/input-selects">
                                <i class="metismenu-icon">
                                </i>Input Selects
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/widgets/toggle-switch">
                                <i class="metismenu-icon">
                                </i>Toggle Switch
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/widgets/wysiwyg-editor">
                                <i class="metismenu-icon">
                                </i>WYSIWYG Editor
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/widgets/input-mask">
                                <i class="metismenu-icon">
                                </i>Input Mask
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/widgets/clipboard">
                                <i class="metismenu-icon">
                                </i>Clipboard
                            </router-link>
                        </li>
                        <li>
                            <router-link tag="a" to="/widgets/textarea-autosize">
                                <i class="metismenu-icon">
                                </i>Textarea Autosize
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="app-sidebar__heading">Charts</li>
                <li>
                    <router-link tag="a" to="/charts/chartjs">
                        <i class="metismenu-icon pe-7s-graph2">
                        </i>ChartJS
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/charts/apexcharts">
                        <i class="metismenu-icon pe-7s-graph">
                        </i>Apex Charts
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/charts/sparklines">
                        <i class="metismenu-icon pe-7s-graph1">
                        </i>Chart Sparklines
                    </router-link>
                </li>
            </ul>
        </div>
    </perfect-scrollbar>
</div>