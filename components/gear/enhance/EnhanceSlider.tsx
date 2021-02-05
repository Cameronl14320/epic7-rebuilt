import { Box } from 'rebass'
import settings from '../../../data/settings'
import { Button, Color } from '../../../styles/theme'
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { Handle, Track, Tick } from '../../shared/slider'; // example render components
import React from 'react';
import { EnhanceSelectProps } from './EnhanceSelect';

const style = {
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
            backgroundColor: 'rgb(155,155,155)',
            color: 'gold'
        }
    }
}

export interface EnhanceSliderProps {
    selectedEnhance: number[]
    onSelect: (enhance: number[]) => void
}

export default class EnhanceSlider extends React.Component {
    public state = {
        values: [0],
        domain: [0, settings.maxEnhance]
    }

    onChange = (values : number[]) => {
        this.setState({values});
        console.log(this.state.values)
    }

    public getValue() {
        return this.state.values[0];
    }

    render() {
        const {
            state: { values, domain }
        } = this;

        return (
            <Slider
                rootStyle={style.slider.sliderStyle}
                domain={domain}
                step={1}
                values={values}
                mode={1}
                onChange={this.onChange}
            >
                <Rail>
                    {({ getRailProps }) => (
                        <Box sx={style.slider.railStyle} {...getRailProps()} />
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
                <Tracks right={false}>
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
                <Ticks>
                    {({ ticks }) => (
                    <Box id="slider-ticks">
                        {ticks.map(tick => (
                        <Tick
                            key={tick.id}
                            count={5}
                            format={(d : number) => { return `${d*3}`}}
                            tick={tick}
                        />
                        ))}
                    </Box>
                    )}
                </Ticks>
            </Slider>
        )
    }
}