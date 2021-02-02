import { Box } from 'rebass'
import settings from '../../../data/settings'
import { Button, Color } from '../../../styles/theme'
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { Handle, Track, Tick } from '../../shared/slider'; // example render components

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
        sliderStyle: {
            margin: '5%',
            position: 'relative',
            width: '90%',
            height: '50px',
        },
        railStyle: {
            position: 'absolute',
            width: '100%',
            height: 14,
            borderRadius: 7,
            cursor: 'pointer',
            backgroundColor: 'rgb(155,155,155)'
        }
    },
}

export interface EnhanceSelectProps {
    selectedEnhance: number
    onSelect: (enhance: number) => void
}

const formatTicks = (d: number) => {
    return `${d}`;
  };


export default function EnhanceSelect(props : EnhanceSelectProps) {
    const { selectedEnhance, onSelect } = props;

    var enhanceSelection = []


    return (
        <Slider
            rootStyle={enhanceStyle.slider.sliderStyle}
            domain={[0, 15]}
            step={3}
            values={[0, 3, 6, 9, 12, 15]}
            mode={1}
            onChange={() => onSelect}
        >
            <Rail>
                {({ getRailProps }) => (
                    <Box sx={enhanceStyle.slider.railStyle} {...getRailProps()} />
                )}

            </Rail>
            <Handles>

                {({ handles, getHandleProps }) => (
                    <Handle
                    handle={handles[0]}
                    domain={[0, 15]}
                    getHandleProps={getHandleProps}
                    />
                )}
            </Handles>
            <Tracks>
                {({ tracks, getTrackProps }) => (
                <Box className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                    <Track
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                    />
                    ))}
                </Box>
                )}
            </Tracks>
            <Ticks values={[0, 3, 6, 9, 12, 15]}>
                {({ ticks }) => (
                <Box className="slider-ticks">
                    {ticks.map(tick => (
                    <Tick
                        key={tick.id}
                        format={formatTicks}
                        tick={tick}
                        count={ticks.length}
                    />
                    ))}
                </Box>
                )}
            </Ticks>
        </Slider>
    )
}