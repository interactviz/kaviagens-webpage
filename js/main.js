$(".nav-links li").on("click", function(){
    $(".nav-links li").removeClass("active-top");
    $(this).addClass("active-top");
});



$(".bottom-navbar li").on("click", function(){
    $(".bottom-navbar li").removeClass("active-bottom");
    $(this).addClass("active-bottom");
});