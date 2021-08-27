document.getElementById("search-btn").addEventListener("click", function() {
    const searchField = document.getElementById("search-field");
    const searchInputText = searchField.value;
    searchField.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displaySearchResult(data.meals));
});

const displaySearchResult = (meals) => {
    const dealsSearch = document.getElementById("deals-search");
    dealsSearch.innerText = "";
    for (const meal of meals) {
        console.log(meal);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
         <div class="card h-100" onclick="loadMealDetails(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;
        dealsSearch.appendChild(div);
    }
};

const loadMealDetails = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
    const mealDetails = document.getElementById("meal-details");
    mealDetails.innerText = "";
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                <a href="${
                  meal.strYoutube
                }" class="btn btn-primary">Go Youtube</a>
            </div>
    `;
    mealDetails.appendChild(div);
};