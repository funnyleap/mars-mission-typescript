interface Fact {
  factTitle: string;
  factText: string;
  factImage: string;
}

export interface Section {
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
        factImage: "/images/redplanet.jpg",
      },
      {
        factTitle: "Mars in the Solar System",
        factText:
          "Mars is the fourth planet from the Sun, a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.",
        factImage: "/images/marssolarsystem.jpg",
      },
      {
        factTitle: "A day on Mars",
        factText:
          "A day on Mars is known as a 'sol', a Martian sol takes a little over 24 hours (24.6 to be exact). However, as Mars has a much longer orbit around the Sun than the Earth does, a Martian year actually takes 669.6 Martian sols (687 Earth days).",
        factImage: "/images/marsyear.jpg",
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
        factImage: "/images/marssize.jpg",
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
        factImage: "/images/phobosdeimos.jpg",
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
        factImage: "/images/curiosity.jpg",
      },
      {
        factTitle: "Perseverance",
        factText:
          "The Perseverance rover is based on the Mars Science Laboratory's Curiosity rover configuration. The largest and most advanced of any rover sent to another world, Perseverance launched on July 30, 2020 and landed on Mars on February 18, 2021. It is car-sized, weighing in at 1,025kg! It's about 3 meters long, 2.7 meters wide, and 2.2 meters tall. it's main job is to seek signs of ancient life and collect samples of rock and regolith (broken rock and soil) for possible return to Earth.",
        factImage: "Red Planet",
      },
      {
        factTitle: "InSight",
        factText:
          "NASA's InSight lander opened a window into the 'inner space' of Mars. Its instruments peered into the Martian subsurface, seeking the signatures of the processes that shaped the rocky planets of the inner solar system, more than four billion years ago. InSight's findings shed light on the formation of Mars, Earth, and even rocky exoplanets. The lander was built on the proven design of NASA's Mars Phoenix lander. InSight's robotic arm was over 5 feet 9 inches (1.8 meters) long. It lifted a seismometer and heat flow probe from the deck and placed them on the surface. The camera on the arm provided color 3D views of the landing site, instrument placement, and activities. Sensors measured weather and magnetic field variations.",
        factImage: "Red Planet",
      },
      {
        factTitle: "Ingenuity",
        factText:
          "The Mars Helicopter, Ingenuity, is a technology demonstration to test powered, controlled flight on another world for the first time. It hitched a ride to Mars on the Perseverance rover. Once the rover reached a suitable 'airfield' location, it released Ingenuity to the surface so it could perform a series of test flights over a 30-Martian-day experimental window. Ingenuity has paved the way for future aerial missions on the planet and has been utlised in scouting areas of potential significance for the Perseverance rover to explore.",
        factImage: "Red Planet",
      },
    ],
  },
  {
    sectionTitle: "Orbits, Rotation and Seasons",
    facts: [
      {
        factTitle: "Orbital Period",
        factText:
          "As Mars orbits the Sun, it completes one rotation every 24.6 hours, which is very similar to one day on Earth (23.9 hours). Martian days are called sols, short for 'solar day'. A year on Mars lasts 669.6 sols, which is the same as 687 Earth days.",
        factImage: "Red Planet",
      },
      {
        factTitle: "That's A Long Commute",
        factText:
          "From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars.",
        factImage: "Red Planet",
      },
      {
        factTitle: "Jaunty Angles",
        factText:
          "Mars' axis of rotation is tilted 25 degrees with respect to the plane of its orbit around the Sun. This is another similarity with Earth, which has an axial tilt of 23.4 degrees. Like Earth, Mars has distinct seasons, but they last longer than seasons here on Earth since Mars takes longer to orbit the Sun (because it's farther away). And while here on Earth the seasons are evenly spread over the year, lasting 3 months (or one quarter of a year), on Mars the seasons vary in length because of Mars' elliptical (egg-shaped) orbit around the Sun.",
        factImage: "Red Planet",
      },
      {
        factTitle: "Seasonal Changes",
        factText:
          "Spring in the northern hemisphere (autumn in the southern) is the longest season at 194 sols. Autumn in the northern hemisphere (spring in the southern) is the shortest at 142 days. Northern winter/southern summer is 154 sols, and northern summer/southern winter is 178 sols.",
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
