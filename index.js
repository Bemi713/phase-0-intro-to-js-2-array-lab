// Write your solution here!
const cats 

function destructivelyAppendCat(name) {
cats.push(name);
}

const cats = ["Milo", "Otis", "Garfield"];
cats.length = 0;

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const newArray = [...cats]
    newArray.push(name);
    return newArray; 
}
function prependCat(name) {
    const newArray = [...cats]
    newArray.unshift(name);
    return newArray; 
}

function removeLastCat() {
    const newArray = [...cats]
    newArray.pop(name);
    return newArray; 
}

    function removeFirstCat() {
        const newArray = [...cats]
        newArray.shift(name);
        return newArray; 
}
