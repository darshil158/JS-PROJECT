var targetDate = new Date(2026, 11, 31, 0, 0, 0);

var interval = setInterval(() => {

    var now = new Date();

    now = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
    var diffMs = targetDate - now;

    if (diffMs <= 0) {
        clearInterval(interval);
        document.getElementById("clock").innerHTML = "Time's up! The event has started 🎉";
        document.getElementById("clock").style.fontSize = "18px";
        return;
    }

    var diffSec = parseInt(diffMs / 1000);
    var diffMin = parseInt(diffSec / 60);
    var diffHour = parseInt(diffMin / 60);

    var seconds = diffSec % 60;
    var minutes = diffMin % 60;
    var hours = diffHour;

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("clock").innerHTML = hours + " : " + minutes + " : " + seconds;

}, 1000);