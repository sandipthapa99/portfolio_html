// const toggleBtn = document.getElementsByClassName('toggle_btn');


function myFunc(){
    var x = document.getElementById("navbar");
    if (x.className === "nav_ul") {
        x.className += " nav_ul_active";
    } else {
        x.className = "nav_ul";
    }
}