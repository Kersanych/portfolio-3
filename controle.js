var icones = [document.getElementById("wpp"), document.getElementById("instagram"), document.getElementById("github"), document.getElementById("linkedn")]
var logo = [document.getElementById("wpplogo"), document.getElementById("instagramlogo"), document.getElementById("githublogo"), document.getElementById("linkedinlogo")];
var classe = document.getElementById("oculos");

function hover() {
    icones[0].addEventListener('mouseover', function() {
        console.log('ta pressionando');
        logo[0].classList.add("press");
    });
    icones[0].addEventListener('mouseout', function() {
        console.log('saiu');
        logo[0].classList.remove("press");
    });
    icones[1].addEventListener('mouseover', function() {
        console.log('ta pressionando');
        logo[1].classList.add("press");
    });
    icones[1].addEventListener('mouseout', function() {
        console.log('saiu');
        logo[1].classList.remove("press");
    });
    icones[2].addEventListener('mouseover', function() {
        console.log('ta pressionando');
        logo[2].classList.add("press");
        classe.classList.add("oc");
    });
    icones[2].addEventListener('mouseout', function() {
        console.log('saiu');
        logo[2].classList.remove("press");
        classe.classList.remove("oc");
    });
    icones[3].addEventListener('mouseover', function() {
        console.log('ta pressionando');
        logo[3].classList.add("press");
    });
    icones[3].addEventListener('mouseout', function() {
        console.log('saiu');
        logo[3].classList.remove("press");
    });
};

function linkar() {
    icones[0].onclick = function() {
        window.open('https://api.whatsapp.com/send?phone=996704502207');
    };
    icones[1].onclick = function() {
        window.open('https://www.instagram.com/bass.xar/');
    };
    icones[2].onclick = function() {
        window.open('https://github.com/Kersanych');
    };
    
};
hover();
linkar();