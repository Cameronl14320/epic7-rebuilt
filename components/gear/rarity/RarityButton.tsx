import { RaritySelectProps } from './RaritySelect'
import { Rarities, Rarity, RarityToColor } from '../../../objects/Rarity';
import { Button, Color } from '../../../styles/theme'
import { Box } from 'rebass'
import { Label } from '@rebass/forms'

export interface RarityButtonProps {
    inputName: string
    rarityName: string
    selected: boolean
    onChange: () => void
}

const rarityStyle = {
    ...Button,
    width: ['75px', '50px'],
    height: ['75px', '50px'],
    display: 'inline-flex',
    textAlign: 'center',
    color: Color.theme.secondary,
    appearance: 'none',
    ":hover": {
        cursor: "pointer",
    }
}

export default function RarityButton(props: RarityButtonProps) {
    const { inputName, rarityName, selected, onChange } = props;
    return (
        <Box
            as="input"
            type="radio"
            aria-label={rarityName}
            sx={{
                ...rarityStyle,
                backgroundColor: RarityToColor[rarityName]
            }}
            name={inputName}
            id={rarityName}
            value={rarityName}
            checked={selected}
            onChange={onChange}
        >
        </Box>

    )
}