import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TownMap from '../assets/town_map.png'

export default function Map() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 10
        }}>
            <img
                src={TownMap}
                width='100%'
                height='70%'
            />
        </Box>
    );
}