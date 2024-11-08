let nextA = document.getElementById("next");
let a = document.querySelector(".three");
let b = document.querySelector(".three .video")
nextA.onclick = function(){
    showSlider('next');
}

function showSlider(type){
    let liist = document.querySelectorAll(".three .video .vid");
    // let boto = document.querySelectorAll(".scroll .bottom .item");

    if (type == 'next'){
        b.appendChild(liist[0]);
        // c.appendChild(boto[0]);
        a.classList.add("next");
        // aa.classList.add("next  ")
    }
}


document.body.addEventListener("click",(event) => {
    const clickedElement = event.target,
    phos = document.querySelectorAll(".pho");

    if(!clickedElement.classList.contains("pho")){
        phos.forEach((pho) => pho.classList.remove("open"));
        return;
    }

    if(clickedElement.classList.contains("open")){
        clickedElement.classList.remove("open");
        return;
    }

    phos.forEach((pho) => pho.classList.remove("open"));
    clickedElement.classList.add("open");
});


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})