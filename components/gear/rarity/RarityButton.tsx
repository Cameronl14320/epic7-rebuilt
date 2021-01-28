import {RaritySelectProps} from './RaritySelect'
import { Rarity } from '../../../objects/Rarity';
import { Button, Color } from '../../../styles/theme'
import { Box } from 'rebass'

export interface RarityButtonProps {
    selectProps : RaritySelectProps;
    rarity : Rarity;
}

const rarityStyle = {
    display: 'inline-flex',
    textAlign: 'center',
    mx: Button.margin,
    width: ['75px', '50px', '25px'],
    height: ['75px', '50px', '25px'],
    padding: Button.padding,
    borderRadius: Button.borderRadius,
    color: Color.theme.secondary,
    ":hover": {
        cursor: "pointer",
    }
}

export default function RarityButton(props : RarityButtonProps) {
    const { selectedRarity, onSelect } = props.selectProps;
    const rarity = props.rarity;

    var color : string = rarity.color;
    if (rarity === selectedRarity) {
        color = "black";
    } 

    return (
        <Box id={rarity.name} sx={rarityStyle} style={{background: color}} onClick={() => {onSelect(rarity);}}/>
    )
}