$(".nav-links li").on("click", function(){
    $(".nav-links li").removeClass("active-top");
    $(this).addClass("active-top");
});