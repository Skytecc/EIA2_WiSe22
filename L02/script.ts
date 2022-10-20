namespace L02_Event_Inspector {
    console.log("Start");
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        let button: HTMLElement = <HTMLElement>document.getElementById("button");

        document.addEventListener("click",logInfo);
        document.addEventListener("keyup",logInfo);
        //document.addEventListener("mousemove",setInfoBox);

    }

    function logInfo(_event: Event): void {
        console.log(_event);
    }

    function setInfoBox(_event: MouseEvent): void {
        console.log(_event);

    }

    

}