// wait for webpage to be ready before executing functions
$(document).ready(function(){

    // Code source example from w3schools
    // https://www.w3schools.com/howto/howto_css_modals.asp

    //Open inspiration modal when user clicks the inspiration button
    $('#out').click(function(){
        $('#out-modal').css('display', 'block'); 
        $('#out-modal .search').val("");
    }); 

    //closes the inspiration modal when user clicks the close <span>
    $('#out-modal .close').click(function(){
        //action to take
        $('#out-modal').css('display', 'none');
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == $('#out-modal')) {
            $('#out-modal').css('display', 'none');
        }
    }

    //search for weather when user submits input
    $('#out-modal .enter').click(get_weather);

    //search for weather when user presses enter key
    $("#out-modal .search").keypress(function(event){
        if (event.keyCode === 13) {
            get_weather();
        }
    });

    // Weather app example inspiration source
    // https://www.youtube.com/watch?v=GuA0_Z1llYU&t=1261s&ab_channel=TylerPotts

    function get_weather() {

        // gets user input
        const search_request = $('#out-modal .search').val();


        //HTTP get request for the weather
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_request}&units=metric&appid=a4c805281331539f19a213d83e19e0f3`)
        .then(result => result.json()) //convert to JSON object
        .then(data => { 
            
            //Displaying data in HTML
            $('#out-modal .city').text(`${data.name} , ${data.sys.country}`);
            $('#out-modal .weather').text(`${data.weather[0].description}`);
            $('#out-modal .t_range').text(`${Math.round(data.main.temp_min)} °c / ${Math.round(data.main.temp_max)} °c`);
            $('#out-modal .temp').text(`${Math.round(data.main.temp)} °c`);
            
            //creating date object and displaying it in the HTML doc
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = days[d.getDay()]; 
            let date1 = d.getDate(); 
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            $('#out-modal .date').text(`${day} ${date1} ${month}, ${year}`);

        })
        .catch(function(error) {
            // if there's an error, log it
            console.log('Request failure ', error);

            //Alerts user to enter correct information
           alert("Please enter the correct information");
        });
        
    }

   
 




});