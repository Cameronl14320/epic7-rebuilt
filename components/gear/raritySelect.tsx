import GearSettings from '../../objects/GearSettings'
import { Box } from 'rebass'
import settings from '../../data/settings'
import { Rarity, Rarities } from '../../objects/Rarity'
import { Button, Color } from '../../styles/theme'

export interface RaritySelectProps {
    selectedRarity: Rarity
    onSelect: (rarityName: Rarity) => void
}

const rarityStyle = {
    display: 'inline-flex',
    textAlign: 'center',
    mx: Button.margin,
    padding: Button.padding,
    borderRadius: Button.borderRadius,
    color: Color.theme.secondary,
    ":checked": {
        background: "black"
    },
    ":hover": {
        cursor: "pointer",
    }
}
export function RaritySelect(props: RaritySelectProps) {
    const { selectedRarity, onSelect } = props

    const raritySelection = Rarities.map(rarity => (
        <Box id={rarity.name} key={"rarity-select-button-" + rarity.name} checked={rarity === selectedRarity} sx={rarityStyle} style={{background: rarity.color}} 
        onClick={(element) => {
            console.log(element.target.checked)
            const lastRarity = Rarities.find(lastRarity => lastRarity === selectedRarity)   
            onSelect(rarity);
        }}>
            {rarity.name}
        </Box>
        ));

    return (
        <>
            {raritySelection}
        </>
    )
}