import rarities from '../data/rarities.json'

export class Rarity {
    public rarity : string;
    public color : string;
    public value : number

    constructor(rarity : string, color : string, value : number) {
        this.rarity = rarity;
        this.color = color;
        this.value = value;
    }
}

function createRarityArray() : Rarity[] {
    let array : Rarity[] = [];
    let jsonArray : any[] = [];

    Object.keys(rarities.rarities).forEach(key => jsonArray.push({rarity: rarities.rarities[key].rarity, color: rarities.rarities[key].color, value: rarities.rarities[key].value}))
    jsonArray.forEach(element => {array.push(new Rarity(element.rarity, element.color, element.value));});
    
    return array;
}

export const RarityArray : Rarity[] = createRarityArray();