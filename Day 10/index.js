// Activity 1: Basic Event Handling
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("textParagraph").textContent = "The text was changed";
})


document.getElementById("toggleImage").addEventListener("dbclick", function () {
    this.style.display = this.style.display === "none" ? 'block' : 'none';
});