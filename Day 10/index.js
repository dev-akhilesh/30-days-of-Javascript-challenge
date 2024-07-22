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



// Activity 3: Keyboard Events
document.getElementById('inputField').addEventListener('keydown', function (event) {
    console.log(`Key pressed: ${event.key}`);
});


document.getElementById('inputField').addEventListener('keyup', function () {
    document.getElementById('displayParagraph').textContent = this.value;
});



// Activity 4: Form Events
document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});


document.getElementById('dropdown').addEventListener('change', function () {
    document.getElementById('selectedValue').textContent = `Selected: ${this.value}`;
});



