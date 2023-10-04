# Cocktail recipe search

## Table of Contents
* [Phase1 project requirement](#phase1-project-requirements)
* [Story of project](#story-of-project)
* [App](#app) 
* [Technologies](#technologies)
* [API](#api)
* [Recourses](#recourses)
  
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
When you type cocktail names or ingredient names in the search bars, the search results will be shown at the bottom of the page.  You just need to mouse over and select a cocktail to see the recipe.

[Cocktail-Search.webm](https://github.com/RumiYo/phase-1-project/assets/131638126/98aa7035-7c0e-4607-900d-fbf422829612)


## Technologies
#### `fetch`
`fetch` is used to call API and get data.  In this app `fetch` is used in 2 functions (`fetchDataWithDrinkName(name)`, `fetchDataWithIngredientName(name)`).  
```
function fetchDataWithDrinkName(name){
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(resp => resp.json())
    .then(data => {
        const cocktailsArr =  data.drinks;
        return cocktailsArr;
    })
}
```


#### `submit` event
`submit` event is used for `cocktailNameForm` and `ingredientForm` to collect inputs in those forms.
```
    const cocktailNameForm = document.querySelector('#nameSearch');
    cocktailNameForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        const cocktailName = e.target.cocktailName.value;
        fetchDataWithDrinkName(cocktailName)
        .then(cocktailsArr => {
            displayDrinkList(cocktailsArr);
            mouseOverEvent(cocktailsArr);
            mouseLeaveEvent();
        })       
        document.querySelector('#ingredientName').value = '';
    })
```

#### `mouseenter` event
In order to trigger `mouseenter` event and show recipes for each cocktail, `forEach` is used with `mouseenter` eventListener.
```
function mouseOverEvent(arr){
    const allCards = document.querySelectorAll('.thumbnail');
    let cocktailName = ''
    allCards.forEach(card => {
        card.addEventListener('mouseenter', e => {
            cocktailName = e.target.id;
            fetchDataWithDrinkName(cocktailName)
            .then(cocktailsArr => {
                displayRecipe(cocktailsArr,cocktailName);

            });
        })
    })
}
```

#### `mouseleave` event
In order to trigger `mouseleave` for each cocktail, `forEach` is used together as well. Since cocktailName id has spaces in its value sometimes `div#${CSS.escape(cocktailName)}` is used to select the whole id information. 
```
function mouseLeaveEvent(){
    const allCards = document.querySelectorAll('.thumbnail');
    allCards.forEach(card => {
        card.addEventListener('mouseleave', e => {
            const cocktailName = e.target.id;
            document.querySelector(`div#${CSS.escape(cocktailName)} div.recipeDetail`).innerHTML = '';
            document.querySelector(`div#${CSS.escape(cocktailName)}`).style.background = '';
        })
    })  
}
```

## API
The database I used
Free API | TheCocktailDB.com  https://www.thecocktaildb.com/api.php

1. Search by Cocktail name  https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
2. Search by ingredient  https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

## Recourses 
* [Github Docs: Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
* [Element: mouseenter event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event)
* [CSS: escape() static method
](https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape_static)
  
