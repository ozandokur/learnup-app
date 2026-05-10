export type QuizQuestion = {
  moduleId: string;
  question: string;
  options: string[];
  answer: string;
};

export const quizzes: QuizQuestion[] = [
  {
    moduleId: 'basic-greetings',
    question: "What does 'Hello' mean?",
    options: ['Merhaba', 'Hoşça kal', 'Lütfen', 'Kitap'],
    answer: 'Merhaba',
  },
  {
    moduleId: 'basic-greetings',
    question: "What does 'Good morning' mean?",
    options: ['Günaydın', 'İyi geceler', 'Teşekkürler', 'Nasılsın'],
    answer: 'Günaydın',
  },
  {
    moduleId: 'basic-greetings',
    question: "Choose the English word for 'Lütfen'.",
    options: ['Please', 'Phone', 'Read', 'Table'],
    answer: 'Please',
  },
  {
    moduleId: 'basic-greetings',
    question: "What does 'Thank you' mean?",
    options: ['Teşekkür ederim', 'Günaydın', 'Ben öğrenciyim', 'Çanta'],
    answer: 'Teşekkür ederim',
  },
  {
    moduleId: 'basic-greetings',
    question: "Choose the English word for 'Hoşça kal'.",
    options: ['Goodbye', 'Hello', 'Please', 'One'],
    answer: 'Goodbye',
  },
  {
    moduleId: 'introducing-yourself',
    question: "What does 'My name is' mean?",
    options: ['Benim adım', 'Ben öğrenciyim', 'Nasılsın', 'Yaşında'],
    answer: 'Benim adım',
  },
  {
    moduleId: 'introducing-yourself',
    question: "Choose the English sentence for 'Ben öğrenciyim'.",
    options: ['I am a student', 'I drink water', 'This is my book', 'I am twenty'],
    answer: 'I am a student',
  },
  {
    moduleId: 'introducing-yourself',
    question: "What does 'Nice to meet you' mean?",
    options: ['Tanıştığıma memnun oldum', 'Hoşça kal', 'Günaydın', 'Sandalye'],
    answer: 'Tanıştığıma memnun oldum',
  },
  {
    moduleId: 'introducing-yourself',
    question: "Choose the Turkish meaning of 'How are you?'.",
    options: ['Nasılsın?', 'Kaç yaşındasın?', 'Nerelisin?', 'Ne okuyorsun?'],
    answer: 'Nasılsın?',
  },
  {
    moduleId: 'introducing-yourself',
    question: "Complete: I am from ____.",
    options: ['Turkey', 'student', 'hello', 'years old'],
    answer: 'Turkey',
  },
  {
    moduleId: 'numbers-and-age',
    question: "What does 'Two' mean?",
    options: ['İki', 'Bir', 'On', 'Yirmi'],
    answer: 'İki',
  },
  {
    moduleId: 'numbers-and-age',
    question: "What does 'Twenty' mean?",
    options: ['Yirmi', 'On', 'Bir', 'Yaşında'],
    answer: 'Yirmi',
  },
  {
    moduleId: 'numbers-and-age',
    question: "Choose the English phrase for 'yaşında'.",
    options: ['Years old', 'Good morning', 'My name is', 'Thank you'],
    answer: 'Years old',
  },
  {
    moduleId: 'numbers-and-age',
    question: "Complete: I am twenty ____ old.",
    options: ['years', 'books', 'phones', 'tables'],
    answer: 'years',
  },
  {
    moduleId: 'numbers-and-age',
    question: "What does 'One' mean?",
    options: ['Bir', 'İki', 'On', 'Yirmi'],
    answer: 'Bir',
  },
  {
    moduleId: 'daily-objects',
    question: "What does 'Book' mean?",
    options: ['Kitap', 'Telefon', 'Masa', 'Çanta'],
    answer: 'Kitap',
  },
  {
    moduleId: 'daily-objects',
    question: "Choose the English word for 'Sandalye'.",
    options: ['Chair', 'Table', 'Phone', 'Bag'],
    answer: 'Chair',
  },
  {
    moduleId: 'daily-objects',
    question: "What does 'Phone' mean?",
    options: ['Telefon', 'Kitap', 'Masa', 'Kapı'],
    answer: 'Telefon',
  },
  {
    moduleId: 'daily-objects',
    question: "Choose the English word for 'Çanta'.",
    options: ['Bag', 'Book', 'Chair', 'Table'],
    answer: 'Bag',
  },
  {
    moduleId: 'daily-objects',
    question: "Complete: The ____ is big.",
    options: ['table', 'hello', 'years', 'study'],
    answer: 'table',
  },
  {
    moduleId: 'common-verbs',
    question: "What does 'Go' mean?",
    options: ['Gitmek', 'İçmek', 'Okumak', 'Yemek yemek'],
    answer: 'Gitmek',
  },
  {
    moduleId: 'common-verbs',
    question: "Choose the English word for 'İçmek'.",
    options: ['Drink', 'Eat', 'Read', 'Study'],
    answer: 'Drink',
  },
  {
    moduleId: 'common-verbs',
    question: "Complete: I ____ English.",
    options: ['study', 'table', 'hello', 'twenty'],
    answer: 'study',
  },
  {
    moduleId: 'common-verbs',
    question: "What does 'Read' mean?",
    options: ['Okumak', 'Gitmek', 'İçmek', 'Çanta'],
    answer: 'Okumak',
  },
  {
    moduleId: 'common-verbs',
    question: "Choose the English sentence for 'Ben bir elma yerim'.",
    options: ['I eat an apple', 'I read a book', 'I drink water', 'I go to school'],
    answer: 'I eat an apple',
  },
];
