let box=document.querySelector(".box");
let love=document.getElementById("icon");
console.log(love)
box.addEventListener("dblclick",()=>{
    love.style.transform='translate(-50%, -50%)scale(1)';
    setTimeout(()=>{
        love.style.transform='translate(-50%, -50%)scale(0)';
    },1000)
})