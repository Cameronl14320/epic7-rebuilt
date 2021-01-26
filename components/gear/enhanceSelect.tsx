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
}

export default function enhanceSelect(props : {settings : GearSettings}) {
    var settings : GearSettings = props.settings;

    var enhanceButtons = []
    for (let n = 0; n < maxEnhance; n++) {
        let display : number = 3 * (n + 1);
        enhanceButtons.push(
            <Box key={"enhance-select-button-" + n} sx={enhanceStyle}>
                {display}
            </Box>
        )
    }

    return (
        <>
            {enhanceButtons}
        </>
    )
}