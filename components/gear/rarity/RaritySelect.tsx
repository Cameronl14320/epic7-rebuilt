import { Rarity, Rarities } from '../../../objects/Rarity'
import RarityButton from './RarityButton'
import { Box } from 'rebass'

export interface RaritySelectProps {
    selectedRarity: string
    onSelect: (rarityName: string) => void
}

const rarityStyle = {
    grid: {
        display: 'grid',
        justifyContent: 'center',
    },
    display: {
        my: '5px',
        display: 'flex',
        justifyContent: 'center',
        icon: {
            width: ['100px'],
            height: ['100px'],
            background: 'black',
            borderRadius: '10px'
        }
    },
    select: {
        my: '5px',
    }
}

export default function RaritySelect(props: RaritySelectProps) {
    const raritySelection = Rarities.map(rarity => (
        <RarityButton
            key={rarity.name}
            inputName='rarity'
            rarityName={rarity.name}
            selected={rarity.name === props.selectedRarity}
            onChange={() => props.onSelect(rarity.name)}
        />
    ));
    return (
        <Box id="rarity-grid" sx={rarityStyle.grid}>
            <Box id="rarity-display" sx={rarityStyle.display}>   
                <Box id="display" sx={rarityStyle.display.icon}>

                </Box>
            </Box>
            <Box id="rarity-select" sx={rarityStyle.select}>
                {raritySelection}
            </Box>
        </Box>

    )
}