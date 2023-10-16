// Constants for query selector
const customColorButton = document.getElementById('customColorButton');
const randomColorButton = document.getElementById('randomColorButton');
const selectTag = document.getElementById('imageSelect');
const studentIdTag = document.getElementById('studentId');
const imageDisplay = document.getElementById('imageDisplay');
const customNumber = document.getElementById('customNumber');

// Array to store image src locations
const imageSrcArray = ['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg'];

// Function to change bg color from user input and add student id
function changeCustomColor() {
    const inputValue = parseInt(customNumber.value);
    document.body.style.backgroundColor = determineColor(inputValue);
    studentIdTag.innerText = "200543616"; // Replace with actual student ID
}

// Function to change bg color from random no.
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    document.body.style.backgroundColor = determineColor(randomValue);
}

// Function to generate options for select list
function addList() {
    // Clearing previous options
    selectTag.innerHTML = "<option value=''>Please choose…</option>";
    imageSrcArray.forEach((src, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.innerText = `Image ${index + 1}`;
        selectTag.appendChild(option);
    });
}

// Function to change image
function changeImage() {
    const selectedIndex = selectTag.value;
    if (selectedIndex !== "") {
        imageDisplay.src = imageSrcArray[selectedIndex];
    }
}

// Function to determine color based on input value
function determineColor(value) {
    if (value < 0 || value > 100) return 'red';
    if (value <= 20) return 'green';
    if (value <= 40) return 'blue';
    if (value <= 60) return 'orange';
    if (value <= 80) return 'purple';
    return 'yellow';
}

// Event listeners for on click event of buttons and select
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);
selectTag.addEventListener('click', addList);

// Event listeners for on change event of select
selectTag.addEventListener('change', changeImage);
