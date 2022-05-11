const pick_ups = [
  {
    id: 10030,
    body: "Are you a parking ticket? ‘Cause you’ve got fine written all over you.",
  },
  {
    id: 10066,
    body: "There must be something wrong with my eyes, I can’t take them off you.",
  },
  {
    id: 10059,
    body: "Do you have a pencil? Cause I want to erase your past and write our future.",
  },
  {
    id: 10031,
    body: "Do you know what my shirt is made of? Boyfriend/girlfriend material?",
  },
  {
    id: 10073,
    body: "When I was walking by, I noticed you stalking so.. what’s up?",
  },
  {
    id: 10074,
    body: "Your shirt has to go, but you can stay.",
  },
  {
    id: 10067,
    body: "I was wondering if you had an extra heart. Mine was just stolen.",
  },
  {
    id: 10032,
    body: "I seem to have lost my phone number. Can I have yours?",
  },
  {
    id: 10040,
    body: "Did the sun come out or did you just smile at me?",
  },
  {
    id: 10033,
    body: "I’m lost. Can you give me directions to your heart?",
  },
  {
    id: 10076,
    body: "Hello. Cupid called. He wants to tell you that he needs my heart back.",
  },
  {
    id: 10069,
    body: "Hi, how was heaven when you left it?",
  },
  {
    id: 10041,
    body: "Was your dad a boxer? Because damn, you’re a knockout!",
  },
  {
    id: 10034,
    body: "Are you sure you’re not tired? You’ve been running through my mind all day.",
  },
  {
    id: 10077,
    body: "Hey, tie your shoes! I don’t want you falling for anyone else.",
  },
  {
    id: 10042,
    body: "I may not be a genie, but I can make your dreams come true.",
  },
  {
    id: 10078,
    body: "You know what material this is? [Grab your shirt] Boyfriend material.",
  },
  {
    id: 10050,
    body: "I’d say God Bless you, but it looks like he already did.",
  },
  {
    id: 10043,
    body: "Was you father an alien? Because there’s nothing else like you on Earth!",
  },
  {
    id: 10036,
    body: "Is there an airport nearby or is it my heart taking off?",
  },
  {
    id: 10001,
    body: "Do I know you? ‘Cause you look a lot like my next girlfriend/boyfriend.",
  },
  {
    id: 10079,
    body: "You might be asked to leave soon. You are making the other women look bad.",
  },
  {
    id: 10002,
    body: "I’m not a photographer, but I can picture me and you together.",
  },
  {
    id: 10044,
    body: "Is your name Google? Because you have everything I’ve been searching for.",
  },
  {
    id: 10052,
    body: "If nothing lasts forever, will you be my nothing?",
  },
  {
    id: 10045,
    body: "Hey, you’re pretty and I’m cute. Together we’d be Pretty Cute.",
  },
  {
    id: 10038,
    body: "Do you believe in love at first sight or should I pass by again?",
  },
  {
    id: 10003,
    body: "Are you religious? Because you’re the answer to all my prayers.",
  },
  {
    id: 10060,
    body: "Are you my phone charger? Because without you, I’d die.",
  },
  {
    id: 10053,
    body: "Hello, I’m a thief, and I’m here to steal your heart.",
  },
  {
    id: 10046,
    body: "Is it hot in here or is it just you?",
  },
  {
    id: 10029,
    body: "They say Disneyland is the happiest place on earth. Well apparently, no one has ever been standing next to you.",
  },
  {
    id: 10065,
    body: "Are you a dictionary? Cause you’re adding meaning to my life.",
  },
  {
    id: 10039,
    body: "Can I follow you home? Cause my parents always told me to follow my dreams.",
  },
  {
    id: 10004,
    body: "For some reason, I was feeling a little off today. But when you came along, you definitely turned me on.",
  },
  {
    id: 10047,
    body: "You must be a broom, ‘cause you just swept me off my feet.",
  },
  {
    id: 10061,
    body: "You don’t need keys to drive me crazy.",
  },
  {
    id: 10054,
    body: "Are you from Tennessee? Because you’re the only ten I see!",
  },
  {
    id: 10055,
    body: "I must be in a museum, because you truly are a work of art.",
  },
  {
    id: 10048,
    body: "There’s only one thing I want to change about you, and that’s your last name.",
  },
  {
    id: 10063,
    body: "You remind me of a magnet, because you sure are attracting me over here!",
  },
  {
    id: 10056,
    body: "I’m sorry, were you talking to me? [No] Well then, please start.",
  },
  {
    id: 10049,
    body: "Is your dad a terrorist? Cause you’re the bomb.",
  },
  {
    id: 10071,
    body: "Are you from Russia? ‘Cause you’re russian my heart rate!",
  },
  {
    id: 10064,
    body: "Didn’t I see you on the cover of Vogue?",
  },
  {
    id: 10072,
    body: "My buddies bet me that I wouldn’t be able to start a conversation with the hottest person in the bar. Wanna buy some drinks with their money?",
  },
  {
    id: 10075,
    body: "Kanye feel the love tonight?",
  },
  {
    id: 10068,
    body: "Somebody call the cops, because it’s got to be illegal to look that good!",
  },
  {
    id: 10000,
    body: "Are you a magician? Because whenever I look at you, everyone else disappears!",
  },
  {
    id: 10035,
    body: "Aside from being sexy, what do you do for a living?",
  },
  {
    id: 10051,
    body: "Can you take me to the doctor? Because I just broke my leg falling for you.",
  },
  {
    id: 10037,
    body: "Would you grab my arm, so I can tell my friends I’ve been touched by an angel?",
  },
  {
    id: 10062,
    body: "Sorry, but you owe me a drink. [Why?] Because when I looked at you, I dropped mine.",
  },
  {
    id: 10070,
    body: "I’m no mathematician, but I’m pretty good with numbers. Tell you what, give me yours and watch what I can do with it.",
  },
  {
    id: 10057,
    body: "Was your father a thief? ‘Cause someone stole the stars from the sky and put them in your eyes.",
  },
  {
    id: 10058,
    body: "Did it hurt? When you fell from heaven?",
  },
];

const btn = document.querySelector(".btn");
const lines = document.querySelector(".lines");

// adding the Lines to the DOM

function addLinesToTheDOM() {
  const lineArr = [];
  pick_ups.forEach((pick_up) => {
    lineArr.push(pick_up.body);
  });

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    lines.style.display = "block";
    const randomLine = Math.floor(Math.random() * lineArr.length - 1);
    lines.textContent = lineArr[randomLine];
  });
}

// Function invoke
addLinesToTheDOM();
