
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "software engineer",
      img:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80.jpg",
      text:
        "one of my hobbies is mushroom cultivation. and when i'm cultivating mushrooms this works great. I saw one of these in Tanzania and I bought one. gift works quite well. It pointedly improves my golf by a lot. My neighbor Frona has one of these. She works as a gambler and she says it looks bearded.",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80.jpg",
      text:
        "My neighbor Lular has one of these. She works as a cake decorator and she says it looks ragged. heard about this on bouyon radio, decided to give it a try. i use it never again when i'm in my station. The box this comes in is 3 kilometer by 5 foot and weights 16 megaton!!!"
    },
    {
      id: 3,
      name: "peter jones",
      job: "Data Analyst",
      img:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60.jpg",
      text:
        "heard about this on powerviolence radio, decided to give it a try. one of my hobbies is hiking. and when i'm hiking this works great. this gift is awesome. My neighbor Georgie has one of these. She works as a busboy and she says it looks brown.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "Backend developer",
      img:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80.jpg",
      text:
        "My co-worker Kazuo has one of these. He says it looks transparent. I saw one of these in New Zealand and I bought one. My goldfinch loves to play with it. tried to behead it but got truffle all over it.",
    },
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  
  
  let currentItem = 0;
  
  
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
 
  
    
  