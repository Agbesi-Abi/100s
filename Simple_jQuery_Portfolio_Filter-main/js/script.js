$(document).ready(function(){
    $(".button").click(function(){
        var value = $(this).attr("data-filter");
        if (value == "all")
        {
            $(".filter").show("1000");
        }
        else
        {
             $(".filter").not("."+value).hide("10000");
             $(".filter").filter("."+value).show("10000");
        }
        //add active class
        $("ul .button").click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    })
})