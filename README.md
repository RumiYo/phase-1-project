# Cocktail recipe search

## Table of Contents
* [Phase1 project requirement](https://github.com/RumiYo/phase-1-project/edit/main/README.md#phase1-project-requirements)
* [Story of project](https://github.com/RumiYo/phase-1-project/edit/main/README.md#story-of-project)
* [App](https://github.com/RumiYo/phase-1-project/edit/main/README.md#app) 
* [Technologies](https://github.com/RumiYo/phase-1-project/edit/main/README.md#technologies)
* [API](https://github.com/RumiYo/phase-1-project/edit/main/README.md#api)
  
## Phase1 project requirements

[Project guidelines are here. ](https://github.com/learn-co-curriculum/phase-1-javascript-project-mode)

1. Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIs. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!

2. Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.

3. Use at least 3 distinct event listeners (3 events of different types) that enable interactivity. What this means is that, if you had 3 click events, that would only count as 1 distinct event and you would need to add at least 2 more. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. Events embedded into HTML elements and CSS will not count toward the total. Please ask your instructor if you have questions regarding this requirement.

4. Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

5. Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.


## Story of project
I usually drink cocktails at bars but I barely make them at home.  So, I want to create an app where I can find recipes with cocktail names or liquors.  I found the perfect database for that so I decided to make this cocktail search app. 

My project pitch idea is [here](
https://docs.google.com/document/d/1649pE2qsDGcOcG1GSTfLSDCm577GFykwjH1H5BYZhhI/edit?usp=sharing).

## App
We just type cocktail names or ingredient names in the search bars and the search results will be shown at the bottom of the page.  When we mouse over, we can see their recipe.

[Cocktail-Search.webm](https://github.com/RumiYo/phase-1-project/assets/131638126/98aa7035-7c0e-4607-900d-fbf422829612)



## Technologies

## API
The database I used
Free API | TheCocktailDB.com  https://www.thecocktaildb.com/api.php

1. Search by Cocktail name
2. Search by ingredient
