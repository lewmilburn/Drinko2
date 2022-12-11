let Players = {};

function AddPlayer() {
    Log('AddPlayer','started',3);

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

    Log('AddPlayer','ended',3);
}

function GetPlayerScore(Player) {
    Log('GetPlayerScore','started',3);
    
    console.log(Players[Player]);

    Log('GetPlayerScore','ended',3);
}