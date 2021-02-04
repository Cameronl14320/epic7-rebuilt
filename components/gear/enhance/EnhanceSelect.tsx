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
            position: 'relative',
            width: '100%',
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

const domain: number[] = [0, 15];

const formatTicks = (d: number) => {
    return `${d}`;
  };

export default function EnhanceSelect(props : EnhanceSelectProps) {
    const { selectedEnhance, onSelect } = props;

    var enhanceSelection = []

    const values = [selectedEnhance];


    return (
        <Slider
            rootStyle={enhanceStyle.slider.sliderStyle}
            domain={domain}
            step={3}
            values={values}
            mode={1}
            onChange={() => onSelect(values[selectedEnhance])}
        >
            <Rail>
                {({ getRailProps }) => (
                    <Box sx={enhanceStyle.slider.railStyle} {...getRailProps()} />
                )}

            </Rail>
            <Handles>

                {({ handles, getHandleProps }) => (
                    <Box className="slider-handles">
                        {handles.map(handle => (
                            <Handle
                                key={handle.id}
                                handle={handle}
                                domain={domain}
                                getHandleProps={getHandleProps}
                            />
                        ))}
                    </Box>
                )}
            </Handles>
            <Tracks>
                {({ tracks, getTrackProps }) => (
                <Box id="slider-tracks">
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
                <Box id="slider-ticks">
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