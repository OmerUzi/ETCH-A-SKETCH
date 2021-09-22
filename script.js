const body = document.querySelector("body");
const button = document.querySelector("button");
let container;

createFlexbox(16);
button.addEventListener("click" , buttonFunction);

function createFlexbox(x)
{   
    container = document.createElement("div")
    container.id = "container";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "100vw";

    let square;
    let side = 100/x;
    side.toString();
    side = side + "vw";

    for(let i = 0; i < x*x; i++){
        square = document.createElement("div");
        square.style.width = side;
        square.style.height = side;
        square.id = "div" + i.toString();
        square.className = "square-divs";
        container.appendChild(square);
        square.addEventListener("mouseover",(e) => e.target.classList.add("hover-onced"));
    }

    body.appendChild(container);

}

function buttonFunction()
{
    let divs = document.querySelectorAll("div.hover-onced");
    divs.forEach(div => {
    div.classList.remove("hover-onced");
    });
    let text = prompt('how much you want the grid?\n(enter number between 1-100?');
    while (text>100 || text < 1){
        text = prompt('number is not between 1-100?');
    }
    text= parseInt(text);
    
    container = document.querySelector('#container')
    body.removeChild(container);
    createFlexbox(text);

}



