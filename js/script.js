$(document).ready(function () {

    $(".actions li").click(function () {
        var id = $(this).data("tab");

        console.log("#tab-" + id);

        $(".content .active").removeClass("active");

        $("#tab-" + id).addClass("active");

        $(".actions .active").removeClass("active");

        $(this).addClass("active");
    });

    $("#mylink").click(function (event) {
        event.preventDefault();
        console.log(event);
    });

    // acordion

    $(".accordion li a").click(function (event) {
        event.preventDefault();

        $(".accordion li .inner").each(function () {
            $(this).slideUp(500);

        });

        if ($(this).next().css('display') == "block") {
            $(this).next().slideUp(500);
        } else {
            $(this).next().slideDown(500);
        }
    });



});