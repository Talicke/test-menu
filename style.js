function extendNav(nav, sizeH, sizeL){
    let elem = document.querySelector(`${nav}`);
    elem.addEventListener("mouseenter", function(){
        elem.style.height = sizeL;
    })
    elem.addEventListener("mouseleave", function(){
        elem.style.height = sizeH;
    })
}
