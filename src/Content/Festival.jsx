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
        location: 'Best Pies in the Jumble',
        descriptions: [
            "Best Pies in the Jumble (Agatha Silverspoon makes the best pies in the Jumble) - Win Medal of the meat pie(2d4+2 temp hit points) Cannot compete again until you take a long rest Rival Irvan Wastewalker (Mrs Doubtfire)", 
            "Read the description: ",
            "two",
            "two",
            "two",
            "two",
            "two",
            "two",
            "two",
            "two",
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