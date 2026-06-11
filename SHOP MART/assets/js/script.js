// UP BUTTON

let upButton = document.getElementById("upButton");

upButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});