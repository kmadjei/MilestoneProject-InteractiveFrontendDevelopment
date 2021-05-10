// wait for webpage to be ready before executing functions
$(document).ready(function(){

    
    // Code source example from w3schools
    // https://www.w3schools.com/howto/howto_css_modals.asp

    //Opens the challenge modal when user clicks the challenge button
    $('#challenge').click(function(){
        $('#challenge-modal').css('display', 'block'); 
        get_challenge();
        
    }); 

    //closes the challenge modal when user clicks the close <span>
    $('#challenge-modal .close').click(function(){
        $('#challenge-modal').css('display', 'none');
    });


    //gets more trivia questions when user clicks GET MORE    
    $('#get-challenge').click(get_challenge);

    //when user presses the enter key, the answer will be validated
    // $("#answer-box").keypress(function(event){
    //     if (event.keyCode === 13) {
    //         get_challenge();
    //     }
    // });

    // declaring global variable for use in other functions 

    function get_challenge() {

        // jService API request link
        const jServiceAPI = 'https://jservice.io//api/random?category=The Movies,Food & Drink,Pop music,Mythology,Sports,Stupid Answers&?count=3';

        //JQuery HTTP request Example based on Code Institute github API module
        // - https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/github-information.js

        $.when( $.getJSON(`${jServiceAPI}`))
        .then( function(response) {
                //logs to console if success
                console.log(response);

                //Variable declaration
                let data = response[0];

                //Render code to html document
                $('#challenge-modal .topic .field').text(`${data.category.title}`);
                $('#challenge-modal .question .field').text(`${data.question}?`);
                $('#correct-answer').text(`${data.answer}`).hide();
               
            },
            function(error) {
                //log to console when request fails
                console.log(error);
                alert('Request failed. Please Try Again');
            }
        );

    }

    //Code from the Code Institute Love Maths project module
    //https://github.com/Code-Institute-Solutions/JS-Essentials-Project/blob/master/13-Tidying%20Up/script.js
   
    function incrementScore() {
        // Gets the current score from the DOM and increments it
        let oldScore = parseInt($('.scores .correct').text());
        $('.scores .correct').text(oldScore += 1); // value + 1
    
    }
    
    function incrementWrongAnswer() {
       // Gets the current score from the DOM and increments it
       let oldScore = parseInt($('.scores .incorrect').text());
       $('.scores .incorrect').text(oldScore += 1); // value + 1
   
    }
 
     // function to update user score and validate user's answer when called
    function validate_answer(userAnswer, correctAnswer) {
        
        //console.log("Users Answer : " + userAnswer);
        //console.log("Correct Answer : " + correctAnswer);

        if (correctAnswer.search(userAnswer) !== -1) { 
            // if user's answer  matches  correct answer
            // update the correct score
            incrementScore();
            alert('Awesome! You got it right.');
        } else {
            // if user's answer doesn't  match the correct answer
            // update incorrect score
            incrementWrongAnswer();
            alert('Sorry the right answer was: ' + correctAnswer + '. Try another question.');
        }
      
    }

    
    // validate answer when user clicks submit
    $('#submit-answer').click(function() {
        
        
        // get answer values from its html element
        let userAnswer = $('#answer-box').val().toLowerCase().trim();
        let correctAnswer = $('#correct-answer').text().toLowerCase();

        if (userAnswer.length === 0){
            alert('Please submit an answer');
        } else {
            validate_answer(userAnswer, correctAnswer);
           
            //clear input  field and get another challenge
            $('#answer-box').val('');
            get_challenge();
        }
        
        
    });

    // validates answer when user presses enter key
    $("#answer-box").keypress(function(event){
        if (event.key === 'Enter') {
            // get answer values from its html element
            let userAnswer = $('#answer-box').val().toLowerCase().trim();
            let correctAnswer = $('#correct-answer').text().toLowerCase();

            if (userAnswer.length === 0){
                alert('Please submit an answer');
            } else {
                validate_answer(userAnswer, correctAnswer);
                
                //clear input  field and get another challenge
                $('#answer-box').val('');
                get_challenge();
            }
        }
    });





});