const getItemResult = allItem => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${allItem}`;
    // const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${allItem}`;
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
            <div class='item'>    
            <div class='meal-img'>
                <img  src='${meal.strMealThumb}'>
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


    // getItemResult()








