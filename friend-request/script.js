let istatus = document.querySelector(".status");
let btn = document.querySelector(".accept");
console.log(istatus);

let check=0;

btn.addEventListener("click",()=>{
    if(check==0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Unfriend";
        check=1;
    }
    else{
        istatus.innerHTML = "RSO";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        check=0;
    }

});
