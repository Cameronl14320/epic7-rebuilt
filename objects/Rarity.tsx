import { settings } from 'cluster'
import rarities from '../data/rarities.json'

export interface Rarity {
    name: string
    color: string
    value: number
}

export const Rarities: Rarity[] = rarities