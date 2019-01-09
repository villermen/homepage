import * as React from 'react';

const randomActions = [
    'create things', // Generic
    'fly a jetpack', // MC FtB
    'walk in circles',
    'return to freaking sender', // TF2 scout
    'goof around',
    'think in code',
    <span style={{fontFamily: 'Comic Sans MS'}}>type in Comic Sans</span>,
    'google URLs', // Old people
    'remember my purpose', // RS TTW
    'resist symmetry', // MC Zisteau
    'belong in a museum', // LoL Ezreal
    'defeat clunk bot', // Awesomenauts
    'pray at an alter', // RS dungeoneering
    'miss a day in tactical school', // AI War
    'randomize strings', // Meta
    'press the any key', // Game startup screens
    'skate cheaply', // Cheapskate
    'force cookies down your throat', // Cookie warning BS
    'judge a book by its cover',
    'run out of problems to fix', // To-do lists
    'solo Blink', // RS dungeoneering
    'stay radiated', // Lead to Live
    'melee a room full of rangers and mages', // RS dungeoneering (Ricardo)
    'tweak to perfection',
    'forget how the sun feels', // Rogue Legacy
    'so doge, much wow',
    'disable free will', // The Sims
    'reinvent the wheel',
    'do things myself',
    'fail to save Curly', // Cave Story
    'combust spontaneously',
    'overcommit', // RS mainly
    'duck and cover', // Nuke warning video
    'get fed',
    'close a tab that I still need',
    'locate Frankenstein\'s brain',
    'edit in post',
    'enhance licence plates', // CSI
    'melt to Morgan Freeman',
    'reconcile',
    'choose poontah',
    'listen to the rap music', // Bill cosby
    '!!', // Pokémon fishing
    'act awkwardly social',
    'keep seeding', // Torrents
    'win the game', // You have to win the game
    'paint the lines', // Amnesia pt. 1
    'cut the flesh', // Amnesia pt. 2
    'hear stock sounds',
    'hit the paywall',
    'run with scissors',
    'kill all the mutants', // X-men
    'use lime on black',
    'kill the moment',
    'cut to black',
    'put a smile on your face', // Dark knight
    'reject your reality', // Mythbusters
    'vanish into thin air',
    'stick to the plan',
    'use more gun', // Meet the engineer
    'buy two tickets to the gunshow', // Demoman
    'procedurally generate',
    'prepare for trouble', // Pokémon pt. 1
    'make it double', // Pokémon pt. 2
    'fall into plotholes',
    'make life take the lemons back', // Portal 2
    'get lost in translation',
    'learn by doing',
    'spruce the place up', // Minecraft
    'get used by NASA', // Avatar in-joke
    'get motivated',
    'cannot into space', // Polandball
    'appear random',
    'get dangerous', // Darkwing duck
    'diversify my portfolio', // Stocks
    'go dark', // Army I guess
    'go waaay back', // In-joke
    'feel the cosmos', // Katamari Damacy
    'want fries with that',
    'take things out of context',
    'may contain traces of nuts', // Allergy warning
    'press space to win', // Super Press Space to Win Action RPG 2009
    'juggle types', // PHP and other weakly-typed programming langauges
    'mangled in translation the google',
    'meet all standards', // Undertale
    'flip the switch',
    'solve practical problems', // TF2 engineer
    '+forward; +attack;', // TF2 W+M1
    'trust keyboards',
    'apply logic to real life',
    'experience unscripted events',
    'defy categorization', // Agent Carter
    'know when to quit',
    'step into the tall grass', // Pokémon
    'refactor for fun',
    'require stroyent', // ET:QW
    'forget about Freeman', // Half-Life
    'draw a vertical blank',
    'double check for double meanings', // Saint Motel
    'rule the world and still finish all my homework', // WarioWare: Touched!
    'chase \'em away! Chase \'em away', // Dumbo
    'hype a dead cat',
    'consider it done',
    'am the critical error', // Lethal League
];

export default () => (
    <>{randomActions[Math.floor(Math.random() * randomActions.length)]}</>
);
