let targetDate = new Date(2027, 1, 1, 0, 0, 0); 

let interval = setInterval(() => {

    let now = new Date();

    now = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
    
    let diffMs = targetDate - now;

    if (diffMs <= 0) {
        clearInterval(interval);
        document.getElementById("clock").innerHTML = "Time's up! The event has started 🎉";
        document.getElementById("clock").style.fontSize = "18px";
        return;
    }

    let diffSec = parseInt(diffMs / 1000);
    let diffMin = parseInt(diffSec / 60);
    let diffHour = parseInt(diffMin / 60);
    let diffDay = parseInt(diffHour / 24);

    let seconds = diffSec % 60;
    let minutes = diffMin % 60;
    let hours = diffHour % 24;
    let days = diffDay;

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (days < 30) {
        days = "0" + days;
    }
    

    document.getElementById("clock").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";

}, 1000);
