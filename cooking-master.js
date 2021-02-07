// display all result of search value
const getItemResult = allItem => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${allItem}`;
    fetch(url)
    .then(res => res.json())
    .then(data => findItem(data))
}

const search = document.getElementById('search-btn');
search.addEventListener('click', () => {
    const inputItem = document.getElementById('input-item').value;
        if(inputItem === ''){
            document.getElementById('meal-item').display  = 'none';
        }
        else{
            getItemResult(inputItem);
        }
    })

const findItem = displayItem => {
    const container = document.getElementById('meal-item');
    if (displayItem.meals){
        let item = '';
        displayItem.meals.forEach(meal => {
             item += `
            <div id='change' class='item'>    
            <div class='meal-img'>
                <img onclick='displayDetails("${meal.strMeal}")'  src='${meal.strMealThumb}'>
            </div>
            <div class='meal-name'>
            <h3>${meal.strMeal}</h3>
            </div>
            </div>
            `
            container.innerHTML = item;
            document.getElementById('warning-btn').style.display = 'none';
        });
    }
    else{
        const inputItem = document.getElementById('input-item').value;
        if(inputItem === ''){
            document.getElementById('warning-btn').style.display = 'none';
        }
        else{
            document.getElementById('warning-btn').style.display = 'block';
        }
    }
}

// display any single item details with ingredient
const displayDetails = details => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`;
    fetch(url)
    .then(res => res.json())
    .then(data => singleItemDetails(data.meals[0]))
}

const singleItemDetails = singleItem =>{
    const mealDetails = document.getElementById('meal-details');
        const item = `
        <div id='change' class='item-single'>    
        <div class='meal-img'>
            <img  src='${singleItem.strMealThumb}'>
        </div>
        <div class='meal-name-single'>
        <h3>${singleItem.strMeal}</h3>
        </div>
        <h3 class='ing-title'>Ingredient</h3>
        <div id='ingredient'>
        <p>${singleItem.strIngredient1}</p>
        <p>${singleItem.strIngredient2}</p>
        <p>${singleItem.strIngredient3}</p>
        <p>${singleItem.strIngredient4}</p>
        <p>${singleItem.strIngredient5}</p>
        <p>${singleItem.strIngredient6}</p>
        <p>${singleItem.strIngredient7}</p>
        <p>${singleItem.strIngredient8}</p>
        <p>${singleItem.strIngredient9}</p>
        <p>${singleItem.strIngredient10}</p>
        </div>
        `

        mealDetails.innerHTML = item;
        document.getElementById('meal-item').style.display = 'none';
}

document.getElementById('input-item').value = '';























