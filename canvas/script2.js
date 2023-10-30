"use srtict"
let paiting = false;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);
function starPosition(e) {
    painting = true
    draw(e)
}
function finishedPosition() {
    paiting = false;
    ctx.beginPath();
    undoList.push(lastAction);
    lastAction = [];
}
function draw(e) {
    if (!paiting) return;
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
function redraw(tab) {
    tab.forEach(action => {
        ctx.beginPath();
        action.forEach(move => {
            ctx.strokeStyle = move.color;
            ctx.lineWidth = move.size;
            ctx.lineTo(move.x, move.y)
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(move.x, move.y);
        })
    });
    ctx.beginPath();
}
function keyboard(e) {
    e.preventDefault()
    switch (e.key) {
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
            break:
        case "y":
            redo();
            break;
        case "+":
            size++;
            console.log(size);
            break;
        case "-"
            size = size <= 1 ? 1 : --size;
            console.log(size);
            break;
    }
}
