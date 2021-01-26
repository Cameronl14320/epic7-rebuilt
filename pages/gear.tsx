import GearSelection from '../objects/GearSelection'
import GearSettings from '../objects/GearSettings'
import {SubStat, SubArray} from '../objects/SubStat'
import { Box } from 'rebass'

const selection = new GearSelection();
const settings = new GearSettings(0, 0 ,0);

const gearStyle = {
    wrapper: {
        display: 'flex',
        justifyContent: "center",
    },
    centerContainer: {

    },
    grid: {
        display: 'grid'
    },
    compute: {
        display: 'flex'
    }
}

export default function gear(props) {
    return (
        <Box id="gear-wrapper" sx={gearStyle.wrapper}>
            <Box id="gear-center-container" sx={gearStyle.centerContainer}>
                <Box id="gear-grid" sx={gearStyle.grid}>
                    <Box id="gear-grid-row-1"></Box>    
                    <Box id="gear-grid-row-2"></Box>    
                    <Box id="gear-grid-row-3"></Box>    
                </Box>
                <Box id="gear-compute" sx={gearStyle.compute}>
                    456
                </Box>
            </Box>
        </Box>        
    )
}