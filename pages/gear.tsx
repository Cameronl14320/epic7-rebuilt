import GearSelection from '../objects/GearSelection'
import GearSettings from '../objects/GearSettings'
import {SubStat, SubArray} from '../objects/SubStat'
import { Box } from 'rebass'
import enhanceSelect from '../components/gear/enhanceSelect'
import raritySelect from '../components/gear/raritySelect'

const selection : GearSelection = new GearSelection();
const settings : GearSettings = new GearSettings(0, 0 ,0);

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
    compute: {
        display: 'flex',
    }
}

export default function gear(props) {
    return (
        <Box id="gear-wrapper" sx={gearStyle.wrapper}>
            <Box id="gear-center-container" sx={gearStyle.centerContainer}>
                <Box id="gear-grid" sx={gearStyle.grid}>
                    <Box id="gear-grid-row-1">
                        <Box id="gear-grid-rarity-select">{raritySelect({settings})}</Box>            
                    </Box>    
                    <Box id="gear-grid-row-2">
                        <Box id="gear-grid-enhance-select">{enhanceSelect({settings})}</Box>
                    </Box>    
                    <Box id="gear-grid-row-3">
                        <Box id="gear-grid-substat-select">substat</Box>
                    </Box>    
                </Box>
                <Box id="gear-compute" sx={gearStyle.compute}>
                    456
                </Box>
            </Box>
        </Box>        
    )
}