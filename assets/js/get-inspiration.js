// wait for webpage to be ready before executing functions
$(document).ready(function(){

    // Code source example from w3schools
    // https://www.w3schools.com/howto/howto_css_modals.asp

    //Open inspiration modal when user clicks the inspiration button
    $('#inspiration').click(function(){
        $('#inspiration-modal').css('display', 'block'); 
        get_joke_and_inspiration(); 
    }); 

    //closes the inspiration modal when user clicks the close <span>
    $('#inspiration-modal .close').click(function(){
        //action to take
        $('#inspiration-modal').css('display', 'none');
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == $('#inspiration-modal')) {
            $('#inspiration-modal').css('display', 'none');
        }
    }

    // grabs more inspiration and jokes request when user clicks the button
    $('#inspiration-modal #get-inspiration').click( get_joke_and_inspiration );
    

    function get_joke_and_inspiration() {

        //SOurce code example for multiple HTTP request below
        //https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/

        //HTTP Request for jokes and inspiration
        Promise.all([
            fetch('https://type.fit/api/quotes'),
            fetch('https://v2.jokeapi.dev/joke/Any')
        ]).then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            // Log the data to the console
            console.log(data);

            //generate random quote for 1600 selections
            let random =  Math.floor(Math.random() * 1600) + 1;
            let quote = data[0][random];
            // get data for from the api JSON object request
            let joke = data[1];

            // displays content for food modal in html doc
            const quoteHTML = `
                <section class="quotes">
                    <h3>Get Inspired!</h3>
                    <p>
                        <i class="fas fa-quote-left"></i>
                        ${quote.text}
                    </p>
                    ${quote.author ? `<p class="author">-  ${quote.author} <i class="fas fa-quote-right"></i></p>` : ``} 
                </section>      
            `;

            let jokeHTML = ``;
            // displays html content for the joke
            if(joke.type == "single")
            {
                // executes if the joke type is a single setup 
                jokeHTML = `
                    <section class="quotes">
                        <h3>Here Is A Joke To Brighten Your Day!</h3>
                        <p>
                            <i class="fas fa-quote-left"></i>
                            ${joke.joke}
                            <i class="fas fa-quote-right"></i><
                        </p>
                    </section>      
                `;
            }
            else
            {
                // displays joke in html doc if joke type is double setup
                jokeHTML = `
                    <section class="quotes">
                        <h3>Here Is A Joke To Brighten Your Day!</h3>
                        <p><i class="fas fa-quote-left"></i> ${joke.setup}</p>
                        <p>${joke.delivery} <i class="fas fa-quote-right"></i></p>
                    </section>      
                `;
            }

            // display both html content in the document
            $('#inspiration-modal .modal-body').html(quoteHTML + jokeHTML);
            

        }).catch(function (error) {
            // if there's an error, log it
            console.log(error);
            $('#inspiration-modal .modal-body').html(`<p>${error.message}</p>`);

        });

    }
    
});