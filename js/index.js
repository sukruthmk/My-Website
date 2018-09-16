$(document).ready(function(){

var checkScrollBar = function(){
    var element = $(this);
    if(element.scrollTop() > 1) {
        console.log("coming if");
        $("#navbar").removeClass('bg-transparent');
        $("#navbar").addClass('bg-purple');
    } else {
        console.log("coming else");
        $("#navbar").removeClass('bg-purple');
        $("#navbar").addClass('bg-transparent');
    }
}
$(window).on('load resize scroll', checkScrollBar)
});
