let box=document.querySelector(".box");
let love=document.getElementById("icon");
let heart=document.getElementById("love");

box.addEventListener("dblclick",()=>{
    love.style.transform='translate(-50%, -50%)scale(1)';
    setTimeout(()=>{
        love.style.transform='translate(-50%, -50%)scale(0)';
    },1000)
})
let check=0;
heart.addEventListener("click",()=>{
    if(check==0){
        heart.className="ri-heart-3-fill";
    heart.style.color="red";
        check=1;
    }
    else{
        heart.className="ri-heart-3-line";
        heart.style.color="black";
        check=0;
    }
});