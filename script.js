
$(function () {
    var active = true;
    $(".collapse.in").each(function () {
        $(this).siblings(".panel-heading").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
    });
    $('#buttonShowAll').click(function () {
        if (active) {
            active = false;
            $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus").css({ "color": "red" });
            $('.panel-collapse').collapse('show');
            $('.panel-title').attr('data-toggle', 'collapse');
            $("#buttonShowAll").css({ "background": "linear-gradient(to right, #FF0000 0%,#FF0000 3%,#ffffff 0.5%,#ffffff 0.5%)" });
            $("#buttonShowAll_Text").html("TÜM DETAYLARI GİZLE");
            $('div.panel-default').css({
                "border-radius": "10px",
                "background": "linear-gradient(to right, #FF0000 0%,#FF0000 3%,#ffffff 0.5%,#ffffff 0.5%)",
                "padding": "0px",
                "margin": "3px"
            });
        } else {
            active = true;
            $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus").css({ "color": "#07c0f3" });
            $('.panel-collapse').collapse('hide');
            $('.panel-title').attr('data-toggle', 'collapse');
            $("#buttonShowAll").css({ "background": "linear-gradient(to right, #07c0f3 0%,#07c0f3 3%,#ffffff 0.5%,#ffffff 0.5%)" });
            $("#buttonShowAll_Text").html("TÜM DETAYLARI GÖSTER");
            $('div.panel-default').css({
                "border-radius": "10px",
                "background": "linear-gradient(to right, #07c0f3 0%,#07c0f3 3%,#ffffff 0.5%,#ffffff 0.5%)",
                "padding": "0px",
                "margin": "3px"
            });
        }
    });

    $('.collapse').on('show.bs.collapse', function () {
        $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus").css({ "color": "red" });
        $(this).parent().css({
            "border-radius": "10px",
            "background": "linear-gradient(to right, #FF0000 0%,#FF0000 3%,#ffffff 0.5%,#ffffff 0.5%)",
            "padding": "0px",
            "margin": "3px"
        });
        if (active) {
            $('#accordion .in').collapse('hide');
        }
    }).on('hide.bs.collapse', function () {
        $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus").css({ "color": "#07c0f3" });
        $(this).parent().css({
            "border-radius": "10px",
            "background": "linear-gradient(to right, #07c0f3 0%,#07c0f3 3%,#ffffff 0.5%,#ffffff 0.5%)",
            "padding": "0px",
            "margin": "3px"
        });
    });
});