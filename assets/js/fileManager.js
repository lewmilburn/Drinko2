let Truths = [];
let Dares = [];
let Triggered = false;
let MaxRounds;

function LoadGame(mode) {
    Log('LoadGame','started',3);
    if (Object.keys(Players).length > 1) {
        Log('LoadGame','Mode selected: '+mode,3);
        ShowScreen(2,6);

        MaxRounds = document.getElementById('HomeSelectRounds').value;

        fetch("/data/"+mode+"/truths.json")
        .then(response => response.json())
        .then((responseJson) => {
            LoadedTruths(responseJson);
        })
        fetch("/data/"+mode+"/dares.json")
        .then(response => response.json())
        .then((responseJson) => {
            LoadedDares(responseJson);
        })
    } else {
        alert('You need to add some players first!');
    }
    Log('LoadGame','ended',3);
}

function LoadedTruths(responseJson) {
    Log('LoadedTruths','started',3);

    for(let i in responseJson)
        Truths.push(responseJson[i]);

    if (Truths !== null && Dares !== null && Triggered === false) {
        Triggered = true;
        ShowScreen(2,3);
        StartGame();
    }

    Log('LoadedTruths','ended',3);
}
function LoadedDares(responseJson) {
    Log('LoadedDares','started',3);

    for(let i in responseJson)
        Dares.push(responseJson[i]);

    if (Truths !== null && Dares !== null && Triggered === false) {
        Triggered = true;
        ShowScreen(2,3);
        StartGame();
    }

    Log('LoadedDares','ended',3);
}