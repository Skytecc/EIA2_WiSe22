namespace L09_Oldfarm {
    export class Foodstock {
        type: string;
        amount: number;


        constructor(_type: string, _amount: number) {
            this.type = _type;
            this.amount = _amount;
        }

        showfood(_index: number): void {
            let text: HTMLDivElement = <HTMLDivElement>document.getElementById("foodAmount");
            let newText: HTMLDivElement = document.createElement("div");

            newText.id = "divFood" + _index;
            _index++;

            newText.innerHTML = this.type + ": " + this.amount;

            text.appendChild(newText);
        }

    }
}