/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let what_1 = ["my homework", "my phone", "my book"];
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
var a = (window.onload = function() {
  //write your code here

  var excuse =
    who[get_num(who.length)] +
    " " +
    what[get_num(what.length)] +
    " " +
    what_1[get_num(what_1.length)] +
    " " +
    when[get_num(when.length)];
  document.getElementById("excuse").innerHTML = excuse;
});
