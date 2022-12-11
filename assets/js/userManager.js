let Players = {};

function AddPlayer() {
    let Player = document.getElementById('HomeAddPlayer').value;

    document.getElementById('HomeAddPlayer').value = "";

    Players[Player] = 0;
    console.log(Players);
}

function GetPlayerScore(Player) {
    console.log(Players[Player]);
}