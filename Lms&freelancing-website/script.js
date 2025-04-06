document.addEventListener("DOMContentLoaded", function () {
    // Selectors
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const testimonialsContainer = document.getElementById('testimonials-container');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
  

    // Function to toggle mobile menu
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Dark Mode Toggle
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");

        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

        darkModeToggle.innerHTML = isDarkMode ? "☀️" : "🌙";
        renderTestimonials(); 
    }

    // Load dark mode preference from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.innerHTML = "☀️";
    } else {
        darkModeToggle.innerHTML = "🌙";
    }

    darkModeToggle.addEventListener("click", toggleDarkMode);

    // Testimonial Data
    const testimonials = [
        {
            name: "John Doe",
            course: "JavaScript Basics",
            message: "This course was excellent! I feel confident using JavaScript now.",
        },
        {
            name: "Jane Smith",
            course: "Advanced CSS",
            message: "Great course! The examples were very helpful, and I learned a lot about CSS.",
        },
        {
            name: "Michael Johnson",
            course: "React for Beginners",
            message: "Amazing course! The instructor explained React concepts clearly, and I built my first app.",
        },
    ];

    let currentTestimonialIndex = 0; 

    // Function to render a single testimonial
    function renderTestimonial(index) {
        testimonialsContainer.innerHTML = ''; // Clear existing testimonial
        const testimonial = testimonials[index];
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonial');
        
        testimonialCard.innerHTML = `
            <div class="name">${testimonial.name}</div>
            <div class="course">${testimonial.course}</div>
            <div class="message">${testimonial.message}</div>
        `;
        
        testimonialsContainer.appendChild(testimonialCard);
    }

    // Function to handle the "Next" button
    nextButton.addEventListener('click', function () {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        renderTestimonial(currentTestimonialIndex);
    });

    // Function to handle the "Previous" button
    prevButton.addEventListener('click', function () {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        renderTestimonial(currentTestimonialIndex);
    });

    // Initial loads
    renderTestimonial(currentTestimonialIndex);
});

// courses Section

const container = document.getElementById('courses');
const container2 = document.getElementById('courses2');
const buttons = document.querySelectorAll('.toggle-btn');

function setView(view) {
  container.className = `courses-container ${view}-view`;
  container2.className = `courses-container ${view}-view`;

  buttons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.toggle-btn[onclick="setView('${view}')"]`).classList.add('active');
}
function showSection(type) {
    document.getElementById('client').classList.remove('active');
    document.getElementById('student').classList.remove('active');
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(type).classList.add('active');
    event.target.classList.add('active');
  }
