// This is the object form for each individual substat
import substats from '../data/substats.json'

export class SubStat {

    public name : string;
    private min : number[];
    private max : number[];

    constructor(name : string, min : number[], max : number[]) {
        this.name = name;
        this.min = min;
        this.max = max;
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
    var array : SubStat[] = [];
    var jsonArray : any[] = [];

    Object.keys(substats.substats).forEach(key => jsonArray.push({name: substats.substats[key].name, min: substats.substats[key].min, max: substats.substats[key].max}))
    jsonArray.forEach(element => {array.push(new SubStat(element.name, element.min, element.max));});
    
    return array;
}

export const SubArray : SubStat[] = createSubArray();