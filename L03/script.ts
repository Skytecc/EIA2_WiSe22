let dateInput: HTMLInputElement = <HTMLInputElement> document.getElementById("date");

dateInput.value = new Date().toISOString().substring(0, 10);


