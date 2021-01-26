import rarities from '../data/rarities.json'

function createRarityArray() : string[] {
    let array : string[] = [];
    let jsonArray : any[] = [];

    Object.keys(rarities.rarities).forEach(key => jsonArray.push({rarity: rarities.rarities[key].rarity}))
    jsonArray.forEach(element => {array.push(element.rarity);});
    
    return array;
}

export const RarityArray : string[] = createRarityArray();