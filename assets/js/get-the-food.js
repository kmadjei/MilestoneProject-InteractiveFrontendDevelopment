// wait for webpage to be ready before executing functions
$(document).ready(function(){

    // Code source example from w3schools
    // https://www.w3schools.com/howto/howto_css_modals.asp

    //Open food modal when user clicks the food button
    $('#food').click(function(){
        $('#food-modal').css('display', 'block'); 
        get_meal();
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

    // grabs more meal request when user clicks button
    $('#food-modal #get-meal').click(get_meal);

    //executes get meal HTTP request
    function get_meal() {


        // http API get request
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            //code if success
            console.debug(data.meals[0]);
            // function to html content
            create_meal_html_content(data.meals[0])
        }).catch(error => {
            //code if request fails
            console.error('Request failure: ', error);
            //Print error message in html document
            $('#food-modal .modal-body').html(`<p>${error.message}</p>`);
        });


    }



    function create_meal_html_content(meal){

        // idea for creating this function was based on the meal API link below
        // https://javascript.plainenglish.io/5-fun-apis-for-your-next-javascript-projects-1834626864c
        
        let ingredients = [];
        
        //loop to build ingredients list
        for(let i = 0; i < 20; i++ ){
            
            if (meal[`strIngredient${i + 1}`]) {
                //if an ingredient is found in the JSON meal API object
                //append it
                ingredients[i] = `<li>${meal[`strIngredient${i + 1}`]} - ${meal[`strMeasure${i + 1}`]}</li>`;
            } else {
                //break out of the loop if no ingredient
                break;
            }       
        }

        // HTML template for the meal content
        let mealHTML = `
            <section class="caption">
                <div class="thumbnail">
                    <img src="${meal.strMealThumb}" alt="Food Image">
                </div>
                <div class="info">
                    <p class="food-id">
                        ${meal.strArea ? `<b>Origin:</b> ${meal.strArea}` : ""}
                        ${meal.strCategory ? `<b>Category:</b> ${meal.strCategory}` : ""}
                        <b>Meal:</b> ${meal.strMeal}
                    </p>
                    <div class="ingredients">
                        <h4>Ingredients</h4>
                        <ul>${ingredients.join("")}</ul>
                    </div>
                </div>
            </section>
            <h3>Instructions</h3>
            <p class="instructions">${meal.strInstructions}</p>
            ${meal.strYoutube ? 
                `<h3>Video Preparation</h3>
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(32)}" title="Cooking preparation video">
                        <p>Sorry, Your browser does not support iframe element!</p>
                    </iframe>
                </div>` : 
                ""}
        `;

        // displays the result in the HTML document
        $('#food-modal .modal-body').html(mealHTML);

    }

    
    
});