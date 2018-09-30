$(document).ready(function(){

    var checkScrollBar = function(){
        var element = $(this);
        if(element.scrollTop() > 1) {
            $("#navbar").removeClass('bg-transparent');
            $("#navbar").addClass('bg-purple');
        } else {
            $("#navbar").removeClass('bg-purple');
            $("#navbar").addClass('bg-transparent');
        }
    }

    $(window).on('load resize scroll', checkScrollBar);

    // TODO: implement input focus on visibility
    //$("#aria-input").focus();

     // Add smooth scrolling on all links inside the navbar
     $("#navbar a").on('click', function(event) {
           // Make sure this.hash has a value before overriding default behavior
           if (this.hash !== "") {
             // Prevent default anchor click behavior
             event.preventDefault();

             // Store hash
             var hash = this.hash;

             // Using jQuery's animate() method to add smooth page scroll
             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
             $('html, body').animate({
               scrollTop: $(hash).offset().top
             }, 800, function(){

               // Add hash (#) to URL when done scrolling (default click behavior)
               window.location.hash = hash;
             });
           }  // End if
     });
});
