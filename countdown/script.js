const days = document.getElementById('days');
const hours = document.getElementById('hour');
const mints = document.getElementById('minuts');
const seconds = document.getElementById('seconds');

const targetDate = new Date('2025-01-11T00:00:00'); // Target date

function gettime() {
    const now = new Date();
    const diff = targetDate - now; // Difference in milliseconds

    if (diff > 0) {
        const sec = Math.floor(diff / 1000); // Total seconds
        const min = Math.floor(sec / 60); // Total minutes
        const hr = Math.floor(min / 60); // Total hours
        const d = Math.floor(hr / 24); // Total days

        // Remaining hours, minutes, and seconds
        const remHr = hr % 24;
        const remMin = min % 60;
        const remSec = sec % 60;

        days.innerHTML = `${d.toString().padStart(2, '0')} <br> Days`;
        hours.innerHTML = `${remHr.toString().padStart(2, '0')} <br>Hours `;
        mints.innerHTML = `${remMin.toString().padStart(2, '0')} <br> Minuts `;
        seconds.innerHTML =` ${remSec.toString().padStart(2, '0')} <br> Seconds `;
    } else {
        days.innerHTML = 0;
        hours.innerHTML = 0;
        mints.innerHTML = 0;
        seconds.innerHTML = 0;
    }
}

setInterval(gettime, 1000);
