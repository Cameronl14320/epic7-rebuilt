// Stores the selected sub stats from Gear
import { SubStat } from './SubStat'

export default class {
    
    private maxSelected : number = 4;
    private selected : SubStat[] = [];

    // Checks whether a SubStat is already selected
    private getMatch(selection : SubStat) {
        for (let n = 0; n < this.selected.length; n++) {
            if (this.selected[n] === selection) {
                return true;
            }
        }
        return false;
    }

    /**
     * Adds selection to the selected GearSubStats if it doesn't exist
     * If it does exist, remove it instead
     *  */ 
    public addSelection(selection : SubStat) {
        if (this.selected.length < this.maxSelected && !this.getMatch(selection)) {
            this.selected.push(selection);
        } else if (this.getMatch(selection)) {
            this.selected.splice(this.selected.indexOf(selection), 1);
        }
    }

    public toString() {
        let string : String = "";
        
        for (let n = 0; n < this.selected.length; n++) {
            string = string + this.selected[n].name + " "
        }
        return string;
    }
}