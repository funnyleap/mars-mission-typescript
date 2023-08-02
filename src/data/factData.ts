interface Fact {
  factTitle: string;
  factText: string;
  factImage: string;
}

interface Section {
  sectionTitle: string;
  facts: Fact[];
}

const facts: Section[] = [
  {
    sectionTitle: "Mars",
    facts: [
      {
        factTitle: "The Red Planet",
        factText:
          "Mars is also known as the 'Red Planet' This is because of iron minerals in the Martian soil oxidising (rusting) causing the soil and atmosphere to look red. Mars was named by the ancient Romans for their god of war because its reddish color was reminiscent of the colour of blood.",
        factImage: "../../public/logo.png",
      },
      {
        factTitle: "Mars in the Solar System",
        factText:
          "Mars is the fourth planet from the Sun, a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.",
        factImage: "Red Planet",
      },
      {
        factTitle: "A day on Mars",
        factText:
          "A day on Mars is known as a 'sol', a Martian sol takes a little over 24 hours (24.6 to be exact). However, as Mars has a much longer orbit around the Sun than the Earth does, a Martian year actually takes 669.6 Martian sols (687 Earth days).",
        factImage: "Red Planet",
      },
    ],
  },
  {
    sectionTitle: "Size and Weather",
    facts: [
      {
        factTitle: "How Big Is Mars?",
        factText:
          "With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth.",
        factImage: "../../public/logo.png",
      },
      {
        factTitle: "Atmosphere",
        factText:
          "Mars has a thin atmosphere made up mostly of carbon dioxide (CO₂), argon (Ar), nitrogen (N2), and a small amount of oxygen and water vapor. Bring a space suit!",
        factImage: "Red Planet",
      },
      {
        factTitle: "Inhospitable Landscape",
        factText:
          "At this time, Mars' surface cannot support life as we know it. Current missions are determining Mars' past and future potential for life. It can get pretty cold on Mars, much colder than our own planet, since it's further away from the sun. At the equator, temperatures can reach 20°C, but at its poles they can plummet to as low as -140°C. Brr!",
        factImage: "Red Planet",
      },
    ],
  },
  {
    sectionTitle: "Moons of Mars",
    facts: [
      {
        factTitle: "How Many Moons?",
        factText:
          "Mars has two small moons, Phobos and Deimos, that may originally have been asteroids which were captured by Mars' gravitational field.",
        factImage: "Red Planet",
      },
      {
        factTitle: "Odd Shapes",
        factText:
          "The two moons of Mars, Phobos and Deimos, are potato shaped. This is because they have too little mass for gravity to make them spherical. I wonder if they taste like potato.",
        factImage: "Red Planet",
      },
      {
        factTitle: "Where Did They Get Their Names?",
        factText:
          "The moons get their names from the two mythical horses that pulled the chariot of the Greek god of war, Ares.",
        factImage: "Red Planet",
      },
    ],
  },
  {
    sectionTitle: "Nasa Craft on Mars",
    facts: [
      {
        factTitle: "Mars Exploration",
        factText:
          "There have been multiple missions to Mars over the years and these have landed several different types of vehicle on Mars to explore and gather data for study. NASA currently has two rovers (Curiosity and Perseverance), one lander (InSight), and one helicopter (Ingenuity) exploring the surface of Mars.",
        factImage: "Red Planet",
      },
      {
        factTitle: "Curiosity",
        factText:
          "The Curiosity rover launched on November 26, 2011 and successfully landed on Mars on August 5, 2012. Its mission has been to search areas of Mars for past or present conditions favorable for life, and conditions capable of preserving a record of life. This rover weighs 899kg (That's as heavy as a polar bear!), is 3m long, 2.7m wide and 2.2m tall. ",
        factImage: "Red Planet",
      },
      {
        factTitle: "Perseverance",
        factText:
          "The Perseverance rover is based on the Mars Science Laboratory's Curiosity rover configuration. It launched on July 30, 2020 and landed on Mars on February 18, 2021. It is car-sized, weighing in at 1,025kg! It's about 3 meters long, 2.7 meters wide, and 2.2 meters tall. it's main job is to seek signs of ancient life and collect samples of rock and regolith (broken rock and soil) for possible return to Earth.",
        factImage: "Red Planet",
      },
    ],
  },
  {
    sectionTitle: "Orbits, Rotation and Seasons",
    facts: [
      {
        factTitle: "orbit1",
        factText: "Orange Planet",
        factImage: "Red Planet",
      },
      {
        factTitle: "Chocolate Planet",
        factText: "Orange Planet",
        factImage: "Red Planet",
      },
      {
        factTitle: "Chocolate Planet",
        factText: "Orange Planet",
        factImage: "Red Planet",
      },
    ],
  },
];

// export const getFacts = (): Section[] => {
//   return facts
// };

export const getFacts = () => {
  return facts;
};
