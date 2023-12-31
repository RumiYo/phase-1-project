document.addEventListener('DOMContentLoaded', () => {

    //get cocktail input value and get data 
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

    //get ingredient input value and get data 
    const ingredientForm = document.querySelector('#ingredientSearch');
    ingredientForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        const ingredient = e.target.ingredientName.value;
        fetchDataWithIngredientName(ingredient)
        .then(cocktailsArr => {
            displayDrinkList(cocktailsArr);
            mouseOverEvent(cocktailsArr);
            mouseLeaveEvent();
        })
        document.querySelector('#cocktailName').value = '';
    })

})

//Call API to get cocktaillist from input cocktail name
function fetchDataWithDrinkName(name){
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(resp => resp.json())
    .then(data => {
        const cocktailsArr =  data.drinks;
        return cocktailsArr;
    })
}

//Call API to get cocktaillist from input ingredient name
function fetchDataWithIngredientName(name){
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
    .then(resp => resp.json())
    .then(data => {
        const cocktailsArr = data.drinks;
        return cocktailsArr;
    })
}

//Display list of cocktails
function displayDrinkList(arr){
    document.querySelector('#searchResult').innerHTML = '';
    arr.forEach(element => {
            const card = document.createElement('div');
            card.className = 'thumbnail'
            card.setAttribute('id',`${element.strDrink}`)
            card.innerHTML = `
                <img class="${element.strDrink}" src=${element.strDrinkThumb} >
                <h3 class="${element.strDrink}">${element.strDrink}</h3>
                <div class='recipeDetail'></div>
            `
            document.querySelector('#searchResult').appendChild(card);
        }
    )  
}

//mouseover, get cocktail name and show recipe
function mouseOverEvent(arr){
    const allCards = document.querySelectorAll('.thumbnail');
    let cocktailName = ''
    allCards.forEach(card => {
        card.addEventListener('mouseenter', e => {
            cocktailName = e.target.id;
            fetchDataWithDrinkName(cocktailName)
            .then(cocktailsArr => {
                displayRecipe(cocktailsArr,cocktailName)

            });
        })
    })
}

//show recipe
function displayRecipe(arr,cocktailName){
    let cocktailInstruction ='';
    let cocktailIngredients = [];
    arr.forEach(ele => {
        if(ele.strDrink===cocktailName){
            cocktailInstruction = ele.strInstructions;
            cocktailIngredients.push(
                {ingredient: ele.strIngredient1, measure: ele.strMeasure1},
                {ingredient: ele.strIngredient2, measure: ele.strMeasure2},
                {ingredient: ele.strIngredient3, measure: ele.strMeasure3},
                {ingredient: ele.strIngredient4, measure: ele.strMeasure4},
                {ingredient: ele.strIngredient5, measure: ele.strMeasure5},
                {ingredient: ele.strIngredient6, measure: ele.strMeasure6},
                {ingredient: ele.strIngredient7, measure: ele.strMeasure7},
                {ingredient: ele.strIngredient8, measure: ele.strMeasure8},
                {ingredient: ele.strIngredient9, measure: ele.strMeasure9}
                );
            return cocktailInstruction;
            return cocktailIngredients;
        }
        return;
    })
    document.querySelector(`div#${CSS.escape(cocktailName)} div.recipeDetail`).innerHTML = `
        <p>${cocktailInstruction}</p>
        <ol id='ingredients'></ol>
    `

    for(let i=0 ; i < cocktailIngredients.length ; i++){
        if(cocktailIngredients[i].ingredient!==null){
            const ingredientsAndMeasure = document.createElement('li');
            ingredientsAndMeasure.innerHTML = `
            ${cocktailIngredients[i].ingredient} ( ${cocktailIngredients[i].measure} )
            `
            document.querySelector(`div#${CSS.escape(cocktailName)} ol#ingredients`).appendChild(ingredientsAndMeasure);
            document.querySelector(`div#${CSS.escape(cocktailName)}`).style.background = '#E9EDC9';
        }
    }
}

//hide recipe when mouse leave
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