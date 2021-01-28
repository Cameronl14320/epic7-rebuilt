import { Box } from 'rebass'
import settings from '../../../data/settings'
import { Button, Color } from '../../../styles/theme'

const maxEnhance = settings.maxEnhance;

const enhanceStyle = {
    ...Button,
    display: 'inline-flex',
    textAlign: 'center',
    background: Color.theme.primary,
    color: Color.theme.secondary,
    appearance: 'none',
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
            <Box 
                as="input" 
                type="radio" 
                id={"enhance-select-button-" + n}
                key={"enhance-select-button-" + n} 
                sx={enhanceStyle} 
                checked={n === selectedEnhance}
                onChange={() => {onSelect(n)}}>
            </Box>
        )
    }

    return (
        <>
            {enhanceSelection}
        </>
    )
}