let countSeconds = 3;

let counter = setInterval(() => {
    countSeconds--;
    if (countSeconds != 1) {
        document.getElementById("counter").innerHTML = `${countSeconds} Seconds`;
    } else {
        document.getElementById("counter").innerHTML = `${countSeconds} Second  `;
    }

    if (countSeconds <= 0) {
        clearInterval(counter);
    }

}, 1000);

let EndEvent = setTimeout(() => {

    document.getElementById("counter").innerHTML = "Time’s up! <br> The event has started 🎉";
    document.getElementById("counter").style.height = '200px';
    document.getElementById("counter").style.width = '500px';
}, 3000);
