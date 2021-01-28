import { settings } from 'cluster'
import rarities from '../data/rarities.json'

export interface Rarity {
    name: string
    color: string
    value: number
}

export const RarityToColor: { [rarity: string]: string} = Object.fromEntries(
    rarities.map(rarity => [rarity.name, rarity.color])
);

export const Rarities: Rarity[] = rarities