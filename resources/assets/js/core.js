$( document ).ready(function() {

    // Sidebar Menu

    setTimeout(function () {
        $(".vertical-nav-menu").metisMenu();
    }, 100);

    // Search wrapper trigger

    $('.search-icon').click(function () {
        $(this).parent().parent().addClass('active');
    });

    $('.search-wrapper .close').click(function () {
        $(this).parent().removeClass('active');
    });

    // BS4 Popover

    $('[data-toggle="popover-custom-content"]').each(function (i, obj) {

        $(this).popover({
            html: true,
            placement: 'auto',
            template: '<div class="popover popover-custom" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            content: function () {
                var id = $(this).attr('popover-id');
                return $('#popover-content-' + id).html();
            }
        });

    });

    // Stop Bootstrap 4 Dropdown for closing on click inside

    $('.dropdown-menu').on('click', function (event) {
        var events = $._data(document, 'events') || {};
        events = events.click || [];
        for (var i = 0; i < events.length; i++) {
            if (events[i].selector) {

                if ($(event.target).is(events[i].selector)) {
                    events[i].handler.call(event.target, event);
                }

                $(event.target).parents(events[i].selector).each(function () {
                    events[i].handler.call(this, event);
                });
            }
        }
        event.stopPropagation(); //Always stop propagation
    });


    $('[data-toggle="popover-custom-bg"]').each(function (i, obj) {

        var popClass = $(this).attr('data-bg-class');

        $(this).popover({
            trigger: 'focus',
            placement: 'top',
            template: '<div class="popover popover-bg ' + popClass + '" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });

    });

    $(function () {
        $('[data-toggle="popover"]').popover();
    });

    $('[data-toggle="popover-custom"]').each(function (i, obj) {

        $(this).popover({
            html: true,
            container: $(this).parent().find('.rm-max-width'),
            content: function () {
                return $(this).next('.rm-max-width').find('.popover-custom-content').html();
            }
        });
    });

    $('body').on('click', function (e) {
        $('[rel="popover-focus"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    $('.header-megamenu.nav > li > .nav-link').on('click', function (e) {
        $('[data-toggle="popover-custom"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    // BS4 Tooltips

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(function () {
        $('[data-toggle="tooltip-light"]').tooltip({
            template: '<div class="tooltip tooltip-light"><div class="tooltip-inner"></div></div>'
        });
    });

    // Drawer

    $('.open-right-drawer').click(function () {
        $(this).addClass('is-active');
        $('.app-drawer-wrapper').addClass('drawer-open');
        $('.app-drawer-overlay').removeClass('d-none');
    });

    $('.drawer-nav-btn').click(function () {
        $('.app-drawer-wrapper').removeClass('drawer-open');
        $('.app-drawer-overlay').addClass('d-none');
        $('.open-right-drawer').removeClass('is-active');
    });

    $('.app-drawer-overlay').click(function () {
        $(this).addClass('d-none');
        $('.app-drawer-wrapper').removeClass('drawer-open');
        $('.open-right-drawer').removeClass('is-active');
    });

    $('.mobile-toggle-nav').click(function () {
        $(this).toggleClass('is-active');
        $('.app-container').toggleClass('sidebar-mobile-open');
    });

    $('.mobile-toggle-header-nav').click(function () {
        $(this).toggleClass('active');
        $('.app-header__content').toggleClass('header-mobile-open');
    });

    $('.mobile-app-menu-btn').click(function () {
        $('.hamburger', this).toggleClass('is-active');
        $('.app-inner-layout').toggleClass('open-mobile-menu');
    });

    // Responsive

    $(window).on('resize', function(){
        var win = $(this);
        if (win.width() < 1250) {
            $('.app-container').addClass('closed-sidebar-mobile closed-sidebar');
        }
        else
        {
            $('.app-container').removeClass('closed-sidebar-mobile closed-sidebar');
        }
    });
    $('.btn-open-options').click(function () {
        $('.ui-theme-settings').toggleClass('settings-open');
    });

    $('.close-sidebar-btn').click(function () {

        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-container';
        $(containerElement).toggleClass(classToSwitch);

        var closeBtn = $(this);

        if (closeBtn.hasClass('is-active')) {
            closeBtn.removeClass('is-active');
        } else {
            closeBtn.addClass('is-active');
        }
    });

    $('.switch-container-class').on('click', function () {

        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-container';
        $(containerElement).toggleClass(classToSwitch);

        $(this).parent().find('.switch-container-class').removeClass('active');
        $(this).addClass('active');

    });

    $('.switch-theme-class').on('click', function () {

        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-container';

        if (classToSwitch == 'app-theme-white') {
            $(containerElement).removeClass('app-theme-gray');
            $(containerElement).addClass(classToSwitch);
        }

        if (classToSwitch == 'app-theme-gray') {
            $(containerElement).removeClass('app-theme-white');
            $(containerElement).addClass(classToSwitch);
        }

        if (classToSwitch == 'body-tabs-line') {
            $(containerElement).removeClass('body-tabs-shadow');
            $(containerElement).addClass(classToSwitch);
        }

        if (classToSwitch == 'body-tabs-shadow') {
            $(containerElement).removeClass('body-tabs-line');
            $(containerElement).addClass(classToSwitch);
        }

        $(this).parent().find('.switch-theme-class').removeClass('active');
        $(this).addClass('active');

    });

    $('.switch-header-cs-class').on('click', function () {
        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-header';

        $('.switch-header-cs-class').removeClass('active');
        $(this).addClass('active');

        $(containerElement).attr('class', 'app-header');
        $(containerElement).addClass('header-shadow ' + classToSwitch);

    });

    $('.switch-sidebar-cs-class').on('click', function () {
        var classToSwitch = $(this).attr('data-class');
        var containerElement = '.app-sidebar';

        $('.switch-sidebar-cs-class').removeClass('active');
        $(this).addClass('active');

        $(containerElement).attr('class', 'app-sidebar');
        $(containerElement).addClass('sidebar-shadow ' + classToSwitch);

    });
});

