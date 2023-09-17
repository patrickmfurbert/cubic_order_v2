import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GroveTable from './GroveTable';


const locations = [
    {
        location: 'E1: Grotto Entrance',
        descriptions: [
            "The entrance to the grotto is a narrow cavern that leads to a murky pool of water.",
            "Elder Colbu Kaz and Elder Ushru wait here for the contestants to return.",
            "Though the narrow cavern looks like a dead end, characters who enter the pool of water, or who succeed on a DC 13 Wisdom (Perception) check, notice that the tunnel dips below sea level. The rest of the cavern beyond this location is underwater.",
            "Race Progression. It takes the characters 1 round to dive into the water and traverse this room.",
        ]
    },
]

export default function Grove() {
    return (
        <>
            <GroveTable />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly'
            }}>
                {/* <Card sx={{ my: '10px' }}>
                    <CardContent>
                        <Typography variant='h5'>
                            Race Progression
                        </Typography>
                    </CardContent>
                </Card> */}
                {locations.map((location, index) => (
                    <Card sx={{ my: '10px' }}>
                        <CardContent>
                            <Typography key={location.location} variant='h5'>
                                {location.location}
                            </Typography>
                            {location.descriptions.map((description, index) => (
                                <Typography key={description}>
                                    • {description}
                                </Typography>
                            ))}
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </>
    );
}