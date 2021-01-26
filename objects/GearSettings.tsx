// This object stores all the settings for the gear page

export default class {

    public rarity : number;
    public tier : number;
    public enhancement : number;
    
    constructor(rarity : number, tier : number, enhancement : number) {
        this.rarity = rarity;
        this.tier = tier;
        this.enhancement = enhancement;
    }
}