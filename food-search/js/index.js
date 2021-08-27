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
    for (const meal of meals) {
        console.log(meal);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
         <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        dealsSearch.appendChild(div);
    }
};