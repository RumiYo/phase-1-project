document.addEventListener('DOMContentLoaded', () => {
    console.log('We are connected!');

    //get cocktail input value and get data 
    const cocktailNameForm = document.querySelector('#NameSearch');
    cocktailNameForm.addEventListener('submit',(e) =>{
        e.preventDefault()
        const cocktailName = e.target.CocktailName.value;
        fetchDataWithDrinkName(cocktailName);
        document.querySelector('#IngredientName').value = '';
    })

    //get ingredient input value and get data 
    const ingredientForm = document.querySelector('#IngredientSearch');
    console.log(ingredientForm)
    ingredientForm.addEventListener('submit',(e) =>{
        e.preventDefault()
        const ingredient = e.target.IngredientName.value;
        fetchDataWithIngredientName(ingredient);
        document.querySelector('#CocktailName').value = '';
    })
})

//Call API to get cocktaillist from input cocktail name
function fetchDataWithDrinkName(name){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(resp => resp.json())
    .then(data => {
        const cocktailsArr = data.drinks;
        console.log(cocktailsArr);
        displayDrinkList(cocktailsArr)
    })
}

//Call API to get cocktaillist from input ingredient name
function fetchDataWithIngredientName(name){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
    .then(resp => resp.json())
    .then(data => {
        const cocktailsArr = data.drinks;
        console.log(cocktailsArr);
        displayDrinkList(cocktailsArr)
    })
}

//Display list of cocktails
function displayDrinkList(arr){
    document.querySelector('#SearchResult').innerHTML = '';
    arr.forEach(element => {
            console.log(element.strDrink,element.strDrinkThumb);
            const card = document.createElement('div');
            card.className = 'cocktailThumbnail'
            card.innerHTML = `
                <img src=${element.strDrinkThumb} >
                <p>${element.strDrink}</p>
            `
            document.querySelector('#SearchResult').appendChild(card)
        }
    )   
}


