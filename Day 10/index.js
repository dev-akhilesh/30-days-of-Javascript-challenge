// Activity 1: Basic Event Handling
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("textParagraph").textContent = "The text was changed";
})


document.getElementById("toggleImage").addEventListener("dbclick", function () {
    this.style.display = this.style.display === "none" ? 'block' : 'none';
});



// Activity 2: Mouse Events
document.getElementById("hoverElement").addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightblue";
});


document.getElementById('hoverElement').addEventListener('mouseout', function () {
    this.style.backgroundColor = 'lightgray';
});










