// wait for webpage to be ready before executing functions
$(document).ready(function(){


    /*
        Sticky Navbar source reference:
        - https://www.w3schools.com/howto/howto_js_sticky_header.asp
    */
    // When the user scrolls the page, execute Function
    $(document).scroll(function(){


        //Place navbar fixed at the top when scroll position is reached
        if (window.pageYOffset > 20) {

            $('header').css(
                {
                    'margin-top': '0px',
                    'background-color': '#fff'        
                }        
            );

            $('#navbar').css(
                {
                    'width': '100%'
                    
                }        
            );

        }  else {
            // Place navbar back to original position when user scrolls back to top page

            $('header').css(
                {
                    'margin-top': '20px',
                    'background-color': 'initial'        
                }        
        );

        $('#navbar').css(
                {
                    'width': 'initial',
                }        
            );
        }


    });







    
});