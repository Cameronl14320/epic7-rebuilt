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

export default function SubstatSelect(props : substatProps) {
    var selected : GearSelection = props.substats;

    var subSelectButtons = [];
    for (let n = 0; n < SubArray.length; n++) {
        subSelectButtons.push(
            <Box key={"substat-select-button-" + n} sx={subSelectStyle}>
                {SubArray[n].name}
            </Box>
        )
    }

    return (
        <>
            {subSelectButtons}
        </>
    )
}