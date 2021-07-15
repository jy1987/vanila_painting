const canvas=document.getElementById("jsCanvas");
const ctx= canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementsByClassName("jsMode");


canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
ctx.fillStyle="blue";

let painting=false;
let filling=false;


function stopPainting(){
    painting=false;
}

function startPainting(){
    painting=true;
}

function onMouseMove(event) {
    const x=event.offsetX;
    const y=event.offsetY;
    if (painting==true) {
        ctx.lineTo(x,y);
        ctx.stroke();

    } else {
        ctx.beginPath();
       
    }
   
}

function onMouseReEnter(event) {
    const x=event.offsetX;
    const y=event.offsetY;
    
    ctx.beginPath(x,y);
    
}

function changeMode(){
    if (filling==true){
        filling=false;
        mode[0].innerText="Fill";
    } else {
        filling=true;
        mode[0].innerText="Paint";
    }
    console.log(filling);
}


if (mode){
    mode[0].addEventListener("click", changeMode);
}

function changeColor(event){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle=color;
    ctx.fillStyle=color;
}

Array.from(colors).forEach(color=>color.addEventListener("click", changeColor))

function fillColor(){
    if (filling==true){ 
        ctx.fillRect(0,0,canvas.width,canvas.height);}
   
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseenter", onMouseReEnter);
    canvas.addEventListener("click", fillColor);
}

function changeInput(event){
    const width=event.target.value;
    ctx.lineWidth=width;
}

if (range){
    range.addEventListener("input", changeInput);
}

