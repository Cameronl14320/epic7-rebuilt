export default class Rarity {
    public rarity : string;
    public color : string;
    public value : number

    constructor(rarity : string, color : string, value : number) {
        this.rarity = rarity;
        this.color = color;
        this.value = value;
    }
}