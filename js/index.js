$(".bookmarking").on("mouseover", function () {
    $(".hr-book").addClass("orange");
})

$(".bookmarking").on("mouseleave", function () {
    $(".hr-book").removeClass("orange");
})

$(".speedy").on("mouseover", function () {
    $(".hr-speedy").addClass("orange");
})

$(".speedy").on("mouseleave", function () {
    $(".hr-speedy").removeClass("orange");
})

$(".easy").on("mouseover", function () {
    $(".hr-easy").addClass("orange");
})

$(".easy").on("mouseleave", function () {
    $(".hr-easy").removeClass("orange");
})

$(".tenda").hide();

$(".single").on("click", function () {
    $("div." + $(this).attr("id")).slideToggle();
    $("#" + $(this).attr("id") + " img").toggleClass("animation-rotation");
})

$(".hamburger").on("click", function () {
    $("nav ul").slideToggle();

})