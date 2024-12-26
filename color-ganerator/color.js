const btn=document.getElementById('button');
const color=document.querySelector(".color");

const clr="1234567890ABCDEF";
btn.addEventListener("click",function(){
    let hex="#";
    for(i=0;i<6;i++){
        hex += clr[Math.floor(Math.random() * clr.length)];
    }
    color.innerHTML=hex;
    document.body.style.backgroundColor=hex;
})


