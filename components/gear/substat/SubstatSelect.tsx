import GearSelection from '../../../objects/GearSelection'
import { SubArray, SubStat } from '../../../objects/SubStat'
import { Box } from 'rebass'
import { Button, Color } from '../../../styles/theme'


const subSelectStyle = {
    display: 'inline-flex',
    textAlign: 'center',
    margin: Button.mx,
    padding: Button.padding,
    borderRadius: Button.borderRadius,
    background: Color.theme.primary,
    color: Color.theme.secondary,
    ":hover": {
        cursor: "pointer",
    }
}

interface substatProps {
    substats : GearSelection
}

function sortSubStats() {

}

export default function SubstatSelect(props : substatProps) {
    const { substats } = props
    const subMap = new Map();

    var subSelectGrid = [];
    for (let n = 0; n < SubArray.length; n++) {
        var type : string = SubArray[n].type;
        if (subMap.get(type) == undefined) {
            var newType : SubStat[] = []
            subMap.set(type, newType);
        }
        subMap.get(type).push(SubArray[n]);
    }

    let currentKey = 0;
    subMap.forEach((type: SubStat[], key: string) => {
        var subStatType = [];
        for(let n = 0; n <  type.length; n++) {
            subStatType.push(
                <Box key={"substat-select-button-" + n} sx={subSelectStyle} onClick={() => {
                    substats.addSelection(type[n]);
                }}>
                    {type[n].name}
                </Box>
            )
        }
        subSelectGrid.push(
            <Box sx={{
                display: "flex",
                gridRow: currentKey,
                justifyContent: 'center',
            }}>
                {subStatType}
            </Box>
        )
        currentKey++;
    });

    return (
        <Box sx={{
            display: "grid"
        }}>
            {subSelectGrid}

        </Box>
    )
}