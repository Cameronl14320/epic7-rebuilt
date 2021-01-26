// This object stores all the settings for the gear page
import { Rarity } from './Rarity'

export default class {

    public rarity : Rarity;
    public tier : number;
    public enhancement : number;
    
    constructor(rarity : Rarity, tier : number, enhancement : number) {
        this.rarity = rarity;
        this.tier = tier;
        this.enhancement = enhancement;
    }
}