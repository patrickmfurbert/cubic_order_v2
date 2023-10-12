import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const locations = [
    {
        location: 'The Craft Finds',
        description: 'Place to search for interesting objects',
        items: [
            {
                name: 'Scroll of Raise Dead',
                price: '500gp',
            },
            {
                name: 'Diamond',
                price: '500gp',
            },
            {
                name: 'Dirty Ring(Ring of X-Ray Vision)',
                price: '200gp',
            },
            {
                name: 'Gold Chain(Amulet of Health)',
                price: '2000gp',
            },
        ],
        href: '',
        NPCs: [
            {
                name: 'Sally the Craft Enthusiast',
                description: "Sally is a middle-aged woman with a warm and welcoming smile. She's passionate about all things craft-related and is a regular at the craft finds store. Her enthusiasm is infectious, and she's always ready to strike up a conversation about the latest crafting trends or share tips and tricks with customers.",
                href: ''
            },
            {
                name: 'Jack the Antique Collector',
                description: "Jack is a retired history teacher who frequents the craft finds store in search of unique and vintage items. He's often found scouring the shelves and bins for hidden treasures from the past. Sam is known for his impeccable sense of style and a keen eye for the historical value of craft items.",
                href: ''
            },
        ]
    },
    {
        location: 'Speak',
        description: "",
        href: '',
        NPCs: [
            {
                name: '',
                description: "",
                href: ''
            },
            {
                name: '',
                description: "",
                href: ''
            },
        ]
    },
    {
        location: 'Speak',
        description: "",
        items: null,
        href: '',
        NPCs: [
            {
                name: '',
                description: "",
                href: ''
            },
            {
                name: '',
                description: "",
                href: ''
            },
        ]
    },
    {
        location: 'Speak',
        description: "",
        href: '',
        NPCs: [
            {
                name: '',
                description: "",
                href: ''
            },
            {
                name: '',
                description: "",
                href: ''
            },
        ]
    },
    {
        location: 'Speak',
        description: "",
        href: '',
        NPCs: [
            {
                name: '',
                description: "",
                href: ''
            },
            {
                name: '',
                description: "",
                href: ''
            },
        ]
    },
    {
        location: 'Speak',
        description: "",
        href: '',
        NPCs: [
            {
                name: '',
                description: "",
                href: ''
            },
            {
                name: '',
                description: "",
                href: ''
            },
        ]
    },
    {
        location: 'Speak',
        description: "",
        href: '',
        NPCs: [
            {
                name: '',
                description: "",
                href: ''
            },
            {
                name: '',
                description: "",
                href: ''
            },
        ]
    },


]

export default function Civitas() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }}>
            {locations.map((location, index) => (
                <Card key={location} sx={{ my: '10px' }}>
                    <CardContent>
                        <Typography key={location.location} variant='h5'>
                            {location.location}
                        </Typography>
                        <Typography key={location.description}>
                            {location.description}
                        </Typography>

                        {location.items && <Typography variant='h6'>
                            Items
                        </Typography>}

                        {location.items?.map((item, index) => (
                            <>

                                <Typography>
                                    {item.name}
                                </Typography>
                                <Typography>
                                    {item.price}
                                </Typography>
                            </>
                        ))}

                        <Typography variant='h6'>
                            NPCs
                        </Typography>

                        {location.NPCs.map((NPC, index) => (
                            <>

                                <Typography variant='h6'>
                                    {NPC.name}
                                </Typography>
                                <Typography>
                                    {NPC.description}
                                </Typography>
                            </>
                        ))}

                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}