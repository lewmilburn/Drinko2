let object = {};

function AddPlayer() {
    let Player = document.getElementById('HomeAddPlayer').value;

    document.getElementById('HomeAddPlayer').value = "";

    object[Player] = 0;
    console.log(object);
}