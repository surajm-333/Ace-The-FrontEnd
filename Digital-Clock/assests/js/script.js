window.onload = function () {
    setInterval (function updateTime () {
    const hour = document.querySelector("#hours");
    const minute = document.querySelector("#minutes");
    const second = document.querySelector("#seconds");
    const apm = document.querySelector("#ampm");
    
    let dat = new Date();
    let hh = dat.getHours();
    let mm = dat.getMinutes();
    let ss = dat.getSeconds();

    if (hh >= 0 && hh <= 9) {
        hh = "0" + hh;
    }
    if (hh >= 12) {
        apm.innerHTML = "PM";
    }
    if (hh > 12) {
        if (hh < 22) {
            hh = "0" + (hh -12);
        }
        else {
            hh = (hh - 12);
        }
    }
    if (mm >= 0 && mm <= 9) {
        mm = "0" + mm;
    }
    if (ss >= 0 && ss <= 9) {
        ss = "0" + ss;
    }

    hour.innerHTML = hh;
    minute.innerHTML = mm;
    second.innerHTML = ss;

    const today_dat = document.querySelector("#date");
    let todaydate = dat.getDate();
    let month = dat.getMonth() + 1;
    let year = dat.getFullYear();

    if (date >= 0 && date <= 9) {
        todaydate = "0" + todaydate;
    }
    if (month >= 0 && month <= 9) {
        month = "0" + month;
    }
    if (year <= 0 && year >= 9) {
        year = "0" + year;
    }

    today_dat.innerHTML = `${todaydate}/${month}/${year}`;

    const today_day = document.querySelector("#day");
    let day_num = dat.getDay(), day = "";

    switch (day_num) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    today_day.innerHTML = day;
}, 1000);
};