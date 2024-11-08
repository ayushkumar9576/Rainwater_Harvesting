let lefts = document.querySelector(".left");
let rights = document.querySelector(".right");
let movins = document.querySelector(".moving");

function aa(){
    lefts.classList.remove("sign-left");
    rights.classList.add("sign-right");
    movins.classList.add("signin");
    movins.classList.remove("signup");

}

function bb(){
    lefts.classList.add("sign-left");
    rights.classList.remove("sign-right");
    movins.classList.remove("signin");
    movins.classList.add("signup");

}