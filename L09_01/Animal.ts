class Animal {
    species: string;
    name: string;
    food: Food;
    amount: number;
    sounds: string;

    constructor(_species: string, _name: string, _food: Food, _amount: number, _sounds: string) {
        this.species = _species;
        this.name = _name;
        this.food = _food;
        this.amount = _amount;
        this.sounds = _sounds;
    }

}