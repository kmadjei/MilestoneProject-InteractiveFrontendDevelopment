![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)
![CBC Logo](https://canadianbusinesscollege.com/wp-content/uploads/2020/09/CBC-New-Logo-Website.png)

# Project - Interactive Frontend Development

**Project purpose:** Presentation of interactive data for the users.

## Project Description

This project is a single page web application that presents users with 4 choices asking what they feel like doing for the day. Each option, when selected, calls on to an application programming interface (API) service that serves the user with the data required to achieve their selected action goal.

👉 [QUICK PREVIEW](https://kmadjei.github.io/MilestoneProject-InteractiveFrontendDevelopment/)

 
## UX

The project was designed to be used by any body. 

**User's Goal:** To come up with an idea for what to do for the day or in the moment of indecision.

**Site Owner's Goal:** Provide an application to help people generate ideas of what to do for the day.

## Mockup and Wireframes
 
**Mockup**

<img src="https://github.com/kmadjei/MilestoneProject-InteractiveFrontendDevelopment/blob/main/assets/images/mockup.PNG?raw=true" alt="Mockup" width="500px" heigth="4git00px"> 

**Wireframes**
- You can find the wireframes [here📺](https://github.com/kmadjei/MilestoneProject-InteractiveFrontendDevelopment/tree/main/assets/images/wireframes)


## Features

### Existing Features
- Home / Landing page - presents users visiting the page with options to choose from
    - Each selection button opens a pop up modal box, serving the users with the data they chose to seek
- The Food option - opens a modal box with recipe, preparation steps, and a video guide for a random food
- The Inspiration option - opens a modal box with a random quote and joke to boost the user's positive energy
- The To Go Out option - opens a modal box that allows user's to look up current weather for their destination
- The Challenge option - opens a modal box with a trivia game for the users to test their knowledge

### Features Left to Implement
- Provide more options to choose from
- Expand on the functionality of the challenge trivia to provide better progress feedback for users

## Technologies Used

- [HTML](https://www.w3schools.com/html/default.asp)
    - **HTML** is used to build the foundational elements for the project.

- [CSS](https://www.w3schools.com/CSS/default.asp)
    - The project uses **CSS** to create visually pleasing content.

- [JavaScript](https://www.w3schools.com/js/default.asp)
    - **JavaScript** is used to provide dynamic contents for the project.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation for UX/UI.

- [Font Awesome 5](https://fontawesome.com/)
    - The project uses **Font Awesome** version 5 icons to provide better intuitive user experience.

- [The Mealdb API](https://www.themealdb.com/api.php)
    - The project uses **the Mealdb API** to provides information on a random food, including recipes and preparation steps.

- [FreeQuotes API](https://type.fit/api/quotes)
    - The project uses **FreeQuotes API** to provide inspirational quotes for users.

- [JokesAPI ](https://sv443.net/jokeapi/v2/)
    - The project uses the **Jokes API**  to provide random jokes for users.

- [Open-Weather API](https://openweathermap.org/api)
    - The project uses the **Open-Weather API** to provide current weather forecast for any location users may search for.

- [jService API](https://jservice.io/)
    - The project uses the **jService API** provide trivia questions for users.


## Testing



In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Media

- The photos used in this site were obtained from:
    - Google images for the [Logo](https://learningthursdays.com/wp-content/uploads/2020/04/What-to-do.jpg )
    - Google image for the [Weather modal box background](https://hdwallpaperim.com/wp-content/uploads/2017/08/23/459518-illustration-Firewatch-video_games-748x468.jpg)
    - Unsplash for the [Inspiration modal box background](https://unsplash.com/photos/RCAUuu9MN2I). Image by Robert Kovacs.

### Acknowledgements

- In order to complete this project I utilized the knowledge I acquired from the [JavaScript Essentials](https://github.com/Code-Institute-Solutions/JS-Essentials-Project/tree/master/13-Tidying%20Up) and [Interactive Frontend](https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/tree/master/03-SendingEmailsUsingEmailJS/06-sending_emails) walk-through project modules led by Matt Rudge, instructor at The Code Institute.

**Other resources**

- [How To Create a Modal Box](https://www.w3schools.com/howto/howto_css_modals.asp)
- [5 Fun APIs for Your Next JavaScript Projects](https://javascript.plainenglish.io/5-fun-apis-for-your-next-javascript-projects-1834626864c)
- [Waiting for multiple all API responses to complete with the vanilla JS Promise.all() method](https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/)
- [Build a Weather app using HTML, CSS & JavaScript in 2020](https://www.youtube.com/watch?v=n4dtwWgRueI&t=1212s&ab_channel=TylerPotts)
- [Markup Validation Service](https://validator.w3.org/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
