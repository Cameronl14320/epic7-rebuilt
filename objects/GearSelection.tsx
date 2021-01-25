// Stores the selected sub stats from Gear
import GearSubStat from './GearSubStat'


export default class {
    
    private maxSelected : number = 4;
    private selected : GearSubStat[] = [];

    constructor() {
    }

    // Checks whether a GearSubStat is already selected
    private getMatch(selection : GearSubStat) {
        for (let n = 0; n < this.selected.length; n++) {
            if (this.selected[n] == selection) {
                return true;
            } else {
                return false;
            }
        }
    }

    // Adds selection to the selected GearSubStats if it doesn't exist
    public addSelection(selection : GearSubStat) {
        if (this.selected.length < this.maxSelected && !this.getMatch(selection)) {
            this.selected.push(selection);
        }
    }

    // Removes selection from the selected GearSubStats if it exists
    public removeSelection(selection : GearSubStat) {
        if (this.getMatch(selection)) {
            this.selected.splice(this.selected.indexOf(selection), 1);
        }
    }


}