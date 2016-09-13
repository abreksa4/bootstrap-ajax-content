(function ($) {
    $.fn.ajaxifyContent = function () {
        $(this).each(function (index) {
            if ($(this).is('.panel')) {
                if ($(this).find('.panel-collapse.collapse.in').length > 0 || $(this).find('.collapse').length == 0) {
                    $(this).find(".panel-body").load($(this).attr('data-url'));
                    $(this).attr("ajax-loaded", "true");
                }
                if ($(this).find('.collapse:not(in)').length > 0) {
                    $(this).on('show.bs.collapse', function (e) {
                        if ($(this).attr("ajax-loaded") == "true") {
                            return;
                        }
                        e.preventDefault();
                        $(this).find(".panel-body").load($(this).attr('data-url'));
                        $(this).attr("ajax-loaded", "true");
                        $(this).find('.panel-collapse.collapse').collapse("show");
                    });
                }
            } else if ($(this).is('.nav.nav-pills, .nav.nav-tabs')) {
                if ($(this).find('li.active a').length > 0) {
                    $(this).find('li.active a').each(function (index) {
                        id = $(this).attr('href');
                        $(id).load($(this).parent('li').attr('data-url'));
                        $(this).parent('li').attr("ajax-loaded", "true");
                    });
                }
                $(this).find('li a').each(function (index) {
                    $(this).on("show.bs.tab", function (e) {
                        if ($(this).parent('li').attr("ajax-loaded") == "true") {
                            return;
                        }
                        e.preventDefault();
                        id = $(this).attr('href');
                        $(id).load($(this).parent('li').attr('data-url'));
                        $(this).parent('li').attr("ajax-loaded", "true");
                        $(this).tab("show");
                    })
                })
            } else if ($(this).is('.modal')) {
                $(this).on("show.bs.modal", function (e) {
                    if ($(this).attr("ajax-loaded") == "true") {
                        return;
                    }
                    e.preventDefault();
                    $(this).find('.modal-dialog .modal-content').load($(this).attr('data-url'));
                    $(this).attr("ajax-loaded", "true");
                    $(this).modal("show");
                })
            }
        });
    }
})(jQuery);
