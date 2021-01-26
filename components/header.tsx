import React from 'react'
import { Box } from 'rebass'
import Link from 'next/link'
import { Color } from '../styles/theme'

const headerStyle = {
    header: {
        background: Color.theme.primary,
        color: Color.theme.secondarybeta,
        padding: '20px 0px 20px 10px',
    },
    header_layout: {
        listStyleType: 'none',
        overflow: 'hidden',
        margin: 0,
        py: '5px',
    },
    header_buttons: {
        background: Color.theme.primary,
        margin: [1, 2],
        fontSize: [2, 3, 4],
        display: 'inline',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontWeight: 'bold' as 'bold',
        ':hover': {
            color: Color.theme.secondary,
        },
    },
}

export default function Header(){
    return (
    <Box sx= {headerStyle.header}>
        <Box sx={headerStyle.header_layout}>
            <Box sx={headerStyle.header_buttons}>
                <Link href="/">Home</Link>
            </Box>
            <Box sx={headerStyle.header_buttons}>
                <Link href="/gear">Gear</Link>
            </Box>
        </Box>
    </Box>
    )
}