import GearSelection from '../../../objects/GearSelection'
import { SubArray, SubStat } from '../../../objects/SubStat'
import { Box } from 'rebass'
import { Button, Color } from '../../../styles/theme'


const subSelectStyle = {
    display: 'inline-flex',
    textAlign: 'center',
    mx: Button.margin,
    padding: Button.padding,
    borderRadius: Button.borderRadius,
    background: Color.theme.primary,
    color: Color.theme.secondary,
}

interface substatProps {
    substats : GearSelection
}

function sortSubStats() {
    
}

export default function SubstatSelect(props : substatProps) {
    const { substats } = props
    const subMap = new Map();

    var subSelectButtons = [];
    for (let n = 0; n < SubArray.length; n++) {
        subSelectButtons.push(
            <Box key={"substat-select-button-" + n} sx={subSelectStyle}>
                {SubArray[n].name}
            </Box>
        )
        var type : string = SubArray[n].type;
        if (subMap.get(type) == undefined) {
            var newType : SubStat[] = []
            subMap.set(type, newType);
        }
        subMap.get(type).push(SubArray[n]);
    }

    return (
        <>
            {subSelectButtons}
        </>
    )
}