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
    questionText: "Mars is also referred to as the...",
    options: [
      { optionText: "Chocolate Planet", isCorrect: false },
      { optionText: "Orange Planet", isCorrect: false },
      { optionText: "Red Planet", isCorrect: true },
      { optionText: "Hot Planet", isCorrect: false },
    ],
  },
  {
    questionText: "How long is a sol (day) on Mars in Earth hours?",
    options: [
      { optionText: "24.6", isCorrect: true },
      { optionText: "35.6", isCorrect: false },
      { optionText: "30.6", isCorrect: false },
      { optionText: "22.6", isCorrect: false },
    ],
  },
  {
    questionText: "Mars is the ___ planet from the Sun",
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
  {
    questionText: "How long is a Mars year in Mars sols (days)?",
    options: [
      { optionText: "1,000,000", isCorrect: false },
      { optionText: "499.6", isCorrect: false },
      { optionText: "599.6", isCorrect: false },
      { optionText: "699.6", isCorrect: true },
    ],
  },
  {
    questionText: "One of the Mars NASA rovers is called...",
    options: [
      { optionText: "Marty", isCorrect: false },
      { optionText: "InSight", isCorrect: false },
      { optionText: "Ingenuity", isCorrect: false },
      { optionText: "Curiosity", isCorrect: true },
    ],
  },
  {
    questionText: "One of the Mars NASA rovers is called...",
    options: [
      { optionText: "Perseverance", isCorrect: true },
      { optionText: "InSight", isCorrect: false },
      { optionText: "Ingenuity", isCorrect: false },
      { optionText: "Marty", isCorrect: false },
    ],
  },
  {
    questionText: "The Mars NASA helicopter is called...",
    options: [
      { optionText: "Perseverance", isCorrect: false },
      { optionText: "InSight", isCorrect: false },
      { optionText: "Ingenuity", isCorrect: true },
      { optionText: "Marty", isCorrect: false },
    ],
  },
  {
    questionText: "What is the name of the Mars NASA lander?",
    options: [
      { optionText: "Perseverance", isCorrect: false },
      { optionText: "InSight", isCorrect: true },
      { optionText: "Ingenuity", isCorrect: false },
      { optionText: "Marty", isCorrect: false },
    ],
  },
  {
    questionText: "What is the radius of Mars?",
    options: [
      { optionText: "3,390km", isCorrect: true },
      { optionText: "3,990km", isCorrect: false },
      { optionText: "9,930km", isCorrect: false },
      { optionText: "3,090km", isCorrect: false },
    ],
  },
  {
    questionText: "How much oxygen is there in the Mars atmosphere?",
    options: [
      { optionText: "An abundant amount", isCorrect: false },
      { optionText: "None", isCorrect: false },
      { optionText: "Tiny amount / trace amount", isCorrect: true },
      { optionText: "Unknown", isCorrect: false },
    ],
  },
  {
    questionText:
      "What percentage of the Mars atmosphere is carbon dioxide (CO₂)?",
    options: [
      { optionText: "0.4%", isCorrect: false },
      { optionText: "45%", isCorrect: false },
      { optionText: "95%", isCorrect: true },
      { optionText: "0.04%", isCorrect: false },
    ],
  },
  {
    questionText: "How much water vapour is there in the Mars atmosphere?",
    options: [
      { optionText: "An abundant amount", isCorrect: false },
      { optionText: "None", isCorrect: false },
      { optionText: "Tiny amount / trace amount", isCorrect: true },
      { optionText: "Unknown", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is a Mars moon?",
    options: [
      { optionText: "Phoebe", isCorrect: false },
      { optionText: "Phobia", isCorrect: false },
      { optionText: "Phobos", isCorrect: true },
      { optionText: "Phil", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is a Mars moon?",
    options: [
      { optionText: "Demos", isCorrect: false },
      { optionText: "Dimos", isCorrect: false },
      { optionText: "Demis", isCorrect: false },
      { optionText: "Deimos", isCorrect: true },
    ],
  },
  {
    questionText: "What shape are the moons of Mars?",
    options: [
      { optionText: "Turnip", isCorrect: false },
      { optionText: "Swede", isCorrect: false },
      { optionText: "Carrot", isCorrect: false },
      { optionText: "Potato", isCorrect: true },
    ],
  },
  {
    questionText: "The moons of Mars are named after what?",
    options: [
      { optionText: "Ponies", isCorrect: false },
      { optionText: "Donkeys", isCorrect: false },
      { optionText: "Horses", isCorrect: true },
      { optionText: "Dogs", isCorrect: false },
    ],
  },
  {
    questionText: "Mars is named after the God of...",
    options: [
      { optionText: "Love", isCorrect: false },
      { optionText: "Wisdom", isCorrect: false },
      { optionText: "Fire", isCorrect: false },
      { optionText: "War", isCorrect: true },
    ],
  },
  {
    questionText: "Why is Mars red?",
    options: [
      { optionText: "It's covered in tomato ketchup", isCorrect: false },
      { optionText: "There are lots of active volcanoes", isCorrect: false },
      {
        optionText: "There is iron oxide in the Martian soil",
        isCorrect: true,
      },
      { optionText: "Its atmospheric gases glow red", isCorrect: false },
    ],
  },
  {
    questionText: "The Roman god Mars is also known as ___ in Greek mythology",
    options: [
      { optionText: "Ares", isCorrect: true },
      { optionText: "Zeus", isCorrect: false },
      { optionText: "Apollo", isCorrect: false },
      { optionText: "Hera", isCorrect: false },
    ],
  },
  {
    questionText: "What distance is Mars from the Sun?",
    options: [
      { optionText: "288 million km", isCorrect: false },
      { optionText: "828 million km", isCorrect: false },
      { optionText: "882 million km", isCorrect: false },
      { optionText: "228 million km", isCorrect: true },
    ],
  },
  {
    questionText: "How long does it take light to travel from the Sun to Mars?",
    options: [
      { optionText: "11 minutes", isCorrect: false },
      { optionText: "13 minutes", isCorrect: true },
      { optionText: "31 minutes", isCorrect: false },
      { optionText: "1 minute", isCorrect: false },
    ],
  },
  {
    questionText:
      "One astronomical unit (AU) is the distance from the Sun to Earth. How many AU is Mars from the Sun?",
    options: [
      { optionText: "0.5", isCorrect: false },
      { optionText: "1", isCorrect: false },
      { optionText: "1.5", isCorrect: true },
      { optionText: "2", isCorrect: false },
    ],
  },
  {
    questionText:
      "What is Mars' axis of rotation/tilt with respect to the plane of its orbit around the Sun?",
    options: [
      { optionText: "5 degrees", isCorrect: false },
      { optionText: "2 degrees", isCorrect: false },
      { optionText: "25 degrees", isCorrect: true },
      { optionText: "52 degrees", isCorrect: false },
    ],
  },
  {
    questionText:
      "Mars has an elliptical (egg-shaped) orbit around the Sun. Which season in the northern hemisphere is the longest season at 194 Martian sols (days)?",
    options: [
      { optionText: "Winter", isCorrect: false },
      { optionText: "Spring", isCorrect: true },
      { optionText: "Summer", isCorrect: false },
      { optionText: "Autumn", isCorrect: false },
    ],
  },
  {
    questionText:
      "Mars has an elliptical (egg-shaped) orbit around the Sun. Which season in the southern hemisphere is the longest season at 194 Martian sols (days)?",
    options: [
      { optionText: "Winter", isCorrect: false },
      { optionText: "Spring", isCorrect: false },
      { optionText: "Summer", isCorrect: false },
      { optionText: "Autumn", isCorrect: true },
    ],
  },
  {
    questionText:
      "Mars has an elliptical (egg-shaped) orbit around the Sun. Which season in the southern hemisphere is the shortest season at 142 Martian sols (days)?",
    options: [
      { optionText: "Winter", isCorrect: false },
      { optionText: "Spring", isCorrect: true },
      { optionText: "Summer", isCorrect: false },
      { optionText: "Autumn", isCorrect: false },
    ],
  },
  {
    questionText:
      "Mars has an elliptical (egg-shaped) orbit around the Sun. Which season in the northern hemisphere is the shortest season at 142 Martian sols (days)?",
    options: [
      { optionText: "Winter", isCorrect: false },
      { optionText: "Spring", isCorrect: false },
      { optionText: "Summer", isCorrect: false },
      { optionText: "Autumn", isCorrect: true },
    ],
  },
];

export const getRandomQuestions = (n: number): Question[] => {
  return questions
    .map((q) => ({ q, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ q }) => q)
    .slice(0, n);
};
