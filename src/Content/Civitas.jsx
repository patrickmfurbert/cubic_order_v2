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
        location: 'Frankenstein Alchemy Lab',
        description: "",
        items: [
            {
                name: 'Ethereal Elixirs: Translucent potions that grant temporary phases through obstacles or enemies',
                price: '500gp',
            },
            {
                name: 'Dragonfire Brew: A fiery red potion that grants the imbiber temporary resistance to fire and the ability to exhale a small burst of flames',
                price: '500gp',
            },
            {
                name: 'Levitation Philtre: A sparkling blue liquid that, when consumed, allows the drinker to float a few inches above the ground for a limited time.',
                price: '200gp',
            },
            {
                name: 'Shadowstep Serum: A mysterious dark potion that grants the ability to teleport short distances in shadows.',
                price: '2000gp',
            },
            {
                name: 'Gorgons Gaze Tonic: A silvery liquid that temporarily bestows the drinker with the ability to petrify enemies with a gaze.',
                price: '2000gp',
            },
        ],
        href: '',
        NPCs: [
            {
                name: 'Madame Seraphina Everbloom - Proprietor',
                description: "A tall and elegant elven woman with silver hair that cascades down her back, Madame Everbloom is the knowledgeable and enigmatic owner of the Alchemy Lab. Her piercing emerald eyes seem to hold the secrets of countless potions. Dressed in flowing robes adorned with alchemical symbols, she welcomes customers with a knowing smile",
                href: ''
            },
            {
                name: 'Thrain Ironhand - Dwarven Potion Master',
                description: "A stout and gruff dwarf with a braided beard that reaches his belt. Thrain is a master of brewing powerful concoctions. He's often seen tending to a massive bubbling cauldron, stirring it with a large ladle that seems almost comically small in his calloused hands.",
                href: ''
            },
            {
                name: 'Luna Moonshadow - Halfling Herbologist:',
                description: "Luna is a sprightly halfling with a perpetual twinkle in her eye. She tends to the exotic herbs and plants that line the shelves, each with its unique magical properties. Her nimble fingers deftly pluck leaves and petals as she hums a tune, infusing the shop with a lively atmosphere.",
                href: ''
            },
            {
                name: 'Elysia Stormcaster - Human Enchantress',
                description: "Elysia, a sorceress with an affinity for enchantments, stands near a section of shelves filled with shimmering vials and enchanted crystals. Her eyes glow with an otherworldly energy as she carefully inspects each item, ready to assist customers in choosing the perfect magical enhancement for their potions.",
                href: ''
            },
        ]
    },
    {
        location: 'Of Rice and Men',
        description: "You enter mystical and enchanting Dungeons and Dragons restaurant where culinary delights meet magical wonders. As you enter through a grand arched doorway adorned with ancient runes, you find yourself in a cozy and dimly lit space filled with the aroma of exotic spices and the faint hum of enchantments. As you dine at 'Of Rice and Men,' you may even encounter wandering minstrels playing enchanting tunes or illusionists creating mesmerizing displays. The restaurant is not just a place to satisfy your hunger; it's an immersive experience that blends the art of cooking with the magic of the fantasy realm.",
        items: [
            {
                name:"Dragonfire Sushi Rolls(+20 hitpoints for 1d4 hrs): A specialty of the house, these sushi rolls are infused with the essence of dragonfire, giving them a spicy kick. Served with wasabi enchanted to tickle your taste buds.",
                price:"200gp",
            },
            {
                name:"Barbarians's Miso Soup(+2AC for 1d4 hrs): A magical miso soup that changes color with every spoonful, revealing the essence of different elemental powers. A warm and comforting start to your meal.",
                price: "300gp",
            },
            {
                name:"Rogues's Bountiful Bruschetta(Gain advantage on all attack rolls and sneak attack action for next encounter): A platter of enchanted bruschetta featuring celestial tomatoes, ethereal olive oil, and fairy-touched basil. Perfect for sharing tales and camaraderie.",
                price:"1000gp",
            },
            {
                name:"Sorcerer's Stir-Fry Noodles(Gain the ability to summon a familiar of your choice for the next 1d6 hrs): Wok-tossed noodles with a medley of enchanted vegetables and your choice of protein. The dish is topped with a magical sauce that dances with vibrant colors.",
                price:"1000gp",
            },
            {
                name:"Thiefs's Potion Parfait(Gain invisibility 2d6 hrs): A dessert that glows with divine radiance, featuring layers of celestial fruits, enchanted cream, and a sprinkle of pixie dust. A sweet ending to your magical culinary journey.",
                price:"300gp",
            },
        ],
        href: '',
        NPCs: [
            {
                name: 'Eldra',
                description: "a graceful elven chef with centuries of culinary expertise",
                href: ''
            },
            {
                name: 'Gruff Thunderbeard',
                description: "a jovial and sturdy dwarf who doubles as the head waiter. Eldra's delicate touch with herbs and spices, combined with Gruff's hearty enthusiasm, create an atmosphere that's both inviting and adventurous",
                href: ''
            },
        ]
    },
    {
        location: 'Quill and Knowledge',
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
        location: 'Arsenal',
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
        location: 'The Clandestined Alleyway',
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
        location: 'The Secret Speak Easy',
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