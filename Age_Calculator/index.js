let btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let birthday = document.getElementById('birthday').value;
    let mybirthday=new Date(birthday);
    let bmonth=mybirthday.getMonth();
    let byear=mybirthday.getFullYear();
    let bdate=mybirthday.getDate();

    let curDate=new Date();
    let cdate=curDate.getDate();
    let cmonth=curDate.getMonth();
    let cyear=curDate.getFullYear();
    console.log(bmonth);
    console.log(cmonth);
    let year=cyear-byear;
    if(cmonth<bmonth){
        year--;
    }
    let ans = document.getElementById('ans');
    if(birthday==''){
        let alert=document.getElementById('alert');
        alert.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error !</strong> Please enter birthday to know your age.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      setTimeout(() => {
          alert.innerHTML="";
      }, 4000);
    }
    else if(byear>cyear){
        let alert=document.getElementById('alert');
        alert.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error !</strong> Date of birth needs to be earlier than current date.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      setTimeout(() => {
          alert.innerHTML="";
      }, 4000);
    }
    else if(byear==cyear && bmonth>cmonth ){
        let alert=document.getElementById('alert');
        alert.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error !</strong> Date of birth needs to be earlier than current date.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      setTimeout(() => {
          alert.innerHTML="";
      }, 4000);
    }
    else if(byear==cyear && bmonth<cmonth ){
        ans.style.display="block";
     ans.innerHTML = `<p style="margin-bottom:0rem;">You are : <b>${cmonth-bmonth} months old</b></p>`;
    }
    else if(byear==cyear && bmonth==cmonth &&bdate<cdate ){
        ans.style.display="block";
     ans.innerHTML = `<p style="margin-bottom:0rem;">You are : <b>${cdate-bdate} days old</b></p>`;
    }
    else if(byear==cyear && bmonth==cmonth && bdate>cdate){
        let alert=document.getElementById('alert');
        alert.innerHTML=`<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error !</strong> Date of birth needs to be earlier than current date.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      setTimeout(() => {
          alert.innerHTML="";
      }, 4000);
    }
    else{
     ans.style.display="block";
     ans.innerHTML = `<p style="margin-bottom:0rem;">You are : <b>${year} years old</b></p>`;
    }
})