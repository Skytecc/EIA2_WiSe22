namespace L04_Einkaufsliste {
    interface Item {
        name: string;
        amount: number;
        date: string;
        comment: string;
    }

    interface currentList {
        [showList: string]: Item[];
    }

    let currentItems: currentList  = {
        
        list: [
            { name: "Banane", amount: 4, date: "30.10.2022", comment: "Für den Milchshake"},
            { name: "Apfel", amount: 8, date: "30.10.2022", comment: "Für den smoothie"}
        ]
    };
}