import GearSettings from '../../objects/GearSettings'
import { Box } from 'rebass'
import settings from '../../data/settings'
import { Rarity, Rarities } from '../../objects/Rarity'
import { Button, Color } from '../../styles/theme'
import { Label, Radio } from '@rebass/forms'

export interface RaritySelectProps {
    selectedRarityName: string
    onSelect: (rarityName: string) => void
}

const rarityStyle = {
    display: 'inline-flex',
    textAlign: 'center',
    width: ['30px', '25px', '20px'],
    height: ['30px', '25px', '20px'],
    mx: Button.margin,
    padding: Button.padding,
    borderRadius: Button.borderRadius,
    color: Color.theme.secondary,
}

export function RaritySelect(props: RaritySelectProps) {
    const { selectedRarityName, onSelect } = props


    Rarities.find(rarity => rarity.name)
    const rarityRadios = Rarities.map(rarity => (
        <Label>
            <Radio
                name='rarity'
                id={rarity.name}
                value={rarity.name}
                checked={rarity.name === selectedRarityName}
                onChange={(value) => onSelect(value.target.value)}
            />
            {rarity.name}
        </Label>
    ));


    return (
        <Box>
            {rarityRadios}
        </Box>
    )
}