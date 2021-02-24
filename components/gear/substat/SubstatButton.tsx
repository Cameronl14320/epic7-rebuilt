import { Box } from 'rebass'
import { useState } from 'react'
import { SubStat } from '../../../objects/SubStat';
import GearSelection from '../../../objects/GearSelection'
import SubstatField from './SubstatField'
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

interface buttonProps {
    substat : SubStat
    substats : GearSelection
}

export default function SubButton(props : buttonProps) {
    const { substat, substats } = props;
    const [selected, onSelect] = useState(false);

    return (
        <Box key={substat.name} id={substat.name} sx={subSelectStyle} style={{
            background: selected?Color.theme.selectedPrimary:Color.theme.selectedSecondary,
        }} onClick={() => {
            substats.addSelection(substat);
            if (substats.getMatch(substat)) {
                onSelect(true);
            } else {
                onSelect(false);
            }
        }}>
            {substat.name}
        </Box>
    )
}