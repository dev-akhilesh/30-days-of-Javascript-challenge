
    document.getElementById('myParagraph').textContent = 'New Text Content';


    const newDiv = document.createElement('div');
    newDiv.textContent = 'Hello, I am a new div!';
    document.body.appendChild(newDiv);


    const element = document.getElementById('removeMe');
    element.parentNode.removeChild(element);


    document.getElementById('myImage').src = 'new-image.jpg';


    document.getElementById('myButton').addEventListener('click', () => {
        document.getElementById('myParagraph').textContent = 'Text changed!';
    });

    document.getElementById('myBox').addEventListener('mouseover', () => {
        document.getElementById('myBox').style.borderColor = 'red';
    });
