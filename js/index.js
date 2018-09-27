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

    $("#aria-input").focus();

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

     $("form").submit(function(e){
        e.preventDefault();
        console.log("form submit");
        // Make request to IFTTT
        // Using YQL and JSONP
        $.ajax({
            url: "https://maker.ifttt.com/trigger/{form_submit}/with/key/k7eFYJauLSuxWdgHSRaAuC8F2hOaSC0EsztaclQOcbk",

            // The name of the callback parameter, as specified by the YQL service
            jsonp: "callback",

            // Tell jQuery we're expecting JSONP
            dataType: "jsonp",

            // Tell YQL what we want and that we want JSON
            data: {
                value1: jQuery("#contact-name").val(),
                value2: jQuery("#contact-email").val(),
                value3: jQuery("#contact-message").val(),
                format: "json"
            },

            // Work with the response
            success: function( response ) {
                console.log( "sent mail" ); // server response

                $('form').trigger("reset");
            }
        });
    });
});
