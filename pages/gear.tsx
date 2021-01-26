import GearSelection from '../objects/GearSelection'
import GearSettings from '../objects/GearSettings'
import { SubStat, SubArray } from '../objects/SubStat'
import { Rarities, Rarity } from '../objects/Rarity'
import { Box } from 'rebass'
import enhanceSelect from '../components/gear/enhanceSelect'
import substatSelect from '../components/gear/substatSelect'
import { useState } from 'react'
import { RaritySelect } from '../components/gear/RaritySelect'


const gearStyle = {
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    centerContainer: {

    },
    grid: {
        display: 'grid'
    },
    gridRow: {
        margin: '5px',
    },
    compute: {
        justifyContent: 'center',
        display: 'flex',
    }
}

export default function gear(props) {
    // const [setGeargearSettings = useState(new GearSettings(Rarities[0], 0, 0));
    // const selection: GearSelection = new GearSelection();
    // const settings: GearSettings = new GearSettings(Rarities[0], 0, 0);
    const [selectedRarityName, setSelectedRarityName] = useState(Rarities[0].name)

    return (
        <Box id="gear-wrapper" sx={gearStyle.wrapper}>
            <Box id="gear-center-container" sx={gearStyle.centerContainer}>
                <Box id="gear-grid" sx={gearStyle.grid}>
                    <Box id="gear-grid-row-1" sx={gearStyle.gridRow}>
                        <Box id="gear-grid-rarity-select" sx={{ marginTop: '5px' }}>
                            <RaritySelect selectedRarityName={selectedRarityName} onSelect={setSelectedRarityName} />
                        </Box>
                    </Box>
                    {/* <Box id="gear-grid-row-2" sx={gearStyle.gridRow}>
                        <Box id="gear-grid-enhance-select">{enhanceSelect({ settings })}</Box>
                    </Box>
                    <Box id="gear-grid-row-3" sx={gearStyle.gridRow}>
                        <Box id="gear-grid-substat-select">{substatSelect({ selection })}</Box>
                    </Box> */}
                </Box>
                <Box id="gear-compute" sx={gearStyle.compute}>
                    <Box>
                        Compute
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}