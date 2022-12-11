let Truths = [];
let Dares = [];

function LoadGame() {
    Log('LoadGame','started',3);

    fetch("https://drinko.co.uk/data/truths.json")
    .then(response => response.json())
    .then((responseJson) => {
        LoadedTruths(responseJson);
    })
    fetch("https://drinko.co.uk/data/dares.json")
    .then(response => response.json())
    .then((responseJson) => {
        LoadedDares(responseJson);
    })

    Log('LoadGame','ended',3);
}

function LoadedTruths(responseJson) {
    Log('LoadedTruths','started',3);

    for(var i in responseJson)
        Truths.push(responseJson[i]);

    if (Truths !== null && Dares !== null) {
        ShowScreen(2,3);
        StartGame();
    }

    Log('LoadedTruths','ended',3);
}
function LoadedDares(responseJson) {
    Log('LoadedDares','started',3);

    for(var i in responseJson)
        Dares.push(responseJson[i]);

    if (Truths !== null && Dares !== null) {
        ShowScreen(2,3);
        StartGame();
    }

    Log('LoadedDares','ended',3);
}