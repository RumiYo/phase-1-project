document.addEventListener('DOMContentLoaded', () => {
    console.log('We are connected!');

    //get cocktail input value and get data 
    const form = document.querySelector('#NameSearch');
    form.addEventListener('submit',(e) =>{
        e.preventDefault()
        const cocktailName = e.target.cocktailName.value;
        fetchDataWithDrinkName(cocktailName);
    })
})

//Call API to get cocktaillist from input cocktail name
function fetchDataWithDrinkName(name){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(resp => resp.json())
    .then(data => {
        const cocktailsArr = data.drinks;
        console.log(cocktailsArr)
    })
}



