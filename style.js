console.log('hello');


let elemt = document.querySelector(".navbar-sup");
console.log(elemt);



elemt.addEventListener("mouseenter", function() {
    elemt.style.height = "50vh";
})

elemt.addEventListener("mouseleave", function() {
    elemt.style.height = "30vh";
})