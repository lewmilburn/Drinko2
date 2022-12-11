let Players = {};

function AddPlayer() {
    let Player = document.getElementById('HomeAddPlayer').value;

    document.getElementById('HomeAddPlayer').value = "";

    Players[Player] = 0;
    console.log(Players);

    let List = document.getElementById("HomePlayerList");
    if (List.innerHTML === null) {
        List.innerHTML = '<li>' + Player + '</li>';
    } else {
        List.innerHTML = List.innerHTML + '<li>' + Player + '</li>';
    }
}

function GetPlayerScore(Player) {
    console.log(Players[Player]);
}