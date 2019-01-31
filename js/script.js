"use strict";

let montitre = document.getElementById("titrePage");
let monbouton = document.getElementById("monBouton");
let saisie = document.getElementById("monInput");




monbouton.addEventListener("click", function() {
    console.log("Clic !!!!");

    montitre.innerHTML = saisie.value;
});



