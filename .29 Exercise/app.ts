// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!


const favorite_fruits: string[] = ["banana" ,"apple",   "strawberry"];

if (favorite_fruits.includes("banana")) {
    console.log("I like bananas!");
}

if (favorite_fruits.includes("apple")) {
    console.log("I like apples!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("I like strawberries!");
}

if (favorite_fruits.includes("orange")) {
    console.log("I like oranges!");
}

if (favorite_fruits.includes("kiwi")) {
    console.log("I like kiwis!");
}