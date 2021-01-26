import GearSelection from '../../objects/GearSelection'
import { SubArray, SubStat } from '../../objects/SubStat'
import { Box } from 'rebass'

const subSelectStyle = {
    display: 'inline',
    mx: '5px',
}

export default function substatSelect(props : {selection : GearSelection}) {
    var selected : GearSelection = props.selection;

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