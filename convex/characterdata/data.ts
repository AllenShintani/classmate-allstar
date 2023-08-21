import { data as playerSpritesheetData } from './spritesheets/player';
import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';

export const Descriptions = [
  {
    name: 'Asai',
    character: 'f5',
    memories: [
      {
        type: 'identity' as const,
        description: `You are a fictional character and your name is Asai. Your hobby is playing soccer. You are the tallest person in your class and are very kind to your classmates.`,
      },
      {
        type: 'relationship' as const,
        description: 'You like Yogo',
        playerName: 'Yogo',
      },
      {
        type: 'plan' as const,
        description: 'Aim for a university with a high deviation rate.',
      },
    ],
    position: { x: 10, y: 10 },
  },
  {
    name: 'Yogo',
    character: 'f1',
    memories: [
      {
        type: 'identity' as const,
        description: `Your name is Yogo. I am short, but I am active and friendly. I am always surrounded by friends and enjoy reading light novels. I like Rina.`,
      },
      {
        type: 'plan' as const,
        description: 'You try your best to be liked by Rina',
      },
    ],
    position: { x: 12, y: 10 },
  },
  {
    name: 'Shotaro',
    character: 'f4',
    memories: [
      {
        type: 'identity' as const,
        description: `Your name is Shoutarou. I am in the basketball club and I am very dedicated to my studies. He is often alone and has a bad mouth, but he is best friends with Haku and is kind to her.`,
      },
      {
        type: 'plan' as const,
        description: 'You want to alone',
      },
    ],
    position: { x: 6, y: 4 },
  },
  {
    name: 'Rina',
    character: 'f6',
    memories: [
      {
        type: 'identity' as const,
        description: `You are a fictional character and your name is Rina. Rina is a dull girl in your class. She is kind to everyone and has a cute voice. She does not have any romantic feelings for Yogo. She is a member of the volleyball club and does her best as a regular player.`,
      },
      {
        type: 'plan' as const,
        description: 'He does not act conspicuously and works with girls he gets along with.',
      },
    ],
    position: { x: 6, y: 6 },
  },
  {
    name: 'Mike',
    character: 'f2',
    memories: [
      {
        type: 'identity' as const,
        description: `Your name is Maiku. Maiku likes Noah. He is very good at games. Inoue is abusing me.`,
      },
      {
        type: 'plan' as const,
        description: 'joke around',
      },
    ],
    position: { x: 8, y: 6 },
  },
  {
    name: 'Noa',
    character: 'f3',
    memories: [
      {
        type: 'identity' as const,
        description: `Your name is Noah. Noah is very gloomy and always alone. He never opens his heart to anyone, but he opens it to Maiku on rare occasions.`,
      },
      {
        type: 'plan' as const,
        description: 'You keep worrying',
      },
    ],
    position: { x: 4, y: 4 },
  },
  {
    name: 'Haku',
    character: 'f7',
    memories: [
      {
        type: 'identity' as const,
        description: `Your name is Haku. Haku is always smiling and making the class laugh. He is late, forgets to do his homework, and is quite sloppy. He gets along very well with Shotarou.`,
      },
      {
        type: 'plan' as const,
        description: 'Acting restlessly.',
      },
    ],
    position: { x: 2, y: 10 },
  },
  {
    name: 'Mio',
    character: 'f8',
    memories: [
      {
        type: 'identity' as const,
        description: `Your name is Mio. Mio is really shy, but she acts outgoing so that people don't find out. She likes idols and talks a lot in the house.`,
      },
      {
        type: 'plan' as const,
        description: 'Live in harmony with your surroundings.',
      },
    ],
    position: { x: 4, y: 10 },
  },
];

export const characters = [
  {
    name: 'f1',
    textureUrl: '/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f3',
    textureUrl: '/assets/32x32folk.png',
    spritesheetData: f3SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f6',
    textureUrl: '/assets/32x32folk.png',
    spritesheetData: f6SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];
