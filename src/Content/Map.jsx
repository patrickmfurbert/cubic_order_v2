import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TownMap from '../assets/town_map.png'
import StarMap from '../assets/dnd_star_map.png';

const images = [TownMap, StarMap]

export default function Map() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

        }}>

            {images.map((map, index) => (
                <Box sx={{ my: '5px' }} key={index}>
                    <Card>
                        <CardContent>

                            <img
                                src={map}
                                width='100%'
                                height='70%'
                            />
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </Box>
    );
}