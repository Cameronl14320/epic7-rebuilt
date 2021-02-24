import GearSelection from '../../../objects/GearSelection'
import { SubArray, SubStat } from '../../../objects/SubStat'
import { Box } from 'rebass'
import { Button, Color } from '../../../styles/theme'
import SubstatButton from './SubstatButton'


interface substatProps {
    selected : GearSelection
}

function sortSubStats() {

}

export default function SubstatSelect(props : substatProps) {
    const { selected } = props
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
                <SubstatButton key={type[n].name} substat={type[n]} substats={selected}></SubstatButton>
            )
        }
        subSelectGrid.push(
            <Box key={key} id={key} sx={{
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
        <Box id={"substat-select"} sx={{
            display: "grid"
        }}>
            {subSelectGrid}
        </Box>
    )
}