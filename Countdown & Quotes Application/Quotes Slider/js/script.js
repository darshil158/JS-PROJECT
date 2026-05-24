let quo = [
    {
        quote: "“The best way to get started is to quit talking and begin doing.”",
        name: "— Walt Disney"
    },
    {
        quote: "“Success is not final, failure is not fatal: it is the courage to continue that counts.”",
        name: "— Winston Churchill"
    },
    {
        quote: "“Dream big and dare to fail.”",
        name: "— Norman Vaughan"
    },
    {
        quote: "“Do something today that your future self will thank you for.”",
        name: "— Theodore Roosevelt"
    },
    {
        quote: "“Your time is limited, so don’t waste it living someone else’s life.”",
        name: "— Steve Jobs"
    },
    {
        quote: "“Small steps every day lead to big results.”",
        name: "— Walt Disney"
    },
    {
        quote: "“Happiness depends upon ourselves.”",
        name: "— Aristotle"
    },
    {
        quote: "“Push yourself, because no one else is going to do it for you.”",
        name: "— Walt Disney"
    },
    {
        quote: "“Great things never come from comfort zones.”",
        name: "— Walt Disney"
    }
];
let index = 0;
setInterval(() => {

    index++;

    if (index >= quo.length) {
        index = 0;
    }

    document.getElementById("quotes").innerHTML = quo[index].quote;
    document.getElementById("name").innerHTML = quo[index].name;

}, 3000);

