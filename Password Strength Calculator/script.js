
// Calculates number, alpha and special characters in Password 
function Count(str)
{
  var upper = 0,
    lower = 0,
    number = 0,
    special = 0;
  for (var i = 0; i < str.length; i++)
  {
    if (str[i] >= "A" && str[i] <= "Z") upper++;
    else if (str[i] >= "a" && str[i] <= "z") lower++;
    else if (str[i] >= "0" && str[i] <= "9") number++;
    else special++;
  }


  Strength(str , upper , lower , number , special );
}

//Specifies the strength of Password according to respective conditions(where strg is the input string,uc for uppercase,
//lc for lowercase,nm for numbers,sp forspecial characters)
function Strength(strg , uc , lc , nm , sp) {
       
    var weak = 0,
    medium = 0,
    strong = 0;
    time=0;

    if(strg.length<=5){
       weak++;
        
    }
    
    else if(strg.length <= 10){
        if (uc && lc && nm && sp) strong++;
        else if(uc && lc && nm || uc && lc && sp || uc && sp && nm || sp && lc && nm || uc && lc || uc && sp || sp && lc || lc && nm || uc && nm || lc && sp) medium++;
        else weak++;
    }
    else if(strg.length <= 16){
      if (uc && lc && nm && sp) strong++;
      else if(uc && lc && nm || uc && lc && sp || uc && sp && nm || sp && lc && nm || uc && lc || uc && sp || sp && lc || lc && nm || uc && nm || lc && sp) medium++;
      else if(nm || lc || uc) medium++;
       else weak++;
    }

    else if(strg.length<=25){
      if (uc && lc && nm && sp) strong++;
      else if(uc && lc && nm || uc && lc && sp || uc && sp && nm || sp && lc && nm || uc && lc || uc && sp || sp && lc || lc && nm || uc && nm || lc && sp) medium++;
      else if(nm || lc || uc) medium++;
      else weak++;
    }
    else if(strg.length <= 35){
        if (uc && lc && nm && sp) strong++;
        else if(uc && lc && nm || uc && lc && sp || uc && sp && nm || sp && lc && nm || uc && lc || uc && sp || sp && lc || lc && nm || uc && nm || lc && sp) medium++;
        else if(nm || lc || uc) medium++;
        else weak++;
    }
    else{
      alert("Password Should Be less Than 30 characters")};
    
      var ans='';
    if(weak){
      ans="Weak" ;
      document.getElementById("demo").style.background="#FF1818";
      document.getElementById("demo").style.color="white";
    } 
    if(medium){
      ans="Medium";
      document.getElementById("demo").style.background="#FF7800";
      document.getElementById("demo").style.color="white";
    }
      if(strong){
      ans="Strong";
      document.getElementById("demo").style.background="#54E346";
      document.getElementById("demo").style.color="white";
  }

    populate(ans); //Calling populate function


// Determining 'Tiem to hack' the entered password
    if((strg.length < 5) && (strg!="")){
      // combination of singles 
               if(nm && !(uc && lc && sp)) time="0.5 seconds";
               else if(uc && !(nm && lc || sp)) time="5~10 seconds";
               else if(lc && !(uc && nm || sp)) time="24 seconds";
               else if(sp && !(uc && lc || nm)) time="Don't go there :)";
      
      // combination of twos
               else if(nm && uc && !( lc || sp)) time="9.6 seconds";
               else if(nm && sp && !( lc || uc)) time="2.8 minutes";
      
               else if(uc && sp && !( lc || nm)) time="9.07 seconds";
      
               else if(lc && nm && !( uc || sp)) time="18.36 minutes";
               else if(lc && sp && !( nm || uc)) time="10 minutes";
               else if(lc && uc && !( nm || sp)) time="3.2 minutes";
      
      
      // Combination of threes
               else if(lc && uc && nm && !(sp)) time="4.1 seconds";
               else if(sp && uc && nm && !(lc)) time="2.74 minutes";
               else if(lc && uc && sp && !(nm)) time="43.5 minutes";
               else if(lc && sp && nm && !(uc)) time="18.6 minutes";
      
      // Combination of fours
               else if(lc && uc && nm && sp) time="212 years";
      
      
            }

            else if((strg.length < 10) && (strg!="")){
              // combination of singles 
                       if(nm && !(uc || lc || sp)) time="8.33 minutes";
                       else if(uc && !(nm || lc || sp)) time="17 hours";
                       else if(lc && !(uc || nm || sp)) time="12~30 seconds";
                       else if(sp && !(uc || lc || nm)) time="Symbols alone won't cut it :)";
              
              // combination of twos
                       else if(nm && uc && !( lc || sp)) time="2 months";
                       else if(nm && sp && !( lc || uc)) time="17 days";
                       else if(uc && sp && !( lc || nm)) time="5 years";
                       else if(lc && nm && !( uc || sp)) time="815 years";
                       else if(lc && sp && !( nm || uc)) time="233 years";
                       else if(lc && uc && !( nm || sp)) time="22 minutes";
              
              
              // Combination of threes
                       else if(lc && uc && nm && !(sp)) time="22 days";
                       else if(sp && uc && nm && !(lc)) time="25 years";
                       else if(lc && uc && sp && !(nm)) time="6 months";
                       else if(lc && sp && nm && !(uc)) time="815 years";
              
              // Combination of fours
                       else if(lc && uc && nm && sp) time="212 years";
                    }

            else if((strg.length < 16) && (strg!="")){
              // combination of singles 
                       if(nm && !(uc || lc || sp)) time="41 minutes";
                       else if(uc && !(nm || lc || sp)) time="10 years";
                       else if(lc && !(uc || nm || sp)) time="22.94 seconds";
                       else if(sp && !(uc || lc || nm)) time="That won't cut it pal :)";
              
              // combination of twos
                       else if(nm && uc && !( lc || sp)) time="124 million years";
                       else if(nm && sp && !( lc || uc)) time="49 thousand years";
                       else if(uc && sp && !( lc || nm)) time="8 million years";
                       else if(lc && nm && !( uc || sp)) time="25 million years";
                       else if(lc && sp && !( nm || uc)) time="1 billion years";
                       else if(lc && uc && !( nm || sp)) time="5 years";
              
              
              // Combination of threes
                       else if(lc && uc && nm && !(sp)) time="719 million years";
                       else if(sp && uc && nm && !(lc)) time="2 million years";
                       else if(lc && uc && sp && !(nm)) time="3 thousand years";
                       else if(lc && sp && nm && !(uc)) time="82 million years";
              
              // Combination of fours
                       else if(lc && uc && nm && sp) time="345 billion years";
                    }

                    else if((strg.length < 25) && (strg!="")){
                      // combination of singles 
                               if(nm && !(uc || lc || sp)) time="9 months";
                               else if(uc && !(nm || lc || sp)) time="16 thousand years";
                               else if(lc && !(uc || nm || sp)) time="2 billion years";
                               else if(sp && !(uc || lc || nm)) time="Still risky pal :)";
                      
                      // combination of twos
                               else if(nm && uc && !( lc || sp)) time="211 trillion years";
                               else if(nm && sp && !( lc || uc)) time="1 trillion years";
                               else if(uc && sp && !( lc || nm)) time="3 million years";
                               else if(lc && nm && !( uc || sp)) time="69 million years";
                               else if(lc && sp && !( nm || uc)) time="5 trillion years";
                               else if(lc && uc && !( nm || sp)) time="2 billion years";
                      
                      
                      // Combination of threes
                               else if(lc && uc && nm && !(sp)) time="2 trillion trillion years";
                               else if(sp && uc && nm && !(lc)) time="2 billion trillion years";
                               else if(lc && uc && sp && !(nm)) time="38 trillion trillion years";
                               else if(lc && sp && nm && !(uc)) time="2 trillion years";
                      
                      // Combination of fours
                               else if(lc && uc && nm && sp) time="44 billion trillion years";
                            }

                            else if((strg.length < 35) && (strg!="")){
                              // combination of singles 
                                       if(nm && !(uc && lc && sp)) time="41 minutes";
                                       else if(uc && !(nm && lc || sp)) time="10 years";
                                       else if(lc && !(uc && nm || sp)) time="22.94 seconds";
                                       else if(sp && !(uc && lc || nm)) time="That won't cut it pal :)";
                              
                              // combination of twos
                                       else if(nm && uc && !( lc || sp)) time="124 million years";
                                       else if(nm && sp && !( lc || uc)) time="49 thousand years";
                                       else if(uc && sp && !( lc || nm)) time="8 million years";
                                       else if(lc && nm && !( uc || sp)) time="25 million years";
                                       else if(lc && sp && !( nm || uc)) time="1 billion years";
                                       else if(lc && uc && !( nm || sp)) time="5 years";
                              
                              
                              // Combination of threes
                                       else if(lc && uc && nm && !(sp)) time="719 million years";
                                       else if(sp && uc && nm && !(lc)) time="2 million years";
                                       else if(lc && uc && sp && !(nm)) time="3 thousand years";
                                       else if(lc && sp && nm && !(uc)) time="82 million years";
                              
                              // Combination of fours
                                       else if(lc && uc && nm && sp) time="345 billion years";
                                    }
                                    else
                                    time="Enter Valid password";    

    document.getElementById("cn").innerHTML= "Time to hack: " + time ;
    document.getElementById("cn").style.background="#d4ff83";
           
}

function populate(ans) {
    document.getElementById("demo").innerHTML=ans;
    
}

// Function to calculate the no. of characters in the password
function calc() {
    var input = document.getElementById("password").value;
    var x=input.length;

    document.getElementById("nochar").innerHTML = "The no. of characters: " + x;
    document.getElementById("nochar").style.background="#d4ff83";
    Count(input);
}

// Function for 'Show/Hide' option 
function toggle(){
  var input = document.getElementById("password");
  if(input.type === "password"){
    input.type ="text";
    toggleBtn.textContent = "Show";
  }
  else{
    input.type="password";
    toggleBtn.textContent = "Hide";
  }
}

// Tips section
const tips=document.getElementById("main-menu");
const btn=document.getElementById("btn");
btn.onclick=function(){
    if(tips.style.display !=="none")
   tips.style.display="none";
   else
   tips.style.display="flex";
}

































