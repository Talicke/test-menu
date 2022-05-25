// console.log('hello');


let elemt = document.querySelector(".navbar-sup");

elemt.addEventListener("mouseenter", function() {
    elemt.style.height = "50vh";
})

elemt.addEventListener("mouseleave", function() {
    elemt.style.height = "30vh";
})




let element = document.querySelector(".navbar-down");

element.addEventListener("mouseenter",function(){
    element.style.height = "50vh";
})

element.addEventListener("mouseleave", function(){
    element.style.height = "30vh";
})
