import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
}

function tagsTemplate(tags) {
    let html = "";
    for (let tag of tags) {
        html += `<li>${tag}</li>`;
    }
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? "⭐" : "☆";
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
    <div class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}">
        <div class="recipe-info">
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2>${recipe.name}</h2>
            <p class="recipe__ratings">${ratingTemplate(recipe.rating)}</p>
            <p class="recipe__description">${recipe.description}</p>
        </div>
    </div>
    `;
}

function filterRecipes(query) {
    query = query.toLowerCase();

    const results = recipes.filter(recipe => {
        if (recipe.name.toLowerCase().includes(query)) 
            return true;
        if (recipe.description.toLowerCase().includes(query)) 
            return true;

        if (recipe.tags.find(t => t.toLowerCase().includes(query))) 
            return true;

        if (recipe.recipeIngredient.find(i => i.toLowerCase().includes(query))) 
            return true;

        return false;
    });

    return results.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
    e.preventDefault();

    const query = document.querySelector("#searchInput").value.trim();
    if (!query) return;

    const results = filterRecipes(query);
    renderRecipes(results);
}

function renderRecipes(recipeList) {
    const output = document.querySelector("#recipes");
    output.innerHTML = recipeList.map(recipeTemplate).join("");
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

init();

document.querySelector("#searchBtn").addEventListener("click", searchHandler);