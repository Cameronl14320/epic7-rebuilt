import GearSettings from '../../objects/GearSettings'
import { Box } from 'rebass'
import settings from '../../data/settings'
import { Rarity, RarityArray } from '../../objects/Rarity'
import { Button, Color } from '../../styles/theme'

const maxRarity = settings.maxRarity;
var lastRarity : number;

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



function handleClick(id : number, rarity : Rarity, settings : GearSettings) {
    settings.rarity = rarity;
    let lastElement = document.getElementById("rarity-select-button-" + lastRarity);
    lastElement.style.background = RarityArray[lastRarity].color;

    let currentElement = document.getElementById("rarity-select-button-" + id);
    currentElement.style.background = "black";
    lastRarity = id;
}

export default function raritySelect(props : {settings : GearSettings}) {
    var settings : GearSettings = props.settings;
    
    var rarityButtons = [];
    for (let n = 0; n < maxRarity; n++) {
        let rarity : Rarity = RarityArray[n];
        let color : string = rarity.color;
        if (rarity == settings.rarity) {
            color = "black";
            lastRarity = n;
            console.log(n);
        }
        rarityButtons.push(
            <Box id={"rarity-select-button-" + n} key={"rarity-select-button-" + n} sx={rarityStyle} style={{background: color}}
             onClick={() => handleClick(n, rarity, settings)}/>
        )
    }

    return (
        <>
            {rarityButtons}
        </>
    )
}