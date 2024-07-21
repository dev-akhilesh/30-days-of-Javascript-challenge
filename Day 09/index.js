// Activity 1: Selecting and Manipulating Elements
document.getElementById("myParagraph").textContent = "Changed Text";


document.querySelector(".myClass").style.backgroundColor = "lightblue";



// Activity 2: Creating and Appending Elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, I am a new div!';
document.body.appendChild(newDiv);


const newLi = document.createElement('li');
newLi.textContent = 'Item 3';
document.getElementById('myList').appendChild(newLi);



// Activity 3: Removing Elements
const element1 = document.getElementById('removeMe');
element1.parentNode.removeChild(element1);


const list = document.getElementById('myList');
list.removeChild(list.lastElementChild);



// Activity 4: Modifying Attributes and Classes
document.getElementById('myImage').src = 'new-image.jpg';


const element = document.getElementById('myElement');
element.classList.add('highlight');

// After some time, remove the class
setTimeout(() => {
    element.classList.remove('highlight');
}, 2000);



// Activity 5: Event Handling
document.getElementById('myButton').addEventListener('click', () => {
    document.getElementById('myParagraph').textContent = 'Text Chanaged!';
});


document.getElementById('myBox').addEventListener('mouseover', () => {
    document.getElementById('myBox').style.borderColor = 'red';
});

