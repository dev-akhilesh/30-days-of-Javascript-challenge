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
const element = document.getElementById('removeMe');
element.parentNode.removeChild(element);


const list = document.getElementById('myList');
list.removeChild(list.lastElementChild);