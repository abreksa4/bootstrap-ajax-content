//hook for collapse panels
$(".panel.ajax-content").on('show.bs.collapse', function (e) {
    //if we've already loaded data, eject
    if ($(this).attr("ajax-loaded") == "true") {
        return;
    }
    e.preventDefault();
    $(this).find(".panel-body").load($(this).attr('data-url'));
    $(this).attr("ajax-loaded", "true");
    $(this).find('.panel-body').collapse("show");
});

//hook for tabs and pills
$(".nav.nav-pills.ajax-content, .nav.nav-tabs.ajax-content").find("li.ajax-content").find("a").on("show.bs.tab", function (e) {
    //if we've already loaded data, eject
    if ($(this).parent('li').attr("ajax-loaded") == "true") {
        return;
    }
    e.preventDefault();
    id = $(this).attr('href');
    $(id).load($(this).parent('li').attr('data-url'));
    $(this).parent('li').attr("ajax-loaded", "true");
    $(this).tab("show");
});

$(".modal.ajax-content").on("show.bs.modal", function (e) {
    //if we've already loaded data, eject
    if($(this).attr("ajax-loaded") == "true"){
        return;
    }
    e.preventDefault();
    $(this).find('.modal-dialog .modal-content').load($(this).attr('data-url'));
    $(this).attr("ajax-loaded", "true");
    $(this).modal("show");
});

//set default tab/pill content
$(".nav.nav-pills.ajax-content, .nav.nav-tabs.ajax-content").find("li.active a").each(function (index) {
    id = $(this).attr('href');
    $(id).load($(this).parent('li').attr('data-url'));
    $(this).parent('li').attr("ajax-loaded", "true");
});

//set panel initial content
$(".panel.ajax-content").each(function (index) {
    //if we're a collapsed panel, don't load content
    if ($(this).find(".panel-body").is('.collapse:not(in)')) {
        return;
    }
    $(this).find(".panel-body").load($(this).attr('data-url'));
    $(this).attr("ajax-loaded", "true");
});