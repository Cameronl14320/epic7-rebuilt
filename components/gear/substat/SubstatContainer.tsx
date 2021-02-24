import { useState } from 'react'
import { Box } from 'rebass'
import GearSelection from '../../../objects/GearSelection'
import SubstatDisplay from './SubstatDisplay'
import SubstatSelect from './SubstatSelect'
import { SubStat } from '../../../objects/SubStat'

interface SubstatProps {
    substats : GearSelection
}

export default function SubstatContainer(props : SubstatProps) {
    const { substats } = props;


    return (
        <Box sx={{
            display: 'grid'
        }}>
            {<SubstatDisplay selected={substats}/>}
            {<SubstatSelect selected={substats}/>}
        </Box>

    )
}