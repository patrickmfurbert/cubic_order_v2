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
            "READ: The entrance to the grotto is a narrow cavern that leads to a murky pool of water.",
            "Elder Colbu Kaz and Elder Ushru wait here for the contestants to return.",
            "Though the narrow cavern looks like a dead end, characters who enter the pool of water, or who succeed on a DC 13 Wisdom (Perception) check, notice that the tunnel dips below sea level. The rest of the cavern beyond this location is underwater.",
            "Race Progression. It takes the characters 1 round to dive into the water and traverse this room.",
        ]
    },
    {
        location: "E2: Kelp Tangle",
        descriptions: [
            "READ: The light that trickles in from the grotto’s entrance is blotted out by the thick patches of kelp that fill this underwater chamber. The tops of the kelp fronds brush the ceiling, but between the stalks you can spot a glimmer of light coming from farther ahead.",
            "This is the first fully submerged chamber of the grotto. The characters must make a DC 15 Strength (Athletics) group check as they try to swim through the mass of kelp (see the Player’s Handbook for the rules on group checks). The result of this check determines the time it takes them to move through the chamber.",
            "Race Progression. If the group check is successful, it takes the characters 1 round to traverse the room; otherwise, it takes 2 rounds.",
        ]
    },
    {
        location: "E3: Cavern Fork",
        descriptions: [
            "READ: Silvery moonlight filters in through a gap in the cavern’s stone ceiling. Ahead, the path through the grotto splits into two tunnels: one to the south and one to the east.",
            "If the rival party entered the grotto first, they take the southern path at the fork (leading to areas E7, E8, and E9). Vida Boheme lingers at the fork, waiting for the characters and then encouraging them to take the eastern path (leading to areas E4, E5, and E6). If the characters try to take the southern path instead, Maggie blocks their way and defends herself if attacked. If the characters take the eastern path, Maggie waits until they’re gone and then follows the rest of her group.",
            "Race Progression. If the characters dawdled while choosing which path to take, it takes them 2 rounds to traverse the room; otherwise, it takes them 1 round.",
        ]
    },
    {
        location: "E4: Ghostgrass Patch",
        descriptions: [
            "READ: The walls, ceiling, and floor of this chamber are covered in bioluminescent algae, which emits a faint bluish glow that dimly lights the wide cavern. Two large, jagged stone pillars, also coated with algae, stand at opposite ends of the chamber. Surrounding the far pillar, in front of the exit from this cavern, is a thick patch of bone-white sea grass.",
            "The pale plants blocking the exit to the cavern are ghostgrass, a carnivorous variety of sea grass. A creature that tries to swim past the ghostgrass must succeed on a DC 16 Dexterity saving throw or take 3d6 necrotic damage and be restrained. A restrained creature takes the damage again at the start of each of its turns until it escapes.",
            "Algae. A character can harvest some of the algae from the cavern walls with a successful DC 11 Intelligence (Nature) or Wisdom (Survival) check. A harvested patch of algae can be used as a portable light source, shedding dim light in a 10-foot radius. Algae removed from the water dies and ceases to glow after 1 hour.",
            "Race Progression. It takes at least 2 rounds to traverse this chamber, plus the number of rounds it takes for characters who are caught in the ghostgrass to get free. If any characters stopped to harvest algae, add 1 round to the total.",
        ]
    },
    {
        location: "E5: Landslide",
        descriptions: [
            "READ: The tunnel opens into a cavernous space. Rays of moonlight shine through a wide crack in the ceiling, which sits ten feet above the water level. One side of the chamber is covered in the crumbled and muddy remains of a landslide. As you swim into this area, ripples course through the water as more rocky debris begins to slide toward you.",
            "Each character must make a DC 14 Dexterity saving throw, taking 4d6 bludgeoning damage from the landslide on a failed save, or half as much damage on a successful one.",
            "Hidden Cave. A character who explores this cave discovers a vial containing a potion of healing and a soggy but usable spell scroll of thunderwave.",
            "Race Progression. It takes at least 2 rounds to traverse the room. If no character succeeded on the check to locate the exit, add 2 rounds to the total. If a character stopped to search the hidden cave, add 1 round to the total.",
        ]
    },
    {
        location: "E6: Quipper Den",
        descriptions: [
            "READ: A school of tiny fish, their bodies shimmering in the dim light, swirls in formation like an undulating silvery pillar.",
            "A swarm of quippers swims in the middle of this cave. The swarm attacks characters who move within 10 feet of it or deal damage to it. The swarm pursues the characters into area E10 or back into E5 if it isn’t killed.",
            "Race Progression. It takes at least 1 round to traverse this chamber. Keep track of how many rounds of combat the party spends fighting the swarm, and add that number of rounds to the total.",
        ]
    },
    {
        location: "E7: Octopus’s Garden",
        descriptions: [
            "READ: After swimming through a small patch of sea grass, you emerge into a long cavern. The water here doesn’t quite reach the ceiling, leaving a small pocket of air near the top. A slight crack in the ceiling allows moonlight to filter through. At the center of the cavern is a pit whose floor is thirty feet deeper than the rest of the cavern—and you catch the faint glint of metal at the bottom.",
            "A giant octopus dwells at the bottom of the pit and attacks anyone who enters it. A character who enters the pit and succeeds on a DC 17 Wisdom (Perception) check notices the octopus at the bottom and is not surprised when it attacks. If reduced to 13 hit points or fewer, it uses Ink Cloud and moves 10 feet away, hoping the characters leave it alone.",
            "Treasure. Once the octopus is defeated, a character who searches the bottom of the pit finds 57 sp and a pouch containing dust of dryness in the form of eight marble-sized pellets that have absorbed hundreds of gallons of water. When a pellet is smashed, the act releases a 15-foot cube of water.",
            "Race Progression. It takes at least 1 round to traverse this chamber. Keep track of how many rounds the party spends fighting the octopus and add that number to the total. If one or more characters take the time to search the pit, add 1 round to the total.",
        ]
    },
    {
        location: "E8: Riptide Tunnel",
        descriptions: [
            "READ: This tunnel rises at a steep incline and contains a strong, opposing current. A heavy stone tablet covered in glyphs and wreathed in sea grass rests on the tunnel floor.",
            "The tunnel is 30 feet long, and the current rushing through it makes swimming northward difficult. A character who wants to swim against the current must make a DC 15 Strength (Athletics) check. On a failed check, the character makes no progress on their turn.",
            "Tablet. A detect magic spell reveals that the tablet radiates an aura of evocation magic. The tablet has AC 15, 10 hit points, and immunity to poison and psychic damage. Destroying the tablet causes the current to subside, allowing creatures to travel through the tunnel without resistance.",
            "Race Progression. Count the number of rounds it takes for the characters to reach area E9 by swimming against the current. If the characters destroy the tablet, they can swim the tunnel’s length in 2 rounds.",
        ]
    },
    {
        location: "E9: Dead End?",
        descriptions: [
            "READ: The tunnel opens into a smooth-walled cavern that appears to be a dead end",
            "An exit tunnel is hidden behind some rocks on the east side of the chamber. A character can locate the exit in one of two ways:",
            "\tA character can spend 1 round searching the east wall, then succeed on a DC 11 Wisdom (Perception) check.",
            "\tA character can spend 1 round feeling the currents, finding the exit with a successful DC 11 Wisdom (Survival) check.",
            "If no character succeeds on either check, the character who rolled highest eventually locates the exit, but it takes more time. A character who succeeds on either check by 5 or more also notices a cave concealed behind the kelp on the south side of the chamber.",
            "Concealed Cave. A character who searches this cave finds three potions of healing, likely stashed here by a hopeful contestant planning to gain an advantage in this race.",
            "Race Progression. It takes at least 1 round to traverse the room and 1 round to find the eastern exit (or 2 rounds if no character succeeded on a check to locate the exit). If a character stopped to search the concealed cave, add 1 round to the total.",
        ]
    },
    {
        location: "E10: Moonshark Lair",
        descriptions: [
            "READ: Silvery light dances along the walls of this underwater cave. The water here is a little warmer, and a gentle current pulls you toward a crevice in the south wall that emits shimmering golden light. Prowling around the cave’s pillars is a massive shark. A gold amulet hangs from a thick rope tied around the shark’s body, and a silver spear protrudes from its side.",
            "The amulet is the Emerald Eye—the goal of this race. The silver spear lodged in the shark’s hide has been enchanted by the divine power of Sehanine the Moon Weaver. The shark uses the giant shark stat block. A character within 5 feet of the shark can use an action to try to dislodge the spear, doing so with a successful DC 13 Strength (Athletics) check. While the spear is lodged in the shark, apply these changes to the shark’s stat block:",
            "The shark glows with silvery illumination, shedding bright light in a 10-foot radius and dim light for an additional 10 feet.",
            "If the shark uses its action to make a Bite attack but misses, it can use a bonus action to swim up to 25 feet. This movement doesn’t provoke opportunity attacks.",
            "The shark immediately attacks any creature that enters its chamber. Depending on how quickly the characters moved through the grotto, the encounter could go one of three ways:",
            "Fast Pace (10 or Fewer Rounds). The characters outpaced the rivals. The rivals don’t appear until after the encounter with the shark is resolved.",
            "Moderate Pace (Between 11 and 15 Rounds). The characters beat the rivals to the chamber, but not by much. The rivals enter the chamber on the third round of combat and roll initiative. Unless the rivals are hostile toward the characters, they aid the characters in the fight against the shark; otherwise, they focus on acquiring the amulet or try to sabotage the characters (though these attempts are never intentionally lethal).",
            "Slow Pace (16 or More Rounds). The rivals get to the chamber ahead of the characters. When the characters arrive, the rivals have reduced the shark to 75 hit points. The characters roll initiative when they enter the chamber.",
            "Emerald Eye. A druid of Jigow cast animal friendship on the shark earlier today and tied the Emerald Eye around its body, then made a speedy getaway. A character can cut the amulet free by attacking the rope around the shark instead of the shark itself. The rope has AC 17 and 5 hit points. It can be removed as an action if the shark is killed or incapacitated. The amulet, which is made of gold and emeralds, is worth 500 gp—though no one in Jigow will buy it, since it must be returned the town elders once the contest is completed.",
            "Moonshark’s Defeat. When the shark is reduced to 0 hit points, it thrashes about in its death throes and crashes into the stone pillar in the south part of the room, which tumbles into the south wall and cracks it open. Read:",
            "READ: The dying shark slams into the stone pillar in the south end of the cavern. The pillar cracks under the force, teeters, then crashes down against the south wall. The wall fractures and collapses, revealing a passage awash with golden light.",
        ]
    },
    {
        location: "E11: Moon Weaver’s Gateway",
        descriptions: [
            "READ: The cramped passage bends upward until the tunnel becomes vertical. Golden light radiates from the upper end of the shaft.",
            "Characters who swim through this passage break the surface of the water and emerge in a glowing, air-filled chamber (area E12).",
        ]
    },
    {
        location: "E12: Prayer Site of Sehanine",
        descriptions: [
            "READ: The watery environment gives way to a cavern dotted with trees and pools of water. The walls are covered in vines of green ivy interspersed with colorful flowers. Part of the cavern is open to the sky. In the middle of the cavern is a sphere of pale light surrounding a crystal pedestal, upon which rests a golden pendant attached to a fine golden chain.",
            "The object on the crystal pedestal glitters like the sunrise. This is the Jewel of Three Prayers, a Vestige of Divergence that will drive the course of the adventure from now on. The Jewel of Three Prayers is currently in its Dormant State (see appendix B for the description of this magic item).",
            "If the rivals are present, they are hesitant to touch the jewel, giving the characters the first opportunity to do so. If the characters are also hesitant, Noxeema steels herself and strides forward to claim it (see “Disputing Destiny” below). Otherwise, as soon as one of the characters touches the jewel, the entire party experiences the following vision:",
            "The light around the pedestal fades as a spectral figure in the form of a male human rises from the amulet. He is dressed in leather armor and a tattered red cape and wears a shield. His face is framed by curly brown hair and bears a melancholic expression. He pleads, “I am imprisoned. Please help me.” Suddenly, the ground vanishes beneath your feet, and you fall, tumbling through a vortex of golden light. You fall deeper, deeper, deeper, then suddenly stop. The golden light subsides, and you find yourself suspended in a pitch-black expanse. You feel water buoying you. A vermilion light appears in the distance, illuminating the melancholy warrior, who is shackled to the ground by disgusting strands of a fleshy, crimson substance. He raises his gaze to the heavens and, sobbing, chokes out, “Moon Weaver, I beg of you. Guide those with the power to save me to the site where first I prayed to you.” He looks around, and his eyes settle on you. “Oh, gods, there you are! My name is Alyxian. I am lost in darkness. Long ago, I prayed to the Change Bringer in the heart of a temple of evil. I beg you, take my jewel and…” You feel consciousness leaving you, as if the pressure of the water were crushing the life out of you. Alyxian’s voice is the last thing you hear before you pass out. “Save me. Please.”",
            "Hostile Rivals. The characters awaken to discover that the rivals have absconded with both the Emerald Eye and the Jewel of Three Prayers.",
            "Disputing Destiny. If Noxeema or another one of the rivals touched the Jewel of Three Prayers, they are the recipients of the vision instead. The rivals fall unconscious for 1 minute, and it is up to the characters to decide what to do with them. In this scenario, which is examined further in chapter 2, the rivals are the “heroes” of the story, and the characters must decide if they want to aid their rivals or take back the jewel and claim their own heroic destiny.",
            "",
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
                {locations.map((location, index) => (
                    <Card key={location} sx={{ my: '10px' }}>
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