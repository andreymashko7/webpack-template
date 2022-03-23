import "./styles/index.scss";
import $ from "jquery";
import "bootstrap";

const userStock = {
  language: "Js",
};

const user = {
  name: "Andrew",
  ...userStock,
};

$(".block").html("jQuery is working");

console.log(user);
