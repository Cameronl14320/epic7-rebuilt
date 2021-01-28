import GearSelection from '../objects/GearSelection'
import { Rarities, Rarity } from '../objects/Rarity'
import { Box } from 'rebass'
import { useState } from 'react'
//import EnhanceSelect from '../components/gear/EnhanceSelect'
//import SubstatSelect from '../components/gear/SubstatSelect'
import { RaritySelect } from '../components/gear/Rarity/RaritySelect'


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
    const [selectedRarity, setSelectedRarity] = useState(Rarities[0])
    const [selectedEnhance, setEnhance] = useState(0);
    const selectedSubstats = new GearSelection();

    return (
        <Box id="gear-wrapper" sx={gearStyle.wrapper}>
            <Box id="gear-center-container" sx={gearStyle.centerContainer}>
                <Box id="gear-grid" sx={gearStyle.grid}>
                    <Box id="gear-grid-row-1" sx={gearStyle.gridRow}>
                        <Box id="gear-grid-rarity-select" sx={{ marginTop: '5px' }}>
                            <RaritySelect selectedRarity={selectedRarity} onSelect={setSelectedRarity} />
                        </Box>
                    </Box>
                    <Box id="gear-grid-row-2" sx={gearStyle.gridRow}>
                        {/*<EnhanceSelect selectedEnhance={selectedEnhance} onSelect={setEnhance} />*/}
                    </Box>
                    <Box id="gear-grid-row-3" sx={gearStyle.gridRow}>
                        {/*<SubstatSelect substats={selectedSubstats}/>*/}
                    </Box>
                    
                </Box>
                <Box id="gear-compute" sx={gearStyle.compute}>
                    <Box onClick={() => {console.log(selectedEnhance)}}>
                        Compute
                    </Box>
                </Box>
            </Box>
        </Box>
        
    )
}