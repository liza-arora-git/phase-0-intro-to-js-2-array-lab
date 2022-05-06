// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    console.log("destructivelyAppendCat: ", cats);
    // return cats;
}

let destructivelyPrependCat = (Bob) => {
    cats.unshift(Bob);
    // return cats;
};

function destructivelyRemoveLastCat() {
    const removedItem = cats.pop();
    console.log("destructivelyRemoveLastCat: ", cats);
    // return cats;
}

let destructivelyRemoveFirstCat = () => {
    cats.shift();
    console.log("destructivelyRemoveFirstCat: ", cats);
    // return cats;
};

function appendCat(name) {
    let catsCopy = [...cats];
    catsCopy.push(name);
    return catsCopy;
}

var modifiedCatsArray = appendCat("Broom");
console.log("modifiedCatsArray - ", modifiedCatsArray);

function prependCat(name) {
    let prependCatsCopy = [...cats];
    prependCatsCopy.unshift(name);
    return prependCatsCopy;
}

var newPrependCatsArray = prependCat("Arnold");
console.log("newPrependCatsArray - ", newPrependCatsArray); 

function removeLastCat() {
    let catsCopyRemoveLastCat = [...cats];
    catsCopyRemoveLastCat.pop();
    return catsCopyRemoveLastCat; 
}

function removeFirstCat() {
    let removeFirstCatsCopy = [...cats];
    removeFirstCatsCopy.shift();
    return removeFirstCatsCopy;
}