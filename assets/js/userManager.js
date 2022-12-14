let Players = {};
let Turns = {};

function AddPlayer() {
    Log('AddPlayer','started',4);

    let Player = document.getElementById('HomeAddPlayer').value;

    document.getElementById('HomeAddPlayer').value = "";

    Players[Player] = 0;
    Turns[Player] = 0;

    let List = document.getElementById("HomePlayerList");

    if (Object.keys(Players).length < 10) {
        if (List.innerHTML === null) {
            List.innerHTML = '<li>' + Player + '</li>';
        } else {
            List.innerHTML = List.innerHTML + '<li>' + Player + '</li>';
        }
    } else {
        alert('You can\'t add any more players.');
    }

    Log('AddPlayer','ended',4);
}

function GetPlayerScore(Player) {
    Log('GetPlayerScore','started',4);
    
    console.log(Players[Player]);

    Log('GetPlayerScore','ended',4);
}

function LeaderboardAdd(Player, Amount) {
    Log('LeaderboardAdd','started',4);

    Players[Player] += Amount;

    Log('LeaderboardAdd','started',4);
}