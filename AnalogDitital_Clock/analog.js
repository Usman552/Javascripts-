// Select DOM elements
const toggleButton = document.getElementById("toggleClock");
const digitalClock = document.getElementById("digitalClock");
const analogClock = document.getElementById("analogClock");
const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

let isDigital = false; // Initial state set to Analog

// Function to update digital clock
function DigitalClock() {
    const now = new Date();
    const hours = String(now.getHours() % 12).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

function AnalogClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes * 0.5);
    
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

// Ensure the clock hands start at the correct position
function initAnalogClock() {
    hourHand.style.transform = 'rotate(90deg)';   // Default hour hand position
    minuteHand.style.transform = 'rotate(180deg)';  // Default minute hand position
    secondHand.style.transform = 'rotate(180deg)';  // Default second hand position
}

// Initialize the clock
initAnalogClock();

// Update the clock every second
setInterval(AnalogClock, 1000);

// Call the update function initially for correct start time
AnalogClock();





// Function to toggle clock type
function toggleClock() {
    if (isDigital) {
        digitalClock.style.display = "none";
        analogClock.style.display = "block";
        toggleButton.textContent = "Switch to Digital";
    } else {
        analogClock.style.display = "none";
        digitalClock.style.display = "block";
        toggleButton.textContent = "Switch to Analog";
    }
    isDigital = !isDigital;
}

// Event listener for the toggle button
toggleButton.addEventListener("click", toggleClock);

// Update both clocks continuously
setInterval(() => {
    if (isDigital) {
        DigitalClock();
    } else {
        AnalogClock();
    }
}, 1000);

// Initial setup: Show Analog Clock by default
digitalClock.style.display = "none";
analogClock.style.display = "block";

// Initial update
AnalogClock();
