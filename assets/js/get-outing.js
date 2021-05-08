// wait for webpage to be ready before executing functions
$(document).ready(function(){

    // Code source example from w3schools
    // https://www.w3schools.com/howto/howto_css_modals.asp

    //Open inspiration modal when user clicks the inspiration button
    $('#inspiration').click(function(){
        $('#inspiration-modal').css('display', 'block'); 
        get_inspiration(); 
        get_joke();  
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

    // grabs more inspiration and jokes request when user clicks button
    $('#inspiration-modal #get-inspiration').click(function() {
        get_inspiration();
        get_joke();
    });


    //executes get inspiration HTTP request
    function get_inspiration() {

        // http API get request
        fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            //code if success
            console.log(data);
            //generate random quote from 1600 selections
            let random =  Math.floor(Math.random() * 1600) + 1;
            let quote = data[random];
            // display content in html doc
            $('#inspiration-modal .modal-body').html(`
                <section class="quotes">
                    <h3>Get Inspired!</h3>
                    <p>
                        <i class="fas fa-quote-left"></i>
                        ${quote.text}
                    </p>
                    ${quote.author ? `<p class="author">-  ${quote.author} <i class="fas fa-quote-right"></i></p>` : ``} 
                </section>      
            `);
        }).catch(error => {
            //code if request fails
            console.error('Request failure: ', error);
        });


    }
    

    //executes get jokes HTTP request
    function get_joke() {

        // http API get request
        fetch("https://v2.jokeapi.dev/joke/Any")
        .then(response => response.json())
        .then(data => {
            //code if success
            console.log(data);
            
            let joke = data;

            if(joke.type == "single")
            {
                // executes if the joke type is a single setup 
                $('#inspiration-modal .modal-body').html(`
                    <section class="quotes">
                        <h3>Here Is A Joke To Brighten Your Day!</h3>
                        <p>
                            <i class="fas fa-quote-left"></i>
                            ${joke.joke}
                            <i class="fas fa-quote-right"></i><
                        </p>
                    </section>      
                `);
            }
            else
            {
                // displays joke in html doc it joke type is double setup
                $('#inspiration-modal .modal-body').html(`
                    <section class="quotes">
                        <h3>Here Is A Joke To Brighten Your Day!</h3>
                        <p><i class="fas fa-quote-left"></i> ${joke.setup}</p>
                        <p>${joke.delivery} <i class="fas fa-quote-right"></i></p>
                    </section>      
                `);
            }
        }).catch(error => {
            //code if request fails
            console.error('Request failure: ', error);
        });

    }
    
    
});