const dropdown=$('#Dog-breed');
const next=$('#next');
var submit=true;
var breed;

$.get('https://dog.ceo/api/breeds/list/all',function(data,status){
    let dogBreeds=data.message;
    //console.log(dogBreeds);
    for(let dogs in dogBreeds){
        dropdown.append('<option value="' + dogs + '">' + dogs + '</option>');
    }
})

dropdown.change(function(){
    submit=true;
   
    let breed = dropdown.val();
    let url = "https://dog.ceo/api/breed/" + breed + "/list";

    $("#dog-sub-breeds").remove();

    $.get(url, function (data) {
       
        if (data.message.length !== 0) {
            //console.log("hi")
            let subBreeds = data.message;

            dropdown.after('<select id="dog-sub-breeds"></select>');

            //var subDropdown = $("#dog-sub-breeds");

            for (let subBreed of subBreeds) {
                $("#dog-sub-breeds").append('<option value="' + subBreed + '">' + subBreed + '</option>');
                console.log(subBreed);
            }
        }

    });
})

$('#fetch-dog-image-button').click((e)=>{
   // $('#breed-image').hide();
    e.preventDefault();
    if (submit) {
        breed = dropdown.val();
        //console.log(breed);
       $("#breed-image").hide();
        $(".container").show();
        displayDog(breed);
        submit = false;
    }
})

next.click((e)=>{
    e.preventDefault();
    if(breed!==undefined){
        displayDog(breed);
    }
});

function displayDog(breed){
    let url="https://dog.ceo/api/breed/"+breed+"/images/random";
    $.get(url,(data,status)=>{
        var imageUrl=data.message;
        console.log("hello")
         $('#dog-image').attr('src',imageUrl);
    }) 
}

var toggle = true;
$(document).ready(() => {
    $("#gallery").click((e) => {
      e.preventDefault();
      submit=true;
      if(toggle)
      {
          toggle=false;
          $(".container").hide();
          $("#breed-image").show();
      }
      else
      {
        //displayDog(breed);
        $(".container").show();
        $("#breed-image").hide();
        toggle=true;
      }
      let breed = dropdown.val();
      let subbreed = $("#dog-sub-breeds").val();
      console.log(subbreed);
      let url = "https://dog.ceo/api/breed/" + breed;
      if (subbreed !== undefined) {
        url += `/${subbreed}`;
      }
      url += "/images";
      $("#breed-image img").remove();
      $.get(url, (data) => {
        var imagesUrl = data.message;
        for (let image of imagesUrl) {
          $("#breed-image").append(
            '<img src="' + image + '" alt="' + breed + '">'
          );
        }
      });
    });
  });