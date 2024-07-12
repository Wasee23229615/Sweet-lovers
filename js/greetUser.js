
function greetUser() {
  const name = prompt("Please enter your name:", "Guest");
  if (name != null) {
    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome to our Frozen Yogurt Shop!";
  }
}
