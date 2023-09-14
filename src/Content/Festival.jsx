import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const locations = [
    {
        location: 'Best Pies in the Jumble',
        descriptions: [
            "Best Pies in the Jumble (Agatha Silverspoon makes the best pies in the Jumble) - Win Medal of the meat pie(2d4+2 temp hit points) Cannot compete again until you take a long rest Rival Irvan Wastewalker (Mrs Doubtfire)", 
            "Read OUTLOUD: ",
            "The savory scents of meat, pastry, and spices fill the air around a three-story building mounted on the back of a gigantic tortoise. A cooking stand and a festival stage with a long table are set up at the tortoise’s feet, where an orc stands over a massive oven. She bustles from the oven to the stage and back, placing delicious-looking hand pies at each seat and stacking more of them on a cooling rack nearby.       People are already gathered on stage, including a scrawny young human with a mop of brown hair and a scruffy beard. As you approach, the orc calls out in a melodic baritone, “Come to sample the best meat pies this side of the Wastes, yes? I sell ’em for meals up there, but I’m running pie-eating contests down here all day, if you’ve got an orc-sized stomach.",
            "Male Drow: +1",
            "Female Halfling: +3",
            "Irvan Wastewalker: +2 on checks, +3 on saving throws (Doubtfire)",
            "Irvan is friendly toward characters who competed in the contest.",
        ]
    },
    {
        location: 'One-Shot Solution',
        descriptions: [
            "One-Shot Solution (Sharpwatch an aarakocra will swoop down and pluck anyone up from the maze) - Win Medal of the Maze (Advantage on Wisdom Checks and know the Quickest route to any nonmagical path or maze for 1 hour)", 
            "Read OUTLOUD: ",
            "Near the entrance to the festival grounds, a maze has been constructed out of four-foot-tall walls of wooden planks lashed together with ropes and propped up between sandbags. Banners are hung over the openings to the maze, signifying the entrance and the exit. The passageways of the maze are five feet wide. Off to the side, a tan-feathered aarakocra sits on a chair thirty feet above the ground, giving him a vantage point where he can see the whole area. A small crowd is cheering on and heckling the people inside. Near the entrance, an ogre in leather armor is encouraging a reluctant goblin in a breastplate to give the maze a try.",
            "It costs 3 sp to participate in this challenge. When a character enters the maze, they must make a DC 14 Wisdom (Survival) check to try to find the correct path. On a success, the character traverses the maze in one shot and emerges victorious on the other side.",
            "On a failed check, the character gets lost and ends up in one of the maze’s dead ends. A lost character can make a DC 18 Dexterity (Stealth) check to try to backtrack quickly out of the dead end, avoiding Sharpwatch’s notice on a success; the character can then make another Wisdom (Survival) check to navigate the maze. If either of these checks is a failure, Sharpwatch swoops down and plucks the character from the maze, depositing them outside.",
            "A character can study the maze from the outside and make a DC 14 Intelligence (Investigation) check. If this check succeeds, the character has advantage on the check made to navigate the maze.",
            "Enter the Maze",
            "Success: Maggie  Keeneeyes(Vida Boheme) approaches anyone who succesfully finishes the maze and congratulates them. Dermot(Chi Chi Rodriguez) follows the same.",
            "Vida asks to send a message to  Ayo(Noxeema Jackson) - “It’s nothing urgent,” she says, “but if you find my friend Ayo, would you tell her Dermot’s wondering what the plan is after the closing ceremony? She has dark hair and blue skin. She said she was going to compete in a contest by the river—I think.",
        ]
    },
    {
        location: 'The Ifolon Plunge',
        descriptions: [
            "Omo a goblin refs this challenge (Medal of the conch - gain swimming speed equal to your walking speed for an hour)", 
            "Read the description: ",
            "Several people are gathered on the piers, arguing among themselves and venting their ire at a spry goblin who responds to their anger with an amused expression. Suddenly, a brash voice cuts through the chatter, and a blue-skinned woman pushes her way through the crowd and stands protectively in front of the goblin, yelling, “She’s not gonna say it again! If you’re here with a team, only one member of your team can participate in the challenge! The rules are clear, and if you can’t handle it, get off the pier!” After just a couple of seconds, small groups of people begin to quietly murmur among themselves.",
            "Noxeema and Dr. Frank-N-Furter brush off any attempt to socialize at first",
            "Spear is 75ft away from the dock",
            "Anyone traveling more than 30 feet on their turn must make an athletics check DC 14 at the end of the turn. Failure they get 1 level of exhaustion and pushed 15 feet downstream.",
            "You can try to get the spear from anyone who has it. ",
            "Ayo(Noxeema Jackson) is impressed by anyone who participated, unless they cheated to participate. She invites anyone to meet the other adventuring party at sundown",
        ]
    },
    {
        location: 'Call to Arms',
        descriptions: [
            "Vars runs this. Gives winner a medal of muscle ", 
            "Read the description: ",
            "You approach a brick building with a sign that reads, “Beefslab Butchers.” A simple table and two chairs have been set up outside. Both chairs are currently occupied by people wearing the armor of the Aurora Watch, their elbows braced against the table and their hands locked in an arm-wrestling duel. Two dozen festivalgoers watch them silently, until—SLAM!—the occupant of the left chair pushes her opponent’s arm to the table and the crowd erupts in whoops and cheers.",
            "Vida Boheme",
            "Maryl Bronzefang competes only against the best, and to challenge her, a character must first defeat one of her drow companions. Maryl returns to the table after at least one character has accomplished this, casting a challenging grin at the victor and inviting them to try their luck against her. The first character to defeat Maryl receives a challenge from Maggie. Otherwise, Maggie challenges Maryl after all other contestants fall by the wayside. These nonplayer characters have the following modifiers to their Strength checks, which come into play during the arm-wrestling contest:",
            "Vida Boheme: +4",
            "Maryl Bronzefang: +4",
            "Female Drow: +3",
            "Contest Rules. In any arm-wrestling match, have both contestants make a Strength (Athletics) check with a DC equal to 10 + the other contestant’s Strength modifier. If one contestant succeeds and the other fails, the one who succeeded wins the match. Repeat the checks as needed until one contestant fails and the other succeeds.",
            "A character who loses a match and wants to try again must first succeed on a DC 15 Charisma (Deception or Persuasion) check. On a failed check, the character is laughed away by the crowd. If a character loses to the same foe twice, that contestant declines any further challenges from that character.",
            "Betting. A character can place a bet with Vars by handing him 5 sp and declaring who they think will win the next match. A character whose choice wins the match receives 9 sp, and Vars pockets 1 sp.",
        ]
    },
    {
        location: 'Wetwalks Paddywhack',
        descriptions: [
            "This game requires teamwork and skill with a blade.", 
            "Read the description: ",
            "On the eastern edge of the Jumble, the docks rise upward from the river to run alongside wooden shacks built on stilts, casting crooked shadows over the wetlands below. Some areas of the wetlands have been cordoned off to create rice paddies, which are now ready for harvest. Blue and green banners wave over one end of the docks, where two elderly goblin farmers preside over the contest. “You know how it goes!” one hollers out in a reedy voice. “First team to harvest the rice from their section wins!”",
            "This event is managed by two neutral good goblins named Beetle and Zag. Their farm is jointly run by the Gakthash and Uvuroh goblin clans, and every year, the goblin couple uses the festival competitions as a labor-saving way to harvest their crops.",
            "After the pie-eating contest in area J1, Irvan(Doubtfire) can also be found relaxing here (They did the pie eating contest)",
            "Harvesting the Rice. A team of two is required to participate in this contest, and there is no entry fee. If a character needs a partner, Irvan grudgingly volunteers to be their teammate for the event. When a team enters the contest, they are asked to designate which is the cutter (who cuts the stalks down) and which is the gatherer (who gathers the stalks and prepares them for drying). Zag provides the cutter with a sickle before Beetle directs the teams to the paddies and asks them to await the signal to start.",
            "Each Team is responsible for 40 ft squared area of paddy, ",
            "Orc Team: Athletics +3, Sleight of Hand +0",
            "Drow Team: Athletics +0, Sleight of Hand +2",
            "At the end of each minute, each team’s cutter must make a DC 11 Strength (Athletics) check; on a success, the cutter clears a 5-foot-square section of their paddy. Once a section has been cleared, the team’s gatherer must spend 1 minute trying to gather and bundle the shorn rice, doing so with a successful DC 11 Dexterity (Sleight of Hand) check; a failed check causes the team’s cutter to make their next Strength (Athletics) check with disadvantage, as the gatherer’s bundling work gets in the way. The first team to clear and bundle the rice from all four 5-foot squares of their strip of paddy wins (ties are possible).",
            "Treasure. Beetle and Zag award each member of the winning team a copper medal of the wetlands (see appendix B) engraved with a sheaf of rice, hung on a necklace woven of reeds.",
        ]
    },
    {
        location: 'Herding the Horizonbacks',
        descriptions: [
            "This challenge tests the participants’ acrobatic ability and skill with handling animals", 
            "Read the description: ",
            "Festivalgoers are clustered around a paddock full of young horizonback tortoises that are shuffling around inside the enclosure. The fifteen-foot-tall tortoises are being tended by young herders, who are fitting them with makeshift bridles. These individuals are overseen by a tall, attractive orc who makes sure the bridles are attached correctly. The orc waves at you and says, “Have you come to join the horizonback migration? There’s a tortoise for each of you, and a medal to be won if you make it to the end in one piece. Last year we had to rebuild three houses after the festival!”",
            "You see Doubtfire leaving the Adan, the supervisor of the Horizonbacks who suddenly has a look of concern as he see the adventures approach. Unfortunately this competition is closed for today.  Thank you for your interest. Puts up a closed sign at the competition",
        ]
    },
    {
        location: 'Riddles and Rhymes',
        descriptions: [
            "This event challenges a character’s intellect with a series of riddles - you need 2 out of the three", 
            "Read the description: ",
            "An elderly goblin in blue robes presides over a set of three tables. One table holds a wooden box, the second displays a glittering star map of the Exandrian sky, and on the third rests a row of colored bottles. A banner hanging over the setup reads, “Test your wit with me, against these riddles three.”",
            "Elder Colbu Kaz, a chaotic neutral, goblin priest, created these three puzzles. Each attempt to answer one riddle costs 2 sp. Answering at least two of the riddles correctly is enough to win the contest (see “Treasure” below). Various other challengers are trying to solve the riddles, including Galsariad Ardyth(Frank-N-Furter). This clever drow solves two of the riddles after a total of four guesses. If the characters solve each riddle on the first try, he is impressed (see “Meeting Galsariad” below)",
            "Table 1: The Box’s Riddle. On this table are a locked wooden box and four metal keys.",
            "Key Metals: bronze, copper, silver, gold",
            "Lock sea theme: Bronze dragon - Arcana check DC - 17 I will tell them that this dragon comes in third place",
            "A character can make a DC 10 Intelligence check to recognize that the metallic hues of the keys and the first two lines of the riddle are talking about not just metals but also types of metallic dragons. A character who succeeds on a DC 13 Intelligence (Arcana or History) check recognizes the shape of the dragon lock or the box’s aquatic decorations as indicative of a bronze dragon; if a character saw someone get shocked by lightning after an incorrect guess, the DC for this check is reduced to 11.",
            "Table 2: The Star Map’s Riddle. The star map resting on this table depicts the moons and constellations visible in the Exandrian night sky",
            "A character who succeeds on a DC 13 Intelligence (History or Religion) check recalls the stories regarding Exandria’s moons, recognizing the second line as referring to the superstitions surrounding Ruidus and the last line as referring to the divine portfolio of Sehanine the Moon Weaver. A character who succeeds on a DC 11 Wisdom (Perception) check determines that there is only one red object on the star map—Ruidus",
            "Table 3: The Bottles’ Riddle. On this table is a row of seven small bottles filled with colored liquids, and the following riddle in Common:",
            "Bottle Five is the correct one, a player has 2 chances to guess correctly",
            "Intelligence check, DC12",
            `Bottles 2 and 6 are both directly to the right of a purple bottle and thus must contain blight brew.
            Bottles 2, 4, and 6—the “even” ones—should be avoided, as they hold only “pain.”
            If the sky-blue bottle leaves a “stain,” it must be harmless juice, but not the correct answer.
            The first and last bottles must also be juice, as they are “tasty” but won’t win the riddle`,
            "Characters can make multiple Intelligence checks to gain multiple hints, but a character who fails a check can’t make another until they drink from a bottle.",
            "Detect magic spell reveals the fifth bottle to be the only one containing magical liquid",
        ]
    },
    {
        location: 'Final Contest',
        descriptions: [
            "This event challenges a character’s intellect with a series of riddles", 
            "Read the description: ",
            "An elderly orc, dressed in deep blue robes, stands atop a platform of crates. He smiles at the crowd. “Mighty warriors, brilliant strategists, you have impressed us with your feats of strength, your incisive wit, and your sturdy bellies,” he booms proudly. “But the main event, as you know, is yet to come. Only two teams will be chosen to compete in the final challenge—a race through the Emerald Grotto, in the depths of which the greatest prize awaits!”",
            `Elder Ushru explains that he and Elder Colbu Kaz will choose two teams from among the festival’s most successful contestants and invite them to engage in a race through a submerged grotto to retrieve a jeweled icon that has symbolized the competitive spirit of Jigow for generations: the Emerald Eye. The winners of the race receive 100 gp and are hailed as the city’s Champions of Merit for the next year.
            Elder Colbu Kaz joins Elder Ushru on the platform, where they consult briefly, pointing at figures in the crowd and whispering to each other. They eventually decide on two teams: the player characters and the rivals. Both groups are invited to follow the elders to the Emerald Grotto to compete in the grand finale.`,
            "The characters and their rivals follow the elders as they wade through the shallows, from one island to another. When they reach the smallest island, Elder Colbu Kaz places several potions of water breathing in front of the contestants—one for each of them. “Their magic lasts for one hour,” he says.",
            "Elder Ushru stands before the mouth of a cave and addresses you and your opponents. “You brave and valiant individuals have triumphed in many challenges this day; now, the final Test of Merit awaits you!” He pulls a palm-sized gold-and-emerald amulet from his robes, holds it aloft, and declares: “This medal’s twin has been placed in the deepest cavern of the Emerald Grotto. Be the first to claim the Emerald Eye and return it to this place to be declared Jigow’s Champions of Merit! Begin now!”",
            "Group Dexterity Check, half must get a 14 or higher, or the rivals enter first",
        ]
    },
    
]

export default function Festival() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            {locations.map((location, outerIndex) => (
                <Card sx={{my: '10px'}}>
                    <CardContent>
                        <Typography key={location} variant="h4">
                            {location.location}
                        </Typography>
                        {location.descriptions.map((description, innerIndex) => (
                            <Typography key={innerIndex}
                                sx={{my: '4px', fontSize: 12}}>
                                {description}
                            </Typography >
                        )
                        )}
                    </CardContent>
                </Card>
            ))}
        </Box >
    );
}