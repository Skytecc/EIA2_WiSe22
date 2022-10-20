"use strict";
var L02_Event_Inspector;
(function (L02_Event_Inspector) {
    console.log("Start");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let button = document.getElementById("button");
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function logInfo(_event) {
        console.log(_event);
    }
    function setInfoBox(_event) {
        console.log(_event);
    }
})(L02_Event_Inspector || (L02_Event_Inspector = {}));
//# sourceMappingURL=script.js.map