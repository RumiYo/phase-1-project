document.addEventListener('DOMContentLoaded', () => {
    console.log('We are connected!');

    //get cocktail input value and get data 
    const cocktailNameForm = document.querySelector('#NameSearch');
    cocktailNameForm.addEventListener('submit',(e) =>{
        e.preventDefault()
        const cocktailName = e.target.CocktailName.value;
        console.log(cocktailName)
        fetchDataWithDrinkName(cocktailName)
        .then(cocktailsArr => {
            displayDrinkList(cocktailsArr)
            mouseOverEvent(cocktailsArr) 
            mouseLeaveEvent()

        })
        document.querySelector('#IngredientName').value = '';
    })

    //get ingredient input value and get data 
    const ingredientForm = document.querySelector('#IngredientSearch');
    ingredientForm.addEventListener('submit',(e) =>{
        e.preventDefault()
        const ingredient = e.target.IngredientName.value;
        fetchDataWithIngredientName(ingredient).then(cocktailsArr => displayDrinkList(cocktailsArr));
        document.querySelector('#CocktailName').value = '';
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
    document.querySelector('#SearchResult').innerHTML = '';
    arr.forEach(element => {
            const card = document.createElement('div');
            card.className = 'thumbnail'
            card.setAttribute('id',`${element.strDrink}`)
            card.innerHTML = `
                <img class="${element.strDrink}" src=${element.strDrinkThumb} >
                <p class="${element.strDrink}">${element.strDrink}</p>
            `
            document.querySelector('#SearchResult').appendChild(card)
        }
    )  
}

//mouseover, get cocktail name and show recipe
function mouseOverEvent(arr){
    const allCards = document.querySelectorAll('.thumbnail');
    allCards.forEach(card => {
        card.addEventListener('mouseenter', e => {
            console.log(e.target.id);
            const cocktailName = e.target.id;
            displayRecipe(arr,cocktailName);
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
            console.log(ele)
            return cocktailInstruction;
        }
        return;
    })
    console.log(cocktailInstruction);
    const recipeCard = document.createElement('div');
    recipeCard.setAttribute('id', 'overlay');
    recipeCard.innerHTML = `
        <p>${cocktailInstruction}</p>
    `
    document.querySelector(`#${CSS.escape(cocktailName)}`).appendChild(recipeCard)
}

//hide recipe when mouse leave
function mouseLeaveEvent(){
    const allCards = document.querySelectorAll('.thumbnail');
    allCards.forEach(card => {
        card.addEventListener('mouseleave', e => {
            console.log(e.target.id)
        })
    })  
}