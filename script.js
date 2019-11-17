$(document).ready(function() {
    // my code goes here:
    $(".hamburger a").on("click", function() {
        // do stuff
        $(".mobile-menu").toggleClass("open");
        if ($(".mobile-menu").hasClass("open")) {
            $("aside").css("display","block");
            $widthMenu = $(".mobile-menu").width();
            $("main").css("transform", "translateX(260px)");
            
        } else {
            $("main").css("transform", "");
        }
        // $(this).animate({ 'zoom': 1.3 }, 400);

        // $(".mobile-menu").fadeToggle(1000);

    });
    // make the skill bar bigger when the mouse moves 
    $(".abilities").mouseenter(function() {

        $('.scale').css('transform', 'scale(1.2)');

    });

    $(".abilities").mouseleave(function() {

        $('.scale').css('transform', 'scale(1.0)');


    });

    // make the phrase in the header changes its color when the mouse move in/out 
    $('header').mouseenter(function() {
        // alert('move')
        $("aside").css("display","block");
        $('header h1').css('color', 'white');
        $('header h3 span').css('color', 'goldenrod');

    });
    $('header').mouseleave(function() {
        // alert('move')
        
        $('header h1').css('color', 'goldenrod');
        $('header h3 span').css('color', 'white');
        // $(this).addClass(".class");

    });


    // zoom in/out an image

    $('#header img').hover(
        function() {
            $(this).animate({ 'zoom': 1.3 }, 400);
        },
        function() {
            $(this).animate({ 'zoom': 1 }, 400);
        });
$('#btn-send').click(function(){
    alert ("I have got your message. Thank you!")

})
    // $().addClass(className);

});