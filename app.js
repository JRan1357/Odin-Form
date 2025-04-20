// SVG STUFF



const svgCanvas = document.getElementById('svgCanvas');

// Function to generate a random integer between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random color from white to orange
function getRandomColor() {
    const r = getRandomInt(200, 255); // Red component (200-255 for orange hues)
    const g = getRandomInt(200, 150); // Green component (down to 150 for orange hues)
    const b = getRandomInt(150, 0); // Blue component (down to 0 for orange hues)
    return `rgb(${r}, ${g}, ${b})`;
}

// Generate 50 circles with random sizes, colors, and animations
for (let i = 0; i < 75; i++) {
    const radius = getRandomInt(1, 8); // Random radius between 2px and 8px
    const xPosition = getRandomInt(0, 100); // Random x position (percentage)
    const animationDelay = getRandomInt(0, 40); // Random delay for animation
    const animationDuration = (20 - radius) * 4; // Slow down all by 8x

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    circle.setAttribute("cx", `${xPosition}%`); // Random x position
    circle.setAttribute("cy", "-12"); // Start position off the screen
    circle.setAttribute("r", radius); // Random radius
    circle.setAttribute("fill", getRandomColor()); // Random color

    // Set random animation duration and delay
    circle.style.animationDuration = `${animationDuration}s`;
    circle.style.animationDelay = `${animationDelay}s`;

    circle.classList.add("falling-circle");
    svgCanvas.appendChild(circle);
}


// Form Stuff

const phoneInput = document.getElementById('#phone');

phoneInput.addEventListener('input', (e) => {
    console.log("event listener fired")
    let value = e.target.value.replace(/[^0-9]/g, '');

    if (value.length > 4) {
        value = value.slice(0, 4) + '-' + value.slice(4);
    }
    e.target.value = value;
})
