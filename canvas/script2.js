"use strict";

let painting = false, 

color = "black", size = 10,
undoList = [], lastAction = [], redoList = [];

const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function startPosition(e){
    painting = true;
    draw(e);
}

function finishedPosition(){
    painting = false;
    ctx.beginPath();
    undoList.push(lastAction);
    lastAction = [];
}
function draw(e){
    if(!painting) return;
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
    ctx.lineCap = "round";
    let mouse = getMousePos(e);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    lastAction.push({
        x: mouse.x,
        y: mouse.y,
        color: color,
        size: size
    })
}
function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
function redraw(tab){
    tab.forEach(action =>{
        ctx.beginPath();
        action.forEach(move=>{
            ctx.strokeStyle = move.color;
            ctx.lineWidth = move.size;
            ctx.lineTo(move.x, move.y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(move.x, move.y);
        })
    })
    ctx.beginPath();
}
function keyboard(e){
    e.preventDefault();
// touche clavier 
    switch(e.key){
        case "s":
            save();
            break;
        case "l":
            load();
            break;
        case "c":
            chooseColor();
            break;
        case "z":
            undo();
            break;
        case "y":
            redo();
            break;
        case "+":
            size++;
            console.log(size);
            break;
        case "-":
            size = size<=1?1:--size;
            console.log(size);
            break;
    }
}
function load(){
    
    let input = document.createElement("input");
    
    input.setAttribute("type", "file");
    input.click();
    input.oninput = function(e){
        let reader = new FileReader();
        reader.onload = function(event){
            let img = new Image();
            img.onload = function(){
                ctx.clearRect(0,0,canvas.width, canvas.height);
                ctx.drawImage(img, 0,0);
            }
            
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }
}
function save(){

    let png = canvas.toDataURL("image/png");    png.replace("image/png", "application/octet-stream");    let link = document.createElement("a");    link.setAttribute("download", "SauvegardeCanvas.png");    link.setAttribute("href", png);    link.click();
}
function chooseColor(){    let input = document.createElement("input");    input.setAttribute("type", "color");
    input.click();
    input.oninput = function(e){
        color = e.target.value;
    }
}
function undo(){
    if(!undoList.length)return;
    let redoAction = undoList.pop();
    redoList.push(redoAction);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    redraw(undoList);
}
function redo(){
    if(!redoList.length)return;
    let redoAction = redoList.pop();
    undoList.push(redoAction);
    redraw([redoAction]);
}
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);
document.addEventListener("keypress", keyboard);