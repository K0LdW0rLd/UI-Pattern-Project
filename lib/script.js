console.log("I work");

var games = [
  {
    name: "Persona 5",
    storyline: "The story focuses on the 16-year-old protagonist after he is transferred to Syujin High School in Tokyo, Japan. Staying with friends of his parents, he meets up with problem child Ryuji Sakamoto, the withdrawn Ann Takamaki, art student Yusuke Kitagawa, and a talking, shape-shifting cat-like creature known as Morgana. \n \nDuring the protagonist's time there, feeling suppressed by their environment, the five form a group known as the \"Phantom Thieves of Hearts\", working together to explore the \"Palace\", a castle created by the hearts of people, and steal ill intent from others' hearts to help them: during this quest, they confront adult authority figures opposing them, along with a greater enemy revealed by their activities.",
    summary: "Persona 5, a turn-based JRPG with visual novel elements, follows a high school student with a criminal record for a crime he didn't commit. Soon he meets several characters who share similar fates to him, and discovers a metaphysical realm which allows him and his friends to channel their pent-up frustrations into becoming a group of vigilantes reveling in aesthetics and rebellion while fighting corruption."
  },
  {
   name: "Final Fantasy XV",
   storyline: "The game takes place in a world similar to modern-day Earth. The nations of the world once waged war over control of the world's crystals, and all but the nation of Lucis have lost theirs and regressed to medieval societies. Noctis Lucis Caelum, Crown Prince of the kingdom of Lucis—having gained magical power from a near-death experience—is driven from his home when the empire of Niflheim invades Lucis on the eve of the final peace negotiations between the two nations. Now on the run with his companions, Noctis begins to work towards defeating the forces of Niflheim and rescuing the crystal from their control.",
   summary: "Final Fantasy XV is an action role-playing video game being developed and published by Square Enix for the PlayStation 4 and Xbox One. It is the fifteenth main installment in the Final Fantasy series, and forms part of the Fabula Nova Crystallis subseries, which also includes Final Fantasy XIII and Final Fantasy Type-0. \n \nOriginally a spin-off titled Final Fantasy Versus XIII exclusive to the PlayStation 3, it is a heavy departure from previous games, providing a darker atmosphere that focuses on more realistic human characters than previous entries. The game features an open-world environment and action-based battle system similar to the Kingdom Hearts series and Type-0, incorporating the ability to switch weapons and other elements such as vehicle travel and camping."
  },
  {
    name: "Uncharted 4: A Thief's End Libertalia Collector's Edition",
    summary: "Uncharted 4: A Thief's End is an upcoming American action-adventure video game published by Sony Computer Entertainment and developed by Naughty Dog exclusively for the PlayStation 4. Initially teased at Spike TV's PS4 launch event on November 14, 2013, a full in-engine trailer confirmed the title during Sony's E3 2014 press conference on June 9, 2014. The game is set to release in 2015. \n \nSeveral years after the events of Uncharted 3: Drake's Deception, Nathan Drake, who retired as a fortune hunter, will embark on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. Naughty Dog outlined the game's plot as \"his greatest adventure yet and will test his physical limits, his resolve, and ultimately what he's willing to sacrifice to save the ones he loves\"."
  },
  {
    name: "Horizon: Zero Dawn Complete Edition",
    summary: "In an era where machines roam the land and mankind is no longer the dominant species, a young hunter named Aloy embarks on a journey to discover her destiny. Explore a vibrant and lush world inhabited by mysterious mechanized creatures. Embark on a compelling, emotional journey and unravel mysteries of tribal societies, ancient artefacts and enhanced technologies that will determine the fate of this planet and of life itself. \n \nHorizon: Zero Dawn Complete Edition includes Horizon Zero Dawn and the frozen wilds expansion."
  },
  {
    name: "Shadow of the Tomb Raider",
    storyline: "Experience Lara Croft’s defining moment as she becomes the Tomb Raider. In Shadow of the Tomb Raider, Lara must master a deadly jungle, overcome terrifying tombs, and persevere through her darkest hour. As she races to save the world from a Maya apocalypse, Lara will ultimately be forged into the Tomb Raider she is destined to be.",
    summary: "As Lara Croft races to save the world from a Maya apocalypse, she must become the Tomb Raider she is destined to be.
  },
  {
    name: "Watch Dogs 2",
    storyline: "In 2016, ctOS 2.0, an advanced operating system networking city infrastructure, was implemented in several US cities to create safer, more efficient metropolises. \n \nPlay as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech revolution, the San Francisco Bay Area. Team up with Dedsec, a notorious group of hackers, and expose the hidden dangers of ctOS 2.0, which, in the hands of corrupt corporations, is being wrongfully used to monitor and manipulate citizens on a massive scale. \n \nWith the power of hacking and Dedsec by your side, launch the Hack of the Century, take down ctOS 2.0, and give freedom back to who it belongs to: the people.",
    summary: "Explore a massive and dynamic open world offering an incredible variety of gameplay possibilities. Hack your way through traffic while you engage in dangerous car chases through the winding streets of San Francisco, traverse the rooftops of the colorful and vibrant neighborhoods of Oakland, and infiltrate the cutting-edge offices of Silicon Valley companies. There are many secrets to uncover in the birthplace of the tech revolution."
  },
  {
    name: "Rise of the Tomb Raider",
    summary: "Join Lara Croft on her first great tomb raiding expedition as she seeks to discover the secret of immortality. Featuring high-octane action set in the most beautiful and hostile environments on earth, Rise of the Tomb Raider delivers cinematic survival action-adventure."
  },
  {
    name: "Bloodborne: Collector's Edition",
    summary: "Face your fears as you search for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like wildfire. Danger, death and madness lurk around every corner of this dark and horrific world, and you must discover its darkest secrets in order to survive. \n \nA Terrifying New World: Journey to a horror-filled gothic city where deranged mobs and nightmarish creatures lurk around every corner. \n \nStrategic Action Combat: Armed with a unique arsenal of weaponry, including guns and saw cleavers, you'll need wits, strategy and reflexes to take down the agile and intelligent enemies that guard the city's dark secrets. \n \nA New Generation of Action RPG: Stunningly detailed gothic environments, atmospheric lighting, and advanced new online experiences showcase the power and prowess of the PlayStation(R)4 system."
  },
  {
    name: "Life is Strange",
    storyline: "Life is Strange is a five part episodic game that sets out to revolutionise story based choice and consequence games by allowing the player to rewind time and affect the past, present and future. \n \nYou are Max, a photography senior who saves her old friend Chloe by discovering she can rewind time. The pair soon find themselves exposed to the darker side of Arcadia Bay as they uncover the disturbing truth behind the sudden disappearance of a fellow student. \n \nMeanwhile, Max begins to have premonitions as she struggles to understand the implications of her power. She must quickly learn that changing the past can sometimes lead to a devastating future.",
    summary: "Reunited with her former friend Chloe, the pair will attempt to uncover the uncomfortable truth behind the mysterious disappearance of fellow student Rachel Amber. With high quality production values and a unique hand-drawn art style, LIFE IS STRANGE is a compelling, story-driven experience where choice and consequence play a key role in how the narrative unfolds. But there is a twist. At the beginning of the game Max discovers she has a remarkable power… the ability to rewind time. In LIFE IS STRANGE the player has the power to affect the game’s narrative and also change the course of history itself."
  },
  {
    name: "God of War",
    summary: "\"It is a new beginning for Kratos. Living as a man, outside the shadow of the gods, he seeks solitude in the unfamiliar lands of Norse mythology. With new purpose and his son at his side, Kratos must fight for survival as powerful forces threaten to disrupt the new life he has created...\""
  },
  {
    name: "The Last of Us Remastered",
    storyline: "Twenty years after a mutated fungus started turning people all over the world into deadly zombies, humans become an endangered species. Joel, a Texan in his forties with the \"emotional range of a teaspoon\" (to quote Hermione from Harry Potter), finds himself responsible with the safety of a fourteen year old girl named Ellie whom he must smuggle to a militia group called the Fireflies. And as if the infected aren't enough of a hassle, they also have to deal with the authorities who wouldn't let them leave the quarantine zone, as well as other survivors capable of killing anyone who might have something useful in their backpacks.",
    summary: "Winner of over 200 game of the year awards, The Last of Us has been remastered for the PlayStation®4. Now featuring higher resolution character models, improved shadows and lighting, in addition to several other gameplay improvements. \n \nAbandoned cities reclaimed by nature. A population decimated by a modern plague. Survivors are killing each other for food, weapons whatever they can get their hands on. Joel, a brutal survivor, and Ellie, a brave young teenage girl who is wise beyond her years, must work together if they hope to survive their journey across the US. \n \nThe Last of Us: Remastered includes the Abandoned Territories Map Pack, Reclaimed Territories Map Pack, and the critically acclaimed The Last of Us: Left Behind Single Player campaign. \n \nPS4 PRO ENHANCED: \n- PS4 Pro HD \n- Dynamic 4K Gaming \n- Greater Draw Distance \n- Visual FX \n- Vivid Textures \n- Deep Shadows \n- High Fidelity Assets \n- HDR"
  },
  {
    name: "Marvel's Spider-Man",
    summary: "Starring the world’s most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it’s Spider-Man unlike any you’ve played before."
  }
]

const url = 'https://api-v3.igdb.com/games/';
const persona = document.querySelector('#persona')
const finalFantasy = document.querySelector('#finalFantasy')
const uncharted = document.querySelector('#uncharted')
const horizonZeroDawn = document.querySelector('#horizonZeroDawn')
const shadowTombRaider = document.querySelector('#shadowTombRaider')
const watchDogs = document.querySelector('#watchDogs')
const riseTombRaider = document.querySelector('#riseTombRaider')
const bloodborne = document.querySelector('#bloodborne')
const lifeStrange = document.querySelector('#lifeStrange')
const godWar = document.querySelector('#godWar')
const lastOfUs = document.querySelector('#lastOfUs')
const spiderMan = document.querySelector('#spiderMan')

// Add Event Listener
persona.addEventListener('click', evt =>{
  evt.preventDefault();

  fetch('https://api-v3.igdb.com/games/', {
    method: 'POST',
    mode: 'cors',
    header: {
      "user-key": "c0502b9e6b603d8169f6c40676b33c42"
    }
    // data: 'Persona 5'
  })
  .then(res => res.json())
  .then(res => {
  console.log(res);
  })
  .catch(err =>{
    console.log(err)
  })
})
