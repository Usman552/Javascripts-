// HTML Elements ko select karna
const input = document.getElementById('field');
const btn = document.getElementById('add');
const listitem = document.getElementById('listitem');

// Button click event
btn.addEventListener("click", function () {
    if (input.value === '') {
        alert("Must fill the input field"); 
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value; 
        li.addEventListener("click", function () {
            listitem.removeChild(li); 
            savedata(); 
        });

        listitem.appendChild(li); 
        input.value = "";
        savedata();
    }
});

function savedata() {
    localStorage.setItem("data", listitem.innerHTML); 
}

function loaddata() {
    const saved = localStorage.getItem("data"); 
    if (saved) {
        listitem.innerHTML = saved;

        const items = listitem.querySelectorAll("li");
        items.forEach((li) => {
            li.addEventListener("click", function () {
                listitem.removeChild(li); 
                savedata(); 
            });
        });
    }
}

// Call loaddata() when the page loads
loaddata();
