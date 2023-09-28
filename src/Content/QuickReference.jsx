import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const tips = [
    {
        tip: "Combat",
        descriptions:[
            "The game organizes the chaos of combat into a cycle of rounds and turns. A round represents about 6 seconds in the game world.",
            "Initiative: d20 + dexterity modifier + bonus from feats/magic(ie Alert +5 to initiative)",
            "Surprise: If no party is attempting to be stealthy, they both notice each other. Hiding side has Dexterity(stealth) checks against anyone hiding with the passive Wisdom(Perception on the oppositing side). Any character that does not notice a threat is suprised at the start of the encounter.",
            "If you are surprised you cannot move or take action on your first turn. Also you cannot take a reaction until that turn ends.",
            "You may not hide from a creature that can clearly see you",
            "Every character has one action and bonus action they can use on their turn",
            "Every character has on reaction they can use during each round of combat"
        ],
    },
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
        tip: "Swimming",
        descriptions: [
            "Unless aided by magic, a character without a swimming speed can’t swim indefinitely. After each hour of swimming, a character must succeed on a DC 10 Constitution saving throw or gain 1 level of exhaustion.",
            "A creature with a swimming speed—including a character with a ring of swimming or similar magic—can swim all day without penalty and uses the normal forced march rules in the Player’s Handbook.",
            "Swimming through deep water is similar to traveling at high altitudes because of the water’s pressure and cold temperature. For a creature without a swimming speed, each hour spent swimming at a depth greater than 100 feet counts as 2 hours for the purpose of determining exhaustion, and swimming for an hour at a depth greater than 200 feet counts as 4 hours.",

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