// wait for webpage to be ready before executing functions
$(document).ready(function(){

    // Code source example from w3schools
    // https://www.w3schools.com/howto/howto_css_modals.asp

    //Open food modal when user clicks the food button
    $('#food').click(function(){
        $('#food-modal').css('display', 'block'); 
    }); 

    //closes the food modal when user clicks the close <span>
    $('#food-modal .close').click(function(){
        //action to take
        $('#food-modal').css('display', 'none');
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == $('#food-modal')) {
            $('#food-modal').css('display', 'none');
        }
    }

    //executes get meal HTTP request
    function get_meal() {

        let request;

        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => { 
            /* code if successful */ 

            // convert to json object
            request = response.json();
            console.log(request[0][]);

        },
            error => {
                /* code if some error */
                console.error('Request failure: ', error);
            }
        );
    }
    
});