$(document).ready(function(){
    $('#next-arrow').hover(function(){
        $(this).attr('src', "assets/down-arrow.png");
    }, function(){
        $(this).attr('src',  "assets/down-arrow-anim.gif");
    });

    // Focus text input in the command box
    $(".cmd-input").focus();
});
