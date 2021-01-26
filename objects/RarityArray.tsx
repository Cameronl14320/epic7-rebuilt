import rarities from '../data/rarities.json'
import Rarity from './Rarity'

function createRarityArray() : Rarity[] {
    let array : Rarity[] = [];
    let jsonArray : any[] = [];

    Object.keys(rarities.rarities).forEach(key => jsonArray.push({rarity: rarities.rarities[key].rarity, color: rarities.rarities[key].color, value: rarities.rarities[key].value}))
    jsonArray.forEach(element => {array.push(new Rarity(element.rarity, element.color, element.value));});
    
    return array;
}

export const RarityArray : Rarity[] = createRarityArray();