function add(x, y) {
    return x + y;
    //Anything after return is not valid and will not run
}

const priceOfFirstItem = parseInt(prompt("What is the price of your first item?"));
const priceOfSecondItem = parseInt(prompt("What is the price of your second item?"));

const sum = add(priceOfFirstItem, priceOfSecondItem);

console.log("The total of your two items comes to $" + sum);

/* function greeting(name) {
    console.log("Hi my name is " + name);
}

greeting("Rashford");
greeting("Malacia");
greeting("Atony")

function addition() {
    console.log("Hi my name is ");
} */


/* const greeting1 = function() {
    console.log("Hello my name is Dalot");
}

greeting1();

const greeting2 = () => {
    console.log("Hello my name is Malacia");
}

greeting2(); */

