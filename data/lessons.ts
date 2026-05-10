export type VocabularyItem = {
  en: string;
  tr: string;
  example: string;
};

export type Lesson = {
  moduleId: string;
  objective: string;
  vocabulary: VocabularyItem[];
};

export const lessons: Lesson[] = [
  {
    moduleId: 'basic-greetings',
    objective: 'Use simple greetings in everyday situations.',
    vocabulary: [
      { en: 'Hello', tr: 'Merhaba', example: 'Hello, my name is Ozan.' },
      { en: 'Good morning', tr: 'Günaydın', example: 'Good morning, how are you?' },
      { en: 'Goodbye', tr: 'Hoşça kal', example: 'Goodbye, see you tomorrow.' },
      { en: 'Thank you', tr: 'Teşekkür ederim', example: 'Thank you for your help.' },
      { en: 'Please', tr: 'Lütfen', example: 'Please open the door.' },
    ],
  },
  {
    moduleId: 'introducing-yourself',
    objective: 'Introduce yourself with short and clear sentences.',
    vocabulary: [
      { en: 'My name is', tr: 'Benim adım', example: 'My name is Ozan.' },
      { en: 'I am from', tr: 'Ben ...lıyım', example: 'I am from Turkey.' },
      { en: 'I am a student', tr: 'Ben öğrenciyim', example: 'I am a student.' },
      { en: 'Nice to meet you', tr: 'Tanıştığıma memnun oldum', example: 'Nice to meet you, Ceren.' },
      { en: 'How are you?', tr: 'Nasılsın?', example: 'How are you today?' },
    ],
  },
  {
    moduleId: 'numbers-and-age',
    objective: 'Use numbers and say your age.',
    vocabulary: [
      { en: 'One', tr: 'Bir', example: 'I have one book.' },
      { en: 'Two', tr: 'İki', example: 'I have two pens.' },
      { en: 'Ten', tr: 'On', example: 'There are ten students.' },
      { en: 'Twenty', tr: 'Yirmi', example: 'I am twenty years old.' },
      { en: 'Years old', tr: 'Yaşında', example: 'She is eighteen years old.' },
    ],
  },
  {
    moduleId: 'daily-objects',
    objective: 'Name simple objects around you.',
    vocabulary: [
      { en: 'Book', tr: 'Kitap', example: 'This is my book.' },
      { en: 'Phone', tr: 'Telefon', example: 'My phone is on the table.' },
      { en: 'Table', tr: 'Masa', example: 'The table is big.' },
      { en: 'Chair', tr: 'Sandalye', example: 'This chair is comfortable.' },
      { en: 'Bag', tr: 'Çanta', example: 'My bag is black.' },
    ],
  },
  {
    moduleId: 'common-verbs',
    objective: 'Recognize common verbs in short sentences.',
    vocabulary: [
      { en: 'Go', tr: 'Gitmek', example: 'I go to school.' },
      { en: 'Eat', tr: 'Yemek yemek', example: 'I eat an apple.' },
      { en: 'Drink', tr: 'İçmek', example: 'I drink water.' },
      { en: 'Read', tr: 'Okumak', example: 'I read a book.' },
      { en: 'Study', tr: 'Ders çalışmak', example: 'I study English.' },
    ],
  },
  {
    moduleId: 'family-members',
    objective: 'Talk about family members with simple words.',
    vocabulary: [
      { en: 'Mother', tr: 'Anne', example: 'My mother is kind.' },
      { en: 'Father', tr: 'Baba', example: 'My father is at home.' },
      { en: 'Brother', tr: 'Erkek kardeş', example: 'I have one brother.' },
      { en: 'Sister', tr: 'Kız kardeş', example: 'My sister is a student.' },
      { en: 'Family', tr: 'Aile', example: 'My family is big.' },
    ],
  },
  {
    moduleId: 'food-and-drinks',
    objective: 'Use common food and drink words.',
    vocabulary: [
      { en: 'Water', tr: 'Su', example: 'I drink water.' },
      { en: 'Bread', tr: 'Ekmek', example: 'I eat bread.' },
      { en: 'Apple', tr: 'Elma', example: 'This apple is red.' },
      { en: 'Tea', tr: 'Çay', example: 'I drink tea in the morning.' },
      { en: 'Coffee', tr: 'Kahve', example: 'She likes coffee.' },
    ],
  },
  {
    moduleId: 'days-and-time',
    objective: 'Understand days and basic time expressions.',
    vocabulary: [
      { en: 'Today', tr: 'Bugün', example: 'Today is Monday.' },
      { en: 'Tomorrow', tr: 'Yarın', example: 'Tomorrow is Tuesday.' },
      { en: 'Morning', tr: 'Sabah', example: 'I study in the morning.' },
      { en: 'Night', tr: 'Gece', example: 'Good night.' },
      { en: 'Week', tr: 'Hafta', example: 'A week has seven days.' },
    ],
  },
  {
    moduleId: 'simple-questions',
    objective: 'Ask simple English questions.',
    vocabulary: [
      { en: 'What', tr: 'Ne', example: 'What is your name?' },
      { en: 'Where', tr: 'Nerede', example: 'Where are you from?' },
      { en: 'Who', tr: 'Kim', example: 'Who is your teacher?' },
      { en: 'When', tr: 'Ne zaman', example: 'When is the lesson?' },
      { en: 'Why', tr: 'Neden', example: 'Why are you here?' },
    ],
  },
  {
    moduleId: 'mini-review',
    objective: 'Review key beginner English words and sentences.',
    vocabulary: [
      { en: 'Hello, I am a student.', tr: 'Merhaba, ben öğrenciyim.', example: 'Hello, I am a student.' },
      { en: 'I drink water.', tr: 'Su içerim.', example: 'I drink water every day.' },
      { en: 'My family is big.', tr: 'Ailem büyük.', example: 'My family is big.' },
      { en: 'Where are you from?', tr: 'Nerelisin?', example: 'Where are you from?' },
      { en: 'I study English today.', tr: 'Bugün İngilizce çalışıyorum.', example: 'I study English today.' },
    ],
  },
];
