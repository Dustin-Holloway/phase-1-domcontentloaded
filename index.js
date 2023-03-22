document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM has loaded");
  const element = document.getElementById("text");
  element.textContent = "This is really cool!";
}); // Your code goes here

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
