namespace L02_Event_Inspector {
    console.log("Start");
    let infoString: string;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        let button: HTMLElement = <HTMLElement>document.getElementById("button");
        let div0: HTMLElement = <HTMLElement>document.getElementById("div0");
        let div1: HTMLElement = <HTMLElement>document.getElementById("div1");
        //let span1: HTMLElement = <HTMLElement>document.getElementById("span1");

        document.addEventListener("click",logInfo);
        div0.addEventListener("click",logInfo);
        div1.addEventListener("click",logInfo);

        document.addEventListener("keyup",logInfo);
        div0.addEventListener("keyup",logInfo);
        div1.addEventListener("keyup",logInfo);

        document.addEventListener("mousemove",setInfoBox);

    }

    function logInfo(_event: Event): void {
        console.log(_event);
    }

    function setInfoBox(_event: MouseEvent): void {
        //console.log(_event);
        let x: number = _event.offsetX;
        let y: number = _event.offsetY;

        let xPosition: number = _event.clientX;
        let yPostion: number = _event.clientY;
        let coor: string = "(" + String(yPostion) + String(xPosition) + ")";

        //console.log(xPosition + yPostion);
        let info: HTMLElement = <HTMLElement>_event.target;
        let infoBox: HTMLSpanElement = document.createElement("span");

        info.appendChild(infoBox);

        infoString = coor; 

        infoBox.textContent = infoString;
        infoBox.style.top =  y + "px";
        infoBox.style.left =  x + "px";

        info.addEventListener("mousemove", removePosition);

    }

    function removePosition(_event: MouseEvent): void {
        let target: Node = <Node>_event.target;
        let parent: Node = <Node>target.parentNode;
        parent.removeChild(target);
    }

    

}