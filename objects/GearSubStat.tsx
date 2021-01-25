// This is the object form for each individual substat

export default class {

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