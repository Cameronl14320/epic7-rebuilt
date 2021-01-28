// This is the object form for each individual substat
import substats from '../data/substats.json'

export class SubStat {

    public name : string;
    private min : number[];
    private max : number[];
    private type : string;

    constructor(name : string, min : number[], max : number[], type : string) {
        this.name = name;
        this.min = min;
        this.max = max;
        this.type = type;
    }

    // Return minimum enhancement given a tier
    public getMin(tier : number) {
        if (tier > this.min.length) {
            throw new Error("Tried to grab min value from a GearSubStat, tier > length")
        } else if (tier < 0) {
            throw new Error("Tried to grab min value from a GearSubStat, tier < 0");
        } else {
            return this.min[tier];
        }
    }

    // Return maximum enhancement given a tier
    public getMax(tier : number) {
        if (tier > this.max.length) {
            throw new Error("Tried to grab max value from a GearSubStat, tier > length")
        } else if (tier < 0) {
            throw new Error("Tried to grab max value from a GearSubStat, tier < 0");
        } else {
            return this.max[tier];
        }
    }
}

function createSubArray() : SubStat[] {
    let array : SubStat[] = [];
    let jsonArray : any[] = [];

    Object.keys(substats).forEach(key => jsonArray.push({name: substats[key].name, min: substats[key].min, max: substats[key].max}))
    jsonArray.forEach(element => {array.push(new SubStat(element.name, element.min, element.max, element.type));});
    
    return array;
}

export const SubArray : SubStat[] = createSubArray();