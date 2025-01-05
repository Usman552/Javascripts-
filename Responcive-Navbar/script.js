const bars=document.querySelector('.bars');
const ul=document.querySelector('ul');

bars.addEventListener("click",()=>{
    ul.classList.toggle('bar_active');
    let bar_child= bars.firstElementChild;
    if(ul.classList.contains('bar_active')){
        bar_child.classList.replace('fa-bars','fa-xmark');
    }
    else{
        bar_child.classList.replace('fa-xmark','fa-bars');
      }
})

