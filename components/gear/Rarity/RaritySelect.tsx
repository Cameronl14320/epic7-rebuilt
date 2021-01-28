import { Rarity, Rarities } from '../../../objects/Rarity'
import RarityButton from './RarityButton'

export interface RaritySelectProps {
    selectedRarity: Rarity
    onSelect: (rarityName: Rarity) => void
}

export default function RaritySelect(props: RaritySelectProps) {
    const raritySelection = Rarities.map(rarity => ( <RarityButton key={"rarity-select-button-" + rarity.name} selectProps={props} rarity={rarity}/> ));
    return (<>{raritySelection}</>)
}