"use strict"
import chausette, { salut, coucou as c } from "./salutation.js";
salut();
c("Maurice");
chausette();
import * as salutation from "./salutation.js";
console.log(salutation);
salutation.salut();
salutation.coucou("Pierre");
salutation.default();

window.addEventListener("click", hello);

async function hello() {
    const hey = await import("./salutation.js")
    console.log(hey);
    hey.default();
    hey.coucou("Germaine");
    hey.salut();
}