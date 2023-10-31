"use strict";
const images=["./coree.jpg","./japon.jpg","./thailande.jpg","./chine.jpg","./laos.jpg"]
const img = document.createElement("img")
//img.src = images[5];
document.body.append(img);
window.addEventListener("click", addSlider)
async function addSlider(){
    const sliderJS = await import("./slider.js")
    const slider = sliderJS.create(images);
    document.body.append(slider);
    sliderJS.default();
    window.removeEventListener("click", addSlider);
}