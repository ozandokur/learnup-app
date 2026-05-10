export type Module = {
  id: string;
  title: string;
  description: string;
  level: 'Beginner';
  xp: number;
};

export const modules: Module[] = [
  {
    id: 'basic-greetings',
    title: 'Basic Greetings',
    description: 'Learn simple greetings like hello, goodbye, and thank you.',
    level: 'Beginner',
    xp: 20,
  },
  {
    id: 'introducing-yourself',
    title: 'Introducing Yourself',
    description: 'Learn how to say your name, age, and where you are from.',
    level: 'Beginner',
    xp: 20,
  },
  {
    id: 'numbers-and-age',
    title: 'Numbers and Age',
    description: 'Practice numbers and simple age sentences.',
    level: 'Beginner',
    xp: 20,
  },
  {
    id: 'daily-objects',
    title: 'Daily Objects',
    description: 'Learn common objects you see every day.',
    level: 'Beginner',
    xp: 20,
  },
  {
    id: 'common-verbs',
    title: 'Common Verbs',
    description: 'Start using basic English verbs in short sentences.',
    level: 'Beginner',
    xp: 20,
  },
  {
    id: 'family-members',
    title: 'Family Members',
    description: 'Learn simple words for family and people around you.',
    level: 'Beginner',
    xp: 20,
  },
  {
    id: 'food-and-drinks',
    title: 'Food and Drinks',
    description: 'Practice common food and drink words for daily life.',
    level: 'Beginner',
    xp: 20,
  },
  {
    id: 'days-and-time',
    title: 'Days and Time',
    description: 'Learn days of the week and basic time expressions.',
    level: 'Beginner',
    xp: 20,
  },
  {
    id: 'simple-questions',
    title: 'Simple Questions',
    description: 'Ask and answer simple beginner English questions.',
    level: 'Beginner',
    xp: 20,
  },
  {
    id: 'mini-review',
    title: 'Mini Review',
    description: 'Review the most useful words and sentences from this path.',
    level: 'Beginner',
    xp: 30,
  },
];
