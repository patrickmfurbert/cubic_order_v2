import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const rivals = [
    {
        name: 'Doubtfire',
        dndName: 'Ivan',
    },
    {
        name: 'Noxeema',
        dndName: 'Ayo',
    },
    {
        name: 'Vida Boheme',
        dndName: 'Maggeikeen',
    },
    {
        name: 'Chichi',
        dndName: 'Dermont',
    },
    {
        name: 'Dr. Frank-nFurter',
        dndName: 'Galsariad',
    },

]

export default function Rivals() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }}>
            {rivals.map((rival, index) => (
                <Card sx={{ my: '10px' }}>
                    <CardContent>
                        <Typography key={rival.name}>
                            Name: {rival.name}
                        </Typography>
                        <Typography key={rival.dndName}>
                            COTN Name: {rival.dndName}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}