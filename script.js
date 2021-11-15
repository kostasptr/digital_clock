function myFunction() {
  setInterval(function(){

    var d = new Date();
    // day of the month (1 to 31)
    let date = d.getDate();
    // returns the day of the week (1 to 6)
    let day = d.getDay();
    // returns the hour (0 to 23) of a date
    let hour = d.getHours();
    // returns the minutes (0 to 59) of a date
    let minutes = d.getMinutes();
    // returns the seconds (0 to 59) of a date
    let seconds = d.getSeconds();
    let meridiem = "AM";

    if (hour > 12){
      meridiem = "PM";
    }

    switch (day) {
      case 0:
        day = "SUN";
        break;
      case 1:
        day = "MON";
        break;
      case 2:
        day = "TUE";
        break;
      case 3:
        day = "WED";
        break;
      case 4:
        day = "THU";
        break;
      case 5:
        day = "FRI";
        break;
      case 6:
        day = "SAT";
    }

    if (hour < 10) { 
      hour = "0" + hour;;
    }

    if (minutes < 10) { 
      minutes = "0" + minutes;;
    }

    if (seconds < 10) { 
      seconds = "0" + seconds;;
    }

    var x = document.querySelectorAll(".query");
    for (i=0; i<x.length; ++i){
      // x[i].innerHTML = `${day} ${hour} : ${minutes}`;
      x[i].innerHTML = `${day} ${hour}  ${minutes} ${meridiem}`;
    }


  }, 1000);
}