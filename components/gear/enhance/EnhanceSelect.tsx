import { Box } from 'rebass'
import settings from '../../../data/settings'
import { Button, Color } from '../../../styles/theme'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

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

    slider: {
        handleStyle: {
        },
        railStyle: {

        },
        dotStyle: {
            borderColor: Color.theme.primary,
        },
        activeDotStyle: {

        },
    },
}

export interface EnhanceSelectProps {
    selectedEnhance: number
    onSelect: (enhance: number) => void
}

export default function EnhanceSelect(props : EnhanceSelectProps) {
    const { selectedEnhance, onSelect } = props;

    var enhanceSelection = []
    

    return (
            <Slider
                min={0} max={5} step={1} dots={true} 
                handleStyle={enhanceStyle.slider.handleStyle}
                railStyle={enhanceStyle.slider.railStyle}
                dotStyle={enhanceStyle.slider.dotStyle} 
                activeDotStyle={enhanceStyle.slider.activeDotStyle}
                defaultValue={selectedEnhance}
                ariaLabelForHandle={selectedEnhance.toString()}
                onChange={(value) => {onSelect(value)}}    
            >
            </Slider>
    )
}