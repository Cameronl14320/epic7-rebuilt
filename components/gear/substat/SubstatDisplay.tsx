import { Box } from 'rebass'
import GearSelection from '../../../objects/GearSelection'

interface DisplayProps {
    selected : GearSelection
}

export default function SubstatDisplay(props : DisplayProps) {
    const { selected } = props

    const displaySubs = []
    for (let n = 0; n < 4; n++) {
        displaySubs.push(
            <Box sx={{
                gridRow: n+1
            }}>
                {n}
            </Box>
        )
    }


    return (
        <Box sx={{
            display: 'grid'
        }}>
            {displaySubs}
        </Box>
    )
}