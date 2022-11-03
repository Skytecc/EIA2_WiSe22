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
}