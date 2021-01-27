import GearSettings from '../../objects/GearSettings'
import { Box } from 'rebass'
import settings from '../../data/settings'
import { Button, Color } from '../../styles/theme'

const maxEnhance = settings.maxEnhance;

const enhanceStyle = {
    display: 'inline-flex',
    textAlign: 'center',
    mx: Button.margin,
    padding: Button.padding,
    borderRadius: Button.borderRadius,
    background: Color.theme.primary,
    color: Color.theme.secondary,
    ":hover": {
        cursor: "pointer",
    }
}

export interface EnhanceSelectProps {
    selectedEnhance: number
    onSelect: (enhance: number) => void
}

export default function EnhanceSelect(props : EnhanceSelectProps) {
    const { selectedEnhance, onSelect } = props;

    var enhanceSelection = []
    for (let n = 0; n <= maxEnhance; n++) {
        let display : number = 3 * n;
        enhanceSelection.push(
            <Box key={"enhance-select-button-" + n} sx={enhanceStyle} onClick={() => {onSelect(n)}}>
                {display}
            </Box>
        )
    }

    return (
        <>
            {enhanceSelection}
        </>
    )
}