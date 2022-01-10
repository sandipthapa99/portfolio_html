function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav_wrapper") {
      x.className += " responsive";
    } else {
      x.className = "nav_wrapper";
    }
  }