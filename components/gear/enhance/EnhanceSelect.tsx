import { Box } from 'rebass'
import settings from '../../../data/settings'
import { Button, Color } from '../../../styles/theme'
import {AlphaSlider} from '../../shared/AlphaSlider'


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
    selectedEnhance: number
    setEnhance: (enhance: number) => void
}

const marks = [
    {
        value: 0,
        label: '0'
    },
    {
        value: 1,
        label: '3'
    },
    {
        value: 2,
        label: '6'
    },
    {
        value: 3,
        label: '9'
    },
    {
        value: 4,
        label: '12'
    },
    {
        value: 5,
        label: '15'
    }
]

export default function EnhanceSelect(props : EnhanceSelectProps) {
    const { selectedEnhance, setEnhance } = props;

    const handleChange = (event, newValue) => {
        setEnhance(newValue)
    };

    return (
        <AlphaSlider
            value={selectedEnhance}
            step={1}
            min={0}
            marks={marks}
            max={settings.maxEnhance}
            onChange={handleChange}
        />
    )
}