const textElements = document.querySelectorAll('.text-group');
let textIndex = 0;

function generateText() {
    const textContainer = document.querySelector('.text-container');
    for (let i = 0; i < 10; i++) {
        const textElement = document.createElement('span');
        textElement.classList.add('animated-text', 'color-change');
        textElement.textContent = 'Bussy.vip';
        textContainer.appendChild(textElement);
    }

    for (let i = 0; i < 5; i++) {
        const bouncingTextElement = document.createElement('span');
        bouncingTextElement.classList.add('bouncing-text');
        bouncingTextElement.textContent = 'Bussy.vip';
        textContainer.appendChild(bouncingTextElement);
    }
}

function animateText() {
    [...textElements].forEach((group, index) => {
        group.style.top = `${index * 20}px`;
        group.style.transformOrigin = `center top ${index * 30}px`;
        group.style.animationDelay = `${index / 10}s`;
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

function generateAndAddBouncingText() {
    const bouncingTextElement = document.createElement('span');
    bouncingTextElement.classList.add('bouncing-text');
    bouncingTextElement.textContent = 'Bussy.vip';
    textContainer.appendChild(bouncingTextElement);

    let textPositionX, textPositionY;
    do {
        textPositionX = Math.floor(Math.random() * 80) + 'vw';
        textPositionY = Math.floor(Math.random() * 60) + 'vh';
    } while (textPositionX === lastTextPosition && textPositionY === lastTextPosition);

    bouncingTextElement.style.top = textPositionY;
    bouncingTextElement.style.left = textPositionX;

    lastTextPosition = `${textPositionX}, ${textPositionY}`;
}

function animateBouncingText() {
    const bouncingTextElements = document.querySelectorAll('.bouncing-text');
    bouncingTextElements.forEach((element, index) => {
        element.style.animationDelay = `${index / 10}s`;
    });
}

setInterval(generateAndAddBouncingText, 100);
setInterval(animateBouncingText, 0);

generateAndAddBouncingText();