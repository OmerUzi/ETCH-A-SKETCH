function createFlexbox() 
{
    const container = document.createElement("div");
    container.id = "container";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";

    let square;
    for(let i = 0; i < 256; i++){
        square = document.createElement("div");
        square.style.width = "6vw";
        square.style.height = "6vw";
        square.id = "div" + i.toString();
        square.className = "square-divs";
        container.appendChild(square);
        square.addEventListener("mouseover",(e) => e.target.classList.add("hover-onced"));
    }

    const body = document.querySelector("body");
    body.appendChild(container);

}
function clearAll()
{
    let divs = document.querySelectorAll("div.hover-onced");
    divs.forEach(div => {
    div.classList.remove("hover-onced");
  });
}
createFlexbox();
const button = document.querySelector("button");
button.addEventListener("click" , clearAll);
 



//square.style.display = "inline-block";