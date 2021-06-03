var fltr = document.getElementsByClassName("filter");
var i;

for (i = 0; i < fltr.length; i++) {
    fltr[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var menu__display = this.nextElementSibling;
        if (menu__display.style.display === "block") {
            menu__display.style.display = "none";
        } else {
            menu__display.style.display = "block";
        }
    });
}