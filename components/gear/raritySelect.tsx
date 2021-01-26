import GearSettings from '../../objects/GearSettings'
import { Box } from 'rebass'
import settings from '../../data/settings'
import { RarityArray } from '../../objects/RarityArray'
import { Button, Color } from '../../styles/theme'

const maxRarity = settings.maxRarity;

const rarityStyle = {
    display: 'inline-flex',
    textAlign: 'center',
    mx: Button.margin,
    padding: Button.padding,
    borderRadius: Button.borderRadius,
    color: Color.theme.secondary,
}

export default function raritySelect(props : {settings : GearSettings}) {
    var settings : GearSettings = props.settings;
    
    var rarityButtons = [];
    for (let n = 0; n < maxRarity; n++) {
        let color : string = RarityArray[n].color;
        rarityButtons.push(
            <Box key={"rarity-select-button-" + n} sx={rarityStyle} style={{background: color}}>
            </Box>
        )
    }

    return (
        <>
            {rarityButtons}
        </>
    )
}