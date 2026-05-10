export type QuizQuestion = {
  moduleId: string;
  question: string;
  options: string[];
  answer: string;
};

export const quizzes: QuizQuestion[] = [
  { moduleId: 'basic-greetings', question: "What does 'Hello' mean?", options: ['Merhaba', 'Hoşça kal', 'Lütfen', 'Kitap'], answer: 'Merhaba' },
  { moduleId: 'basic-greetings', question: "What does 'Good morning' mean?", options: ['Günaydın', 'İyi geceler', 'Teşekkürler', 'Nasılsın'], answer: 'Günaydın' },
  { moduleId: 'basic-greetings', question: "Choose the English word for 'Lütfen'.", options: ['Please', 'Phone', 'Read', 'Table'], answer: 'Please' },
  { moduleId: 'basic-greetings', question: "What does 'Thank you' mean?", options: ['Teşekkür ederim', 'Günaydın', 'Ben öğrenciyim', 'Çanta'], answer: 'Teşekkür ederim' },
  { moduleId: 'basic-greetings', question: "Choose the English word for 'Hoşça kal'.", options: ['Goodbye', 'Hello', 'Please', 'One'], answer: 'Goodbye' },

  { moduleId: 'introducing-yourself', question: "What does 'My name is' mean?", options: ['Benim adım', 'Ben öğrenciyim', 'Nasılsın', 'Yaşında'], answer: 'Benim adım' },
  { moduleId: 'introducing-yourself', question: "Choose the English sentence for 'Ben öğrenciyim'.", options: ['I am a student', 'I drink water', 'This is my book', 'I am twenty'], answer: 'I am a student' },
  { moduleId: 'introducing-yourself', question: "What does 'Nice to meet you' mean?", options: ['Tanıştığıma memnun oldum', 'Hoşça kal', 'Günaydın', 'Sandalye'], answer: 'Tanıştığıma memnun oldum' },
  { moduleId: 'introducing-yourself', question: "Choose the Turkish meaning of 'How are you?'.", options: ['Nasılsın?', 'Kaç yaşındasın?', 'Nerelisin?', 'Ne okuyorsun?'], answer: 'Nasılsın?' },
  { moduleId: 'introducing-yourself', question: 'Complete: I am from ____.', options: ['Turkey', 'student', 'hello', 'years old'], answer: 'Turkey' },

  { moduleId: 'numbers-and-age', question: "What does 'Two' mean?", options: ['İki', 'Bir', 'On', 'Yirmi'], answer: 'İki' },
  { moduleId: 'numbers-and-age', question: "What does 'Twenty' mean?", options: ['Yirmi', 'On', 'Bir', 'Yaşında'], answer: 'Yirmi' },
  { moduleId: 'numbers-and-age', question: "Choose the English phrase for 'yaşında'.", options: ['Years old', 'Good morning', 'My name is', 'Thank you'], answer: 'Years old' },
  { moduleId: 'numbers-and-age', question: 'Complete: I am twenty ____ old.', options: ['years', 'books', 'phones', 'tables'], answer: 'years' },
  { moduleId: 'numbers-and-age', question: "What does 'One' mean?", options: ['Bir', 'İki', 'On', 'Yirmi'], answer: 'Bir' },

  { moduleId: 'daily-objects', question: "What does 'Book' mean?", options: ['Kitap', 'Telefon', 'Masa', 'Çanta'], answer: 'Kitap' },
  { moduleId: 'daily-objects', question: "Choose the English word for 'Sandalye'.", options: ['Chair', 'Table', 'Phone', 'Bag'], answer: 'Chair' },
  { moduleId: 'daily-objects', question: "What does 'Phone' mean?", options: ['Telefon', 'Kitap', 'Masa', 'Kapı'], answer: 'Telefon' },
  { moduleId: 'daily-objects', question: "Choose the English word for 'Çanta'.", options: ['Bag', 'Book', 'Chair', 'Table'], answer: 'Bag' },
  { moduleId: 'daily-objects', question: 'Complete: The ____ is big.', options: ['table', 'hello', 'years', 'study'], answer: 'table' },

  { moduleId: 'common-verbs', question: "What does 'Go' mean?", options: ['Gitmek', 'İçmek', 'Okumak', 'Yemek yemek'], answer: 'Gitmek' },
  { moduleId: 'common-verbs', question: "Choose the English word for 'İçmek'.", options: ['Drink', 'Eat', 'Read', 'Study'], answer: 'Drink' },
  { moduleId: 'common-verbs', question: 'Complete: I ____ English.', options: ['study', 'table', 'hello', 'twenty'], answer: 'study' },
  { moduleId: 'common-verbs', question: "What does 'Read' mean?", options: ['Okumak', 'Gitmek', 'İçmek', 'Çanta'], answer: 'Okumak' },
  { moduleId: 'common-verbs', question: "Choose the English sentence for 'Ben bir elma yerim'.", options: ['I eat an apple', 'I read a book', 'I drink water', 'I go to school'], answer: 'I eat an apple' },

  { moduleId: 'family-members', question: "What does 'Mother' mean?", options: ['Anne', 'Baba', 'Aile', 'Kız kardeş'], answer: 'Anne' },
  { moduleId: 'family-members', question: "Choose the English word for 'Baba'.", options: ['Father', 'Mother', 'Brother', 'Family'], answer: 'Father' },
  { moduleId: 'family-members', question: "What does 'Sister' mean?", options: ['Kız kardeş', 'Erkek kardeş', 'Anne', 'Aile'], answer: 'Kız kardeş' },
  { moduleId: 'family-members', question: 'Complete: My ____ is big.', options: ['family', 'water', 'table', 'today'], answer: 'family' },
  { moduleId: 'family-members', question: "Choose the Turkish meaning of 'Brother'.", options: ['Erkek kardeş', 'Baba', 'Kahve', 'Hafta'], answer: 'Erkek kardeş' },

  { moduleId: 'food-and-drinks', question: "What does 'Water' mean?", options: ['Su', 'Ekmek', 'Elma', 'Çay'], answer: 'Su' },
  { moduleId: 'food-and-drinks', question: "Choose the English word for 'Ekmek'.", options: ['Bread', 'Apple', 'Coffee', 'Tea'], answer: 'Bread' },
  { moduleId: 'food-and-drinks', question: 'Complete: I drink ____ in the morning.', options: ['tea', 'chair', 'week', 'why'], answer: 'tea' },
  { moduleId: 'food-and-drinks', question: "What does 'Coffee' mean?", options: ['Kahve', 'Su', 'Elma', 'Kitap'], answer: 'Kahve' },
  { moduleId: 'food-and-drinks', question: "Choose the Turkish meaning of 'Apple'.", options: ['Elma', 'Ekmek', 'Anne', 'Gece'], answer: 'Elma' },

  { moduleId: 'days-and-time', question: "What does 'Today' mean?", options: ['Bugün', 'Yarın', 'Sabah', 'Hafta'], answer: 'Bugün' },
  { moduleId: 'days-and-time', question: "Choose the English word for 'Yarın'.", options: ['Tomorrow', 'Today', 'Morning', 'Night'], answer: 'Tomorrow' },
  { moduleId: 'days-and-time', question: "What does 'Week' mean?", options: ['Hafta', 'Gece', 'Sabah', 'Bugün'], answer: 'Hafta' },
  { moduleId: 'days-and-time', question: 'Complete: I study in the ____.', options: ['morning', 'bread', 'father', 'phone'], answer: 'morning' },
  { moduleId: 'days-and-time', question: "Choose the Turkish meaning of 'Night'.", options: ['Gece', 'Sabah', 'Bugün', 'Yarın'], answer: 'Gece' },

  { moduleId: 'simple-questions', question: "What does 'What' mean?", options: ['Ne', 'Nerede', 'Kim', 'Neden'], answer: 'Ne' },
  { moduleId: 'simple-questions', question: "Choose the English word for 'Nerede'.", options: ['Where', 'Who', 'When', 'Why'], answer: 'Where' },
  { moduleId: 'simple-questions', question: "What does 'Who' mean?", options: ['Kim', 'Ne zaman', 'Neden', 'Ne'], answer: 'Kim' },
  { moduleId: 'simple-questions', question: 'Complete: ____ are you from?', options: ['Where', 'What', 'Why', 'When'], answer: 'Where' },
  { moduleId: 'simple-questions', question: "Choose the Turkish meaning of 'When'.", options: ['Ne zaman', 'Nerede', 'Kim', 'Neden'], answer: 'Ne zaman' },

  { moduleId: 'mini-review', question: "Choose the Turkish meaning of 'Hello, I am a student.'", options: ['Merhaba, ben öğrenciyim.', 'Ben su içerim.', 'Ailem büyük.', 'Nerelisin?'], answer: 'Merhaba, ben öğrenciyim.' },
  { moduleId: 'mini-review', question: "Choose the English sentence for 'Su içerim.'", options: ['I drink water.', 'I eat bread.', 'I read a book.', 'I go to school.'], answer: 'I drink water.' },
  { moduleId: 'mini-review', question: 'Complete: My ____ is big.', options: ['family', 'coffee', 'today', 'why'], answer: 'family' },
  { moduleId: 'mini-review', question: "What does 'Where are you from?' mean?", options: ['Nerelisin?', 'Nasılsın?', 'Adın ne?', 'Bugün ne?'], answer: 'Nerelisin?' },
  { moduleId: 'mini-review', question: 'Complete: I study English ____.', options: ['today', 'bread', 'mother', 'chair'], answer: 'today' },
];
