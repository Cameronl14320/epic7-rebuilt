import { Box } from 'rebass'
import { useState } from 'react'
import GearSelection from '../../../objects/GearSelection';

interface FieldProps {
    id : number;
    substats : GearSelection;
}

export default function SubstatField(props) {
    //const { id, substats } = props;
    const [revealed, setReveal] = useState(false);

    return (
        <></>
    )
}