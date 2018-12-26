"use strict";

function calculateC1Speed() {
    var speed = (((weightC1 - weightC2) / (weightC1 + weightC2)) * speedC1) + (((2 * weightC2) / (weightC1 + weightC2)) * speedC2);
    speedC1AfterCollision = speed;

}

function calculateC2Speed() {
    var speed = ((2 * weightC1) / (weightC1 + weightC2)) * speedC1 + (((weightC2 - weightC1) / (weightC1 + weightC2)) * speedC2);
    speedC2AfterCollision = speed;
}

function execute() {
    calculateC1Speed();
    calculateC2Speed();

    circle1AnimationBeforeCollision();
    circle2AnimationBeforeCollision();
    setTimeout(() => {
        circle1AnimationAfterCollision();
        circle2AnimationAfterCollision();
    }, 1000);
}

function changeScaleAccordingToWeigth(c, value) {
    var circle2;
    if (c == "circle1") {
        circle2 = document.getElementById("circle2");
    }
    else {
        circle2 = document.getElementById("circle1");
    }
    var circle = document.getElementById(c);
    var coefficient = (10 * parseInt(value)) + 70;
    var currentWidth = circle.offsetWidth;
    var currentHeight = circle.offsetHeight;
    circle.animate(
        { height: ["" + currentHeight + "px", "" + coefficient + "px"] }
        , {
            duration: 500
        });
    circle.style.height = "" + coefficient + "px";
    circle.animate(
        { width: ["" + currentWidth + "px", "" + coefficient + "px"] }
        , {
            duration: 500
        });
    circle.style.width = "" + coefficient + "px";

    var heihtDifference = coefficient - circle2.offsetHeight;
    console.log(heihtDifference);
    circle.style.marginBottom = "0px";
    circle2.style.marginBottom = "0px";
    if (heihtDifference < 0) {
        circle.style.marginBottom = (Math.abs(heihtDifference / 2)) + "px";
    }
    else {
        circle2.style.marginBottom = (heihtDifference / 2) + "px";
    }

}
function circle1AnimationBeforeCollision() {
    var totalSpeed = speedC1 + (-1 * speedC2);
    rangeC1 = Math.floor((750 / totalSpeed) * speedC1);
    var circle = document.getElementById("circle1");

    circle.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(' + rangeC1 + 'px)' },
    ], {
            duration: 1000

        });
    
}

function circle1AnimationAfterCollision() {
    var circle = document.getElementById("circle1");
    circle.animate([
        { transform: 'translateX(' + rangeC1 + 'px)' },
        { transform: 'translateX(0px)' },
    ], {
            duration: Math.floor(Math.abs((speedC2AfterCollision) / rangeC2) * 100000)
        });
        circle.animate(
        { background: ["grey", "black"] }
        , {
            duration: Math.floor(Math.abs((speedC2AfterCollision) / rangeC2) * 100000)
        });
}

function circle2AnimationBeforeCollision() {
    var totalSpeed = speedC1 + (-1 * speedC2);
    rangeC2 = Math.floor((750 / totalSpeed) * speedC2);
    var circle = document.getElementById("circle2");
    circle.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(' + rangeC2 + 'px)' },
    ], {
            duration: 1000
        });
    
}
function circle2AnimationAfterCollision() {
    var circle = document.getElementById("circle2");
    circle.animate([
        { transform: 'translateX(' + rangeC2 + 'px)' },
        { transform: 'translateX(0px)' },
    ], {
            duration: Math.floor(Math.abs((speedC1AfterCollision) / rangeC1) * 100000)
        });
        circle.animate(
        { background: ["black", "grey"] }
        , {
            duration: Math.floor(Math.abs((speedC1AfterCollision) / rangeC1) * 100000)
        });
}

function setcircle2Position() {
    var circle1 = document.getElementById("circle1");
    var circle2 = document.getElementById("circle2");

    var c1Width = circle1.offsetWidth;
    circle2.style.marginLeft = 700 + "px";
}

function setRangeValues(value, p) {
    var paragp = document.getElementById(p);
    paragp.innerHTML = "&nbsp" + value + "";

    switch (p) {
        case "weightC1":
            weightC1 = parseInt(value);
            changeScaleAccordingToWeigth("circle1", value);
            break;
        case "weightC2":
            weightC2 = parseInt(value);
            changeScaleAccordingToWeigth("circle2", value);
            break;
        case "speedC1":
            speedC1 = parseInt(value);
            break;
        case "speedC2":
            speedC2 = parseInt(-value);
            break;
        default:
            console.log("there is not matches");
    }
}