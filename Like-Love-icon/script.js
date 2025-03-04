let arr = [
    {
        story: "https://images.unsplash.com/photo-1733158964430-e77f70f1ccba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://images.unsplash.com/photo-1731943280356-ce3fa8b4c2b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        story: "https://images.unsplash.com/photo-1733158964430-e77f70f1ccba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://images.unsplash.com/photo-1596549839034-b019e058b948?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        story: "https://images.unsplash.com/photo-1733158964430-e77f70f1ccba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://images.unsplash.com/photo-1740560595023-15a496695e15?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        story: "https://images.unsplash.com/photo-1733158964430-e77f70f1ccba?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        dp: "https://images.unsplash.com/photo-1740688055196-a836abca5518?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

const post = document.querySelector(".post");
const love = document.getElementById("icon");
const heart = document.getElementById("love");

post.addEventListener("dblclick", () => {
    love.style.transform = 'translate(-50%, -50%)scale(1)';
    setTimeout(() => {
        love.style.transform = 'translate(-50%, -50%)scale(0)';
    }, 1000);
});

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
});;

let clutter = "";
arr.forEach((el, idx) => {
    clutter += `<div class="story">
    <img id="${idx}" src="${el.dp}" alt="">
</div>`;
});

document.querySelector(".storiyan").innerHTML = clutter;

const storiyan = document.querySelector(".storiyan");
storiyan.addEventListener("click", (dets) => {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].dp})`;

    setTimeout(() => {
        document.querySelector("#full-screen").style.display = "none";
    },3000);
});
