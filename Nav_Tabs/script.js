const tabs = document.querySelectorAll(".tab_btn");
const contents = document.querySelectorAll(".content");
const line = document.querySelector(".line");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        // Remove active class from all tabs
        tabs.forEach((tab) => tab.classList.remove("active"));
        // Add active class to the clicked tab
        tab.classList.add("active");

        // Update line styles
        if (line) {
            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";
        }

        // Update content visibility
        contents.forEach(content => {content.classList.remove("active") });
        contents[index].classList.add("active");
    });
});
