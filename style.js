function extendNav(leaveMenu, showMenu, nav, sizeH, sizeL){
    let elemNav = document.querySelector(`${nav}`);
    let elemShow = document.querySelector(`${showMenu}`)
    let elemHide = document.querySelector(`${leaveMenu}`)
    elemShow.addEventListener("mouseenter", function(){
        elemNav.style.height = sizeL;
    })
    elemHide.addEventListener("mouseleave", function(){
        elemNav.style.height = sizeH;
    })
}
