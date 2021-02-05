import { Box } from 'rebass'
import settings from '../../../data/settings'
import { Button, Color } from '../../../styles/theme'
import EnhanceSlider from './EnhanceSlider'

const maxEnhance = settings.maxEnhance;

const enhanceStyle = {
    ...Button,
    width: ['60px', '40px'],
    height: ['60px', '40px'],
    display: 'inline-flex',
    textAlign: 'center',
    background: Color.theme.primary,
    verticalAlign: 'center',
    color: Color.theme.secondary,
    justifyContent: 'center',
    appearance: 'none',
    ":hover": {
        cursor: "pointer",
    },
}

export interface EnhanceSelectProps {
    selectedEnhance: number[]
    onSelect: (enhance: number[]) => void
}

const domain: number[] = [0, maxEnhance];

export default function EnhanceSelect(props : EnhanceSelectProps) {
    const { selectedEnhance, onSelect } = props;

    return (
        <EnhanceSlider/>
    )
}