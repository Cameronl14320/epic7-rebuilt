import GearSettings from "../../objects/GearSettings";
import { SubStat } from "../../objects/SubStat";

export interface calcSettings {
    values : number[]
    substats : SubStat[]
    settings : GearSettings
}

export default function calcMinMax(props : calcSettings) {
    const { values, substats, settings } = props
    const { rarity, tier, enhancement } = settings

    if (substats.length > rarity.value && enhancement <= (values.length - rarity.value)) {
        // No enhancement, yet there are more substats then there should be
        console.log("Number of substats > possible amount of substats because insufficent enhancement")
        console.log(substats.length + " > " + rarity.value + " && " + enhancement + " <= " + (values.length - rarity.value))
        return false;
    }

    for (let i = 0; i < values.length; i++) {
        if (values[i] > (substats[i].getMax(tier) + (substats[i].getMax(tier) * enhancement))) {
            // Value is greater than possible max, where max is base roll + (enhance roll * number of enhancement)
            console.log("There is a stat > possible maximum")
            return false;
        }
        if (values[i] < (substats[i].getMin(tier))) {
            // Value is less than the possible minimum, where min is defined uniquely for each sub stat
            console.log("There is a stat < possible minimum")
            return false;
        }
    }

    // Array of enhancement, stores number of enhancement per substat, initialised with 0s
    let enhanced : number[] = new Array(substats.length).fill(0);
    let foundEnhancements = 0;

    // If rarity isn't equal with number of sub substats, it means enhancement have rolled into new sub substats
    // Must add an extra enhancement due to this
    if (values.length > rarity.value) {
        let extraSubs = values.length - rarity.value;
        for (let i = values.length - 1; i > (values.length - extraSubs - 1); i--) {
            enhanced[i]++;
            foundEnhancements++;
        }
    }

    while(foundEnhancements != enhancement) {
        for (let i = 0; i < values.length; i++) {
            let currentValue = values[i];
            let maxRoll = substats[i].getMax(tier);
            var simulateEnhance = maxRoll;
            while (simulateEnhance < currentValue) {
                foundEnhancements++;
                simulateEnhance += maxRoll;
                enhanced[i]++;
            }
        }

        if (foundEnhancements > enhancement) {
            // When we search for enhancement, we go by max possible rolls - this finds the minimum enhancement necessary to reach inputted parameters
            // If the number we find > number there is, impossible case, inaccurate number of enhancement
            console.log("Incorrect parameters (" + foundEnhancements + " > " + enhancement + ")")
            return;
        } else if (foundEnhancements < enhancement) {
            // Less than enhancement, found enhancement is actually comprised of multiple enhancement
            let max = 0;
            let maxValue = 0;
            for (let i = 0; i < values.length; i++) {
                console.log(foundEnhancements);
                if (values[i] > maxValue) {
                    maxValue = values[i];
                    values[i] = values[i] - substats[i].getMax(tier); // Update value so that it doesn't repeatedly scan the same max
                    foundEnhancements++;
                    enhanced[i]++;
                    max = i;

                    if (foundEnhancements >= enhancement) { // Found all enhancement, time to stop
                        break;
                    }
                }
            }
        }
    }

    // Create an array of all the max values determined by max roll and number of enhancement
    let maxValues : number[] = [values.length];
    for (let i = 0; i < values.length; i++) {
        let maxRoll = substats[i].getMax(tier);
        maxValues[i] = maxRoll + (maxRoll * enhanced[i]);
    }

    // Removes the initial maxRoll in the above for loop, as the extra sub stat(s) is not a base roll.
    if (values.length > rarity.value) {
        let extraSubs = values.length - rarity.value;
        for (let i = values.length - 1; i > (values.length - extraSubs - 1); i--) {
            let maxRoll = substats[i].getMax(tier);
            maxValues[i] = maxValues[i] - (maxRoll);
        }
    }

    console.log("Enhancements found: " + enhanced)
    console.log("Max Values: " + maxValues)
    return maxValues;
}