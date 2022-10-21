namespace L02_Event_Inspector {
    console.log("Start");
    let infoString: string;
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        
        let body: HTMLElement = <HTMLElement>document.querySelector("body");
        let button: HTMLElement = <HTMLElement>document.getElementById("button");
        let div0: HTMLElement = <HTMLElement>document.getElementById("div0");
        let div1: HTMLElement = <HTMLElement>document.getElementById("div1");

        button.addEventListener("click", customEvent);
        document.addEventListener("customEventWorking",showCustomEvent);

        body.addEventListener("click", logInfo);
        document.addEventListener("click", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);

        document.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);

        document.addEventListener("mousemove", setInfoBox);

    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }

    function setInfoBox(_event: MouseEvent): void {
        //console.log(_event);
        let xPosition: number = _event.clientX;
        let yPostion: number = _event.clientY;
        let coor: string = "(" + "x" + String(xPosition) + ";" + String(yPostion) + "y" + ")" + "<br>" + "Target Object: " + "<br>" + _event.target;

        //console.log(xPosition + yPostion);
        let infoBox: HTMLElement = <HTMLElement>document.getElementById("span1");
        infoString = coor; 

        infoBox.innerHTML = infoString;
        infoBox.style.top =  yPostion + 10 + "px";
        infoBox.style.left =  xPosition + 10 + "px";

    }

    function customEvent(_event: MouseEvent): void {
        let event: CustomEvent = new CustomEvent("customEventWorking", {bubbles: true});

        _event.target?.dispatchEvent(event);

    }

    function showCustomEvent(_event: Event): void {
        console.log(_event);
    }

}