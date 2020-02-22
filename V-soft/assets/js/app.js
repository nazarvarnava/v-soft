$(function(){

    var header = $("#header"),
        introHeight = $("#intro").innerHeight(),
        scrollOff = $(window).scrollTop();
    /* Header fixed*/
    checkIfScrolled(scrollOff);

    $(window).on("scroll", function(){
        scrollOff = $(this).scrollTop();
        checkIfScrolled(scrollOff);
    });
    function checkIfScrolled(scrollOff){
        if(scrollOff >= introHeight){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            elemId = $this.data('scroll'),
            elemOff = $(elemId).offset().top;
        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: elemOff
        }, 1000)
    });

    /* Nav toggle */
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Collapse */
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();
        var $this = $(this),
            elemId = $this.data('collapse');

        $this.toggleClass("active");
        $(elemId).slideToggle();
    });

});