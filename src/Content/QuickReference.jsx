import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const tips = [
    {
        tip: "Underwater Combat",
        descriptions: [
            "Creatures that are fully submerged in water have resistance to fire damage.",
            "Creatures that don't have a swimming speed have disadvantage on melee weapon attacks unless the weapon is a dagger, javelin, shortsword, spear, or trident. These weapons roll attack as normal.",
            "Ranged weapon attacks are rolled with disadvantage unless the weapon is a crossbow, net, dart, javelin, spear, trident, or other thrown weapon.",
            "Underwater spell attacks roll as normal without disadvantage.",
            "Water counts as difficult terrain for calculating moving speed.",
        ]
    },
    {
        tip: "Movement/Travel speed",
        descriptions: [
            "A character's movement speed is the distance they can move in a single round, which is about six seconds of in-game time. For example, a speed of 30 feet per turn is equal to 3.4 miles per hour.",
            "Travel Pace options: Fast, 30 miles per day | 4 miles per hour | 400ft per minute | - 5 penalty to passive Wisdom(Perception) ",
            "Difficult terrian - you move half speed",
            "While Climbing or swimming your movement is halved (unless you have a swimming speed). Climbing a slippery verifical surface might require an Stength(Athletics) check, and gaining distance in rough water requires a successfuly Strength(Athletics) check.",
            "LongJump: you can cover number of feet equal to your strength score if you move at least 10 feet first. If you do a standing jump, you move half that distance. If you have to land in difficult terrain you need to do a DC 10 Dexterity.",
            "HighJump: same as Long Jump except distance is 3 + strength modifier(athletics check for higher jump). This can be extended if you reach your arms into the air + 1.5 times your height",
        ]
    },
    // {
    //     tip: "",
    //     descriptions: [
    //         "",
    //         "",
    //     ]
    // },
    // {
    //     tip: "",
    //     descriptions: [
    //         "",
    //         "",
    //     ]
    // },
    // {
    //     tip: "",
    //     descriptions: [
    //         "",
    //         "",
    //     ]
    // },
]

export default function QuickReference() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }}>
            {tips.map((tips, index) => (
                <Card sx={{ my: '10px' }}>
                    <CardContent>
                        <Typography key={tips.tip} variant='h5'>
                            {tips.tip}
                        </Typography>
                        {tips.descriptions.map((description, index) => (
                            <Typography key={description}>
                                • {description}
                            </Typography>
                        ))}
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}