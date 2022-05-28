function getInputValue() {
  var inputVal = document.getElementById("userinput").value;
  var z =inputVal.toString();
  var zodiac = z.toLowerCase();
  var items = Array(
    
  "Focus on the simple pleasures today.  Realize that everything you need is all inside you..",

  " Focus on your creative mind. You're above petty squabbles, so don't waste your time on them.",
  
  "Motivation must come from within. Feel the ground beneath your feet.",

  "Your mind should be quite clear today, and communication will go extremely well for you.",

  "Strong forces may be acting up and asking you to stand up a little straighter than usual.",

  "Feel free to take the lazy route today. Don't lift a finger if you don't really have to. ",

  "Your thinking is steady and reserved today. Proceed with caution and be honest in all your dealings.",

  "Today is an excellent day for you to say exactly how you feel.",

  "You might find that your brain is chugging along in the slow lane today. ",
  
  
  );

  var item = items[Math.floor(Math.random()*items.length)];


  if (zodiac == "leo" || zodiac == "aries" || zodiac == "taurus" || zodiac == "gemini" || zodiac == "cancer" || zodiac == "virgo" || zodiac == "libra" || zodiac == "scorpio" || zodiac == "sagittarius" || zodiac == "capricorn" ||zodiac == "aquarius" || zodiac == "pisces") {
    document.getElementById("result").value = item;
  }
  else {
    alert("Wrong Zodiac Sign!");
    document.getElementById("userinput").value = "";
  }
}




function reset() {
  document.getElementById("userinput").value = "";
  document.getElementById("result").value = "";
}