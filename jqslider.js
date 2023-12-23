$(".right").click(function(){
    if($(".slide.active").next(".slide").length!=0)
    {
        $(".slide.active").fadeOut(1000).removeClass("active").next(".slide").fadeIn(1000).addClass("active")
        $("li.active2").removeClass("active2").next("li").addClass("active2")
    }
    else
    {
        $(".slide.active").removeClass("active").fadeOut(1000);
        $(".slide:first").addClass("active").fadeIn(1000)

        $("li.active2").removeClass("active2");
        $("li:first").addClass("active2")
    }
})

$(".left").click(function(){
    if($(".slide.active").prev(".slide").length!=0)
    {
        $(".slide.active").fadeOut(1000).removeClass("active").prev(".slide").fadeIn(1000).addClass("active")
        $("li.active2").removeClass("active2").prev("li").addClass("active2")
    }
    else
    {
        $(".slide.active").removeClass("active").fadeOut(1000);
        $(".slide:last").addClass("active").fadeIn(1000)

        $("li.active2").removeClass("active2");
        $("li:last").addClass("active2")
    }
})


function autoplay()
{
    if($(".slide.active").next(".slide").length!=0)
    {
        $(".slide.active").removeClass("active").next(".slide").addClass("active")
        $("li.active2").removeClass("active2").next("li").addClass("active2")
    }
    else
    {
        $(".slide.active").removeClass("active");
        $(".slide:first").addClass("active")

        $("li.active2").removeClass("active2");
        $(".li:first").addClass("active2")
    }
    setTimeout(function(){
        autoplay();
    },2000)
}
setTimeout(function(){
    autoplay();
},2000)