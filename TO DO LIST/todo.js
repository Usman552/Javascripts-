const input = document.getElementById('field');
const btn = document.getElementById('add');
const listitem = document.getElementById('listitem');

btn.addEventListener("click", function () {
    if (input.value === '') {
        alert("Must fill the input field");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listitem.appendChild(li);
        input.value = "";
        
        li.addEventListener("click", function () {
            listitem.removeChild(li);
            savedata();
        });

        savedata(); 
    }
});

function savedata() {
    localStorage.setItem("data", listitem.innerHTML);
}

function showitem() {
    listitem.innerHTML = localStorage.getItem("data");
    const allItems = listitem.querySelectorAll("li");
    allItems.forEach(item => {
    
        item.addEventListener("click", function () {
            listitem.removeChild(item);
            savedata();
        });
    });
}

showitem();
