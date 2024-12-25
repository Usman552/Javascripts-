const hour = document.getElementById('hour');
const mint = document.getElementById('mint');
const sec = document.getElementById('sec');
const analog = document.getElementById('analogClock'); // Corrected

function updateAnalogClock() {
    let date = new Date();

    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hourDeg = hours * 30 + minutes / 2; // Smooth transition for the hour hand
    const mintDeg = minutes * 6;
    const secDeg = seconds * 6;

    hour.style.transform = `rotate(${hourDeg}deg)`;
    mint.style.transform = `rotate(${mintDeg}deg)`;
    sec.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(updateAnalogClock, 1000);
updateAnalogClock();

const hr = document.getElementById('hours');
const min = document.getElementById('minutes');
const second = document.getElementById('seconds');
const digital = document.getElementById('digitalClock'); // Corrected

function updateDigitalClock() {
    const now = new Date();

    let h = now.getHours() % 12; // 12-hour format
    let m = now.getMinutes();
    let s = now.getSeconds();

    hr.innerHTML = h.toString().padStart(2, '0'); // Add leading zero
    min.innerHTML = m.toString().padStart(2, '0');
    second.innerHTML = s.toString().padStart(2, '0');
}

setInterval(updateDigitalClock, 1000);
updateDigitalClock();

const togglebtn = document.getElementById('Toggle-btn');
togglebtn.addEventListener("click", toggleClock);

function toggleClock() {
    if (analog.style.visibility === "hidden") {
        analog.style.visibility = "visible";
        analog.style.opacity = "1";
        digital.style.visibility = "hidden";
        digital.style.opacity = "0";
        togglebtn.innerText = "Switch To Digital";
    } else {
        analog.style.visibility = "hidden";
        analog.style.opacity = "0";
        digital.style.visibility = "visible";
        digital.style.opacity = "1";
        togglebtn.innerText = "Switch To Analog";
    }
}
