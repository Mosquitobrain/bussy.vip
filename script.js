
// Get all text elements and store them in an array
const textElements = document.querySelectorAll('.text-group');
let textIndex = 0;

function generateText() {
  // Create a container element for the text elements
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    // Loop through each text group and create a span element for each letter
    for (let i = 0; i < textElements.length; i++) {
        const textGroup = textElements[i];
        const letters = textGroup.innerHTML.split('');

        for (let j = 0; j < letters.length; j++) {
            const letter = letters[j];
            const spanElement = document.createElement('span');
            spanElement.classList.add('animated-text', 'color-change');
            spanElement.innerHTML = letter;
            textContainer.appendChild(spanElement);
        }
    }

    // Add the container element to the DOM
    document.body.appendChild(textContainer);
}

function animateText() {
    [...textElements].forEach((group, index) => {
        group.style.top = `${index * 20}px`;
        group.style.transformOrigin = `center top ${index * 30}px`;
        group.style.animationDelay = `${index / 10}s`;
    });
}

function generateAndAddBouncingText() {
    // Create a bouncing text element and add it to the DOM
    const bouncingTextElement = document.createElement('span');
    bouncingTextElement.classList.add('bouncing-text');
    bouncingTextElement.innerHTML = 'Bussy.vip';

    // Generate a random color for the text element
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    const randomColorIndex = Math.floor(Math.random() * 3);
    bouncingTextElement.style.color = colors[randomColorIndex];

    document.body.appendChild(bouncingTextElement);
}

function animateBouncingText() {
    // Get all bouncing text elements and loop through them
    const bouncingTextElements = document.querySelectorAll('.bouncing-text');
    bouncingTextElements.forEach((element, index) => {
        element.style.animationDelay = `${index / 10}s`;
    });
}

generateText();
animateText();

setInterval(() => {
    textIndex++;
    if (textIndex > 9) {
        textIndex = 0;
    }
}, 500);
const textContainer = document.querySelector('.text-container');
let lastTextPosition = null;

generateAndAddBouncingText();
animateBouncingText();

setInterval(generateAndAddBouncingText, 100);
setInterval(animateBouncingText, 0);
