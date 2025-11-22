import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
}

console.log(getRandomListEntry(recipes));

