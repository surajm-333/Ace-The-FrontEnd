function requestAPI(){
  event.preventDefault();
  getIP();
}
function getIP(){
  const id=document.querySelector("#main__input").value
  let URL
  // Checking if id is not a number
  if(isNaN(id))
  URL=`https://api.ipdata.co/${id}?api-key=<Place your ipdata api>}`
  else
  URL=`https://api.ipdata.co/${id}?api-key=<Place your ipdata api>}`
  document.querySelector("#main__input").value=""
  fetch(URL)
  .then((res)=>res.json())
  .then((res)=>{
   
    // If error occurs then show the snackbar
    if(res.message){
      var x = document.getElementById("snackbar");
      x.innerText= res.message
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      return;
    }
     document.querySelector("#main__detail").innerHTML=`
     <div class="detail__item">
       <p class="main__subtitle">IP ADDRESS</p>
       <p class="main__text">${res.ip}</p>
     </div>
     <div class="detail__item">
       <p class="main__subtitle">LOCATION</p>
       <p class="main__text">${res.city},${res.region} ${res.postal}</p>
     </div>
     <div class="detail__item">
       <p class="main__subtitle">TIMEZONE</p>
       <p class="main__text">${res.time_zone.current_time}</p>
     </div>
     <div class="detail__item">
       <p class="main__subtitle">ISP</p>
       <p class="main__text">${res.asn.name}</p>
     </div>

     `
   buildMap(res.latitude,res.longitude)
  })
  .catch(err=>{
    console.log(err)
  })
}

// Function to display the map

function buildMap(lat,lng){
  document.querySelector("#map").innerHTML="<div id='mapid'></div>"
  var mymap = L.map('mapid').setView([lat, lng], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "Place your mapbox access token",
    }
  ).addTo(mymap);
  
  // For location icons
  let icon = L.icon({
    iconUrl: "./images/icon-location.svg",
  });

  let marker = L.marker([lat, lng], { icon: icon }).addTo(mymap);
}
getIP()
