let Truths = null;
let Dares = null;

function LoadGame() {
    let LoadedTruths = false;
    let LoadedDares = false;

    fetch("https://drinko.co.uk/data/truths.json")
        .then(response => response.json())
        .then(json => Truths = json)
    /*fetch("./data/dares.json")
        .then(response => response.json())
        .then(json => Dares = json);*/
    while (true) {
        if (Truths !== null && Dares !== null) {
            ShowScreen(2,3);
            StartGame();
            break;
        }
    }
}

function StartGame() {
    let Message = document.getElementById('Message');
    let Submessage = document.getElementById('Submessage');

    Message.innerHTML = 'Round 1 Message';
    Submessage.innerHTML = 'Round 1 Submessage';
}

function NextRound() {
    let Message = document.getElementById('Message');
    let Submessage = document.getElementById('Submessage');

    Message.innerHTML = 'Round 2 Message';
    Submessage.innerHTML = 'Round 2 Submessage';
}

function Answer(Number) {
    NextRound();
}