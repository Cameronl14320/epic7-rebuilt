import { Rarity, Rarities } from '../../../objects/Rarity'
import RarityButton from './RarityButton'

export interface RaritySelectProps {
    selectedRarity: string
    onSelect: (rarityName: string) => void
}

export default function RaritySelect(props: RaritySelectProps) {
    const raritySelection = Rarities.map(rarity => (
        <RarityButton
            key={rarity.name}
            inputName='rarity'
            rarityName={rarity.name}
            selected={rarity.name === props.selectedRarity}
            onClick={() => props.onSelect(rarity.name)}
        />
    ));
    return (<>{raritySelection}</>)
}