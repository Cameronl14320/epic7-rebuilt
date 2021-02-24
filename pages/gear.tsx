import GearSelection from '../objects/GearSelection'
import { Rarities, Rarity, RarityToColor } from '../objects/Rarity'
import { Box } from 'rebass'
import { useState } from 'react'
import EnhanceSelect from '../components/gear/enhance/EnhanceSelect'
import SubstatSelect from '../components/gear/substat/SubstatSelect'
import RaritySelect from '../components/gear/rarity/RaritySelect'
import calcMinMax from '../data/calculation/calcMinMax'
import { Helmet } from 'react-helmet'


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
        marginTop: '5px',
    },
    compute: {
        display: 'flex',
        justifyContent: 'center',
    }

}

function calculate(rarity : String, enhance : String) {
    
}

export default function gear(props) {
    const [selectedRarity, setRarity] = useState(Rarities[0].name)
    const [selectedEnhance, setEnhance] = useState(0)
    const [selectedSubstats, setSelected] = useState(new GearSelection());

    return (
        <Box id="gear-wrapper" sx={gearStyle.wrapper}>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>E7 Companion: Gear</title>
            </Helmet>
            <Box id="gear-center-container" sx={gearStyle.centerContainer}>
                <Box id="gear-grid" sx={gearStyle.grid}>
                    <Box id="gear-grid-row-1" sx={gearStyle.gridRow}>
                        <RaritySelect selectedRarity={selectedRarity} onSelect={setRarity} />
                    </Box>
                    <Box id="gear-grid-row-2" sx={gearStyle.gridRow}>
                        {<EnhanceSelect selectedEnhance={selectedEnhance} setEnhance={setEnhance}/>}
                    </Box>
                    <Box id="gear-grid-row-3" sx={gearStyle.gridRow}>
                        {<SubstatSelect substats={selectedSubstats}/>}
                    </Box>
                    
                </Box>
                <Box id="gear-compute" sx={gearStyle.compute}>
                    <Box onClick={() => {console.log(selectedRarity + " " + selectedEnhance + " " + selectedSubstats.toString())}}>
                        Compute
                    </Box>
                </Box>
            </Box>
        </Box>
        
    )
}