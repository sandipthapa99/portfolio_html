function myFunc(){
    var x = document.getElementById("nav-links-active-hide");
    if (x.className === "nav-links-active") {
        x.className = " nav-links-active-hide";
    } else {
        x.className = "nav-links-active";
    }
}