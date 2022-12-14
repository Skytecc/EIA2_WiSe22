"use strict";
var L02_Event_Inspector;
(function (L02_Event_Inspector) {
    console.log("Start");
    let infoString;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let body = document.querySelector("body");
        let button = document.getElementById("button");
        let div0 = document.getElementById("div0");
        let div1 = document.getElementById("div1");
        button.addEventListener("click", customEvent);
        document.addEventListener("customEventWorking", showCustomEvent);
        body.addEventListener("click", logInfo);
        document.addEventListener("click", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        document.addEventListener("mousemove", setInfoBox);
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    function setInfoBox(_event) {
        //console.log(_event);
        let xPosition = _event.clientX;
        let yPostion = _event.clientY;
        let coor = "(" + "x" + String(xPosition) + ";" + String(yPostion) + "y" + ")" + "<br>" + "Target Object: " + "<br>" + _event.target;
        //console.log(xPosition + yPostion);
        let infoBox = document.getElementById("span1");
        infoString = coor;
        infoBox.innerHTML = infoString;
        infoBox.style.top = yPostion + 10 + "px";
        infoBox.style.left = xPosition + 10 + "px";
    }
    function customEvent(_event) {
        let event = new CustomEvent("customEventWorking", { bubbles: true });
        _event.target?.dispatchEvent(event);
    }
    function showCustomEvent(_event) {
        console.log(_event);
    }
})(L02_Event_Inspector || (L02_Event_Inspector = {}));
//# sourceMappingURL=script.js.map