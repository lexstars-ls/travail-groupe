var sakuras = document.getElementById("sakuras");
var sabliers = document.getElementById("sabliers");
var bg = document.getElementById("container");

sakuras.addEventListener("mouseenter", function (e) {
    bg.style.background = 'url(img/sakuras.jpg)';
});

sakuras.addEventListener("mouseleave", function (e) {
    bg.style.background = "#0f0f0f";
});
    
sabliers.addEventListener("mouseenter", function (e) {
    bg.style.background = 'url(img/sabliers.jpeg)';
});

sabliers.addEventListener("mouseleave", function (e) {
    bg.style.background = "#0f0f0f";
});
    