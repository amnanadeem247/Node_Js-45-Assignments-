"use strict";
// 20 .Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Creating an array of famous mountains
const mountains = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Lhotse",
    "Makalu",
    "Cho Oyu",
    "Dhaulagiri",
    "Manaslu",
    "Nanga Parbat",
    "Annapurna"
];
// Printing the list of mountains
console.log("List of Famous Mountains:");
mountains.forEach((mountain, index) => {
    console.log(`${index + 1}. ${mountain}`);
});
