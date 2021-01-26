import GearSettings from '../../objects/GearSettings'
import { Box } from 'rebass'
import settings from '../../data/settings'
import { RarityArray } from '../../objects/RarityArray'

const maxRarity = settings.maxRarity;

const rarityStyle = {
    display: 'inline',
    mx: '5px',
}

export default function raritySelect(props : {settings : GearSettings}) {
    var settings : GearSettings = props.settings;
    
    var rarityButtons = [];
    for (let n = 0; n < maxRarity; n++) {
        rarityButtons.push(
            <Box key={"rarity-select-button-" + n} sx={rarityStyle}>
                {RarityArray[n]}
            </Box>
        )
    }

    return (
        <>
            {rarityButtons}
        </>
    )
}