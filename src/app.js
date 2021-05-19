/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let where = ["my homework", "my phone", "my book"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
function get_num(length) {
  return Math.floor(Math.random() * length);
}

function generateExcuse(arr1, arr2, arr3, arr4) {
  return [
    arr1[get_num(arr1.length)], 
    arr2[get_num(arr2.length)],
    arr3[get_num(arr3.length)],
    arr4[get_num(arr4.length)]
  ].join(" ");
}

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = generateExcuse(who, what, where, when);
};
