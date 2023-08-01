interface Option {
  optionText: string;
  isCorrect: boolean;
}

interface Question {
  questionText: string;
  options: Option[];
}

const questions: Question[] = [
  {
    questionText: "Mars is also referred to as the...?",
    options: [
      { optionText: "Chocolate Planet", isCorrect: false },
      { optionText: "Orange Planet", isCorrect: false },
      { optionText: "Red Planet", isCorrect: true },
      { optionText: "Hot Planet", isCorrect: false },
    ],
  },
  {
    questionText: "How long is a day on Mars in hours?",
    options: [
      { optionText: "24.6", isCorrect: true },
      { optionText: "35.6", isCorrect: false },
      { optionText: "30.6", isCorrect: false },
      { optionText: "22.6", isCorrect: false },
    ],
  },
  {
    questionText: "Mars is the ___ planet from the Sun?",
    options: [
      { optionText: "Sixth", isCorrect: false },
      { optionText: "First", isCorrect: false },
      { optionText: "Third", isCorrect: false },
      { optionText: "Fourth", isCorrect: true },
    ],
  },
  {
    questionText: "How long is a Mars year in Earth days?",
    options: [
      { optionText: "365", isCorrect: false },
      { optionText: "687", isCorrect: true },
      { optionText: "540", isCorrect: false },
      { optionText: "983", isCorrect: false },
    ],
  },
  {
    questionText: "How many moons does Mars have?",
    options: [
      { optionText: "One", isCorrect: false },
      { optionText: "Two", isCorrect: true },
      { optionText: "Three", isCorrect: false },
      { optionText: "Five", isCorrect: false },
    ],
  },
];

export const getRandomQuestions = (): Question[] => {
  return questions
    .map((q) => ({ q, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ q }) => q);
};
