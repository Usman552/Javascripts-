const password_field = document.getElementById('password');
const lenght = 12;

const UppperCase = "ABCDEFGHIJLKMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+?><|}{";

const allchars=UppperCase+LowerCase+number+symbol;
 
const genratebtn=document.getElementById('genrte_btn');
genratebtn.addEventListener("click",function generatePass(){
    let password="";
    password+=UppperCase[Math.floor(Math.random()*UppperCase.length)];
    password+=UppperCase[Math.floor(Math.random()*LowerCase.length)];
    password+=UppperCase[Math.floor(Math.random()*number.length)];
    password+=UppperCase[Math.floor(Math.random()*symbol.length)];

    while(lenght  >  password.length){
        password+=allchars[Math.floor(Math.random()*allchars.length)];
    }
    password_field.value=password;
});

const copy=document.getElementById('copy');
copy.addEventListener("click",function copypass(){
    password_field.select();
    document.execCommand("copy");
    alert("Password Copied");
})




