import GearSelection from '../objects/GearSelection'
import { Rarities, Rarity, RarityToColor } from '../objects/Rarity'
import { Box } from 'rebass'
import { useState } from 'react'
import EnhanceSelect from '../components/gear/enhance/EnhanceSelect'
import EnhanceSlider from '../components/gear/enhance/EnhanceSlider'
import SubstatSelect from '../components/gear/substat/SubstatSelect'
import RaritySelect from '../components/gear/rarity/RaritySelect'
import calcMinMax from '../data/calculation/calcMinMax'


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
        display: 'flex',
        justifyContent: 'center',
        margin: '5px',
    },
    compute: {
        display: 'flex',
    }

}

export default function gear(props) {
    const [selectedRarity, setSelectedRarity] = useState(Rarities[0].name)
    const selectedSubstats = new GearSelection();
    return (
        <Box id="gear-wrapper" sx={gearStyle.wrapper}>
            <Box id="gear-center-container" sx={gearStyle.centerContainer}>
                <Box id="gear-grid" sx={gearStyle.grid}>
                    <Box id="gear-grid-row-1" sx={gearStyle.gridRow}>
                        <RaritySelect selectedRarity={selectedRarity} onSelect={setSelectedRarity} />
                    </Box>
                    <Box id="gear-grid-row-2" sx={gearStyle.gridRow}>
                        {<EnhanceSlider/>}
                    </Box>
                    <Box id="gear-grid-row-3" sx={gearStyle.gridRow}>
                        {<SubstatSelect substats={selectedSubstats}/>}
                    </Box>
                    
                </Box>
                <Box id="gear-compute" sx={gearStyle.compute}>
                    <Box onClick={() => {console.log(selectedRarity + " ")}}>
                        Compute
                    </Box>
                </Box>
            </Box>
        </Box>
        
    )
}