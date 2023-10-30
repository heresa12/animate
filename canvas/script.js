"use strict"
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
function resize() {
    const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const size = document.body.getBoundingClientRect();
    canvas.width = size.width;
    canvas.height = size.height;
    ctx.putImageData(snapshot, 0, 0);
}
resize();
window.addEventListener("resize", resize);
ctx.fillRect(50, 50, 150, 25);
ctx.strokeRect(100, 150, 25, 150);
ctx.fillStyle = "rgba(156,78,94,0.5)"
ctx.strokeStyle = "blue";
ctx.fillRect(126, 234, 90, 287);
ctx.strokeRect(126, 234, 90, 287);

/*ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(345, 100);
ctx.lineTo(345, 300);
ctx.lineTo(495, 250);
ctx.lineTo(445, 100);
ctx.closePath();
ctx.strokeStyle = "green";
ctx.fillStyle = "yellow";
ctx.lineWidth = 8;
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(459, 588, 42, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.arc(259, 288, 42, 0, 2.5, true);
ctx.stroke();
ctx.fill();

ctx.clearRect(50, 60, 170, 180);

let x = 100, y = 100, vv = 5, vh = 5, r = 80;
cercle();
function cercle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    if (x + r > canvas.width||x-r<0)
        vh = -vh;
    if (y + r > canvas.height||y-r<0)
        vv = -vv;

    x += vh;
    y += vv;
    requestAnimationFrame(cercle);
}*/

let img = new Image();
img.src = "panda.png";
img.onload = () => {
    ctx.drawImage(img, 50, 250, 100, 100)
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height)
}
ctx.lineWidth = 1;
ctx.font = "82px serif";
ctx.strokeText("coucou", 500, 500);
ctx.fillText("coucou", 500, 300);
ctx.textAlign = "center";
ctx.fillStyle = "purple";
ctx.fillText("coucou", 500, 100, 50)

ctx.lineWidth=16;

ctx.beginPath();
ctx.lineCap="round";
ctx.lineCap(700,40);
ctx.lineTo(700,400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap="square";
ctx.lineCap(700,40);
ctx.lineTo(700,400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap="butt";
ctx.lineCap(700,40);
ctx.lineTo(700,400);
ctx.stroke();
snapshot=ctx.getImageData(0,0,canvas.width,canvas.height)