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
];
