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
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "⭐" : "☆";
    }
    return stars;
}

function recipeTemplate(recipe) {
    return `
    <figure>
        <img src="${recipe.image}" alt="${recipe.name}">
        <ul class="tags">
            ${tagsTemplate(recipe.tags)}
        </ul>
        <p class="rating">${ratingTemplate(recipe.rating)}</p>
        <figcaption>
            <h2>${recipe.name}</h2>
        </figcaption>
        <p class="description">${recipe.description}</p>
    </figure>
    `;
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

