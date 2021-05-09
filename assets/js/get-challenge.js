// wait for webpage to be ready before executing functions
$(document).ready(function(){

    // Code source example from w3schools
    // https://www.w3schools.com/howto/howto_css_modals.asp

    //Opens the challenge modal when user clicks the inspiration button
    $('#challenge').click(function(){
        $('#challenge-modal').css('display', 'block'); 
        get_challenge();
      
    }); 

    //closes the challenge modal when user clicks the close <span>
    $('#challenge-modal .close').click(function(){
        //action to take
        $('#challenge-modal').css('display', 'none');
    });


    //gets more trivia questions when user clicks GET MORE    
    $('#get-challenge').click(get_challenge);

    //search for weather when user presses enter key
    $("#answer-box").keypress(function(event){
        if (event.keyCode === 13) {
            get_challenge();
        }
    });

    // Weather app example inspiration source
    // https://www.youtube.com/watch?v=GuA0_Z1llYU&t=1261s&ab_channel=TylerPotts

    function get_challenge() {

        const jServiceAPI = 'https://jservice.io//api/random?category=The Movies,Food & Drink,Pop music,Mythology,Sports,Stupid Answers&?count=3';

        $.when( $.getJSON(`${jServiceAPI}`))
        .then( function(response) {

                //logs to console if success
                console.log(response);

                let data = response[0];

                //Render code to html document
                $('#challenge-modal .topic .field').text(`${data.category.title}`);
                $('#challenge-modal .question .field').text(`${data.question}`);
            },
            function(error) {
                console.log(error);
                alert('Request failed. Please Try Again');
            }
        );
    }

   
 




});