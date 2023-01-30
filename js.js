const contextMenu = document.querySelector(".wrapper"),
shareMenu = contextMenu.querySelector(".share-menu");
const hexcode=document.querySelector("#Hex");
let hex=document.getElementById("Hex");
let input=document.getElementById("input");


window.addEventListener("contextmenu", e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    cmWidth = contextMenu.offsetWidth
    

    if(x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.left = "";
        shareMenu.style.right = "-200px";
    }
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
});


document.addEventListener("click", () => contextMenu.style.visibility = "hidden");

let text;

hex.onclick=function(){
document.getElementById("second").removeAttribute("style")
}
