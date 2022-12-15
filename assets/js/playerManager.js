let Players = {};
let Turns = {};

function AddPlayer() {
    Log('AddPlayer','started',4);

    let Player = document.getElementById('HomeAddPlayer').value;

    document.getElementById('HomeAddPlayer').value = "";

    Players[Player] = 0;
    Turns[Player] = 0;

    let List = document.getElementById("HomePlayerList");

    if (Object.keys(Players).length <= 15) {
        if (Player === '69') { alert('Nice ;)'); }
        else if (Player === '420') { alert('Blaze it!'); }
        else if (Player === '') {return;}

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

function LeaderboardAdd(Player, Amount) {
    Log('LeaderboardAdd','started',4);

    Players[Player] += Amount;

    Log('LeaderboardAdd','started',4);
}

function GetRandomPlayer() {
    Log('GetRandomPlayer','started',4);

    let PlayerID = Math.floor(Math.random() * (Object.keys(Players).length));

    if (Math.floor(Math.random() * 2) == 0) {
        NextPlayer = GetUserLowestTurns();
    } else {
        NextPlayer = Object.keys(Players)[PlayerID];
    }

    Log('GetRandomPlayer','Selected: ' + NextPlayer,3);
    Log('GetRandomPlayer','ended',4);
}

function GetUserLowestTurns() {
    Log('GetUserLowestTurns','started',4);

    let LowestUser = Object.keys(Turns).find(key => Turns[key] === (Object.keys(Turns).reduce((acc, val) => {
        return Math.min(acc, Turns[val]);
        }, Infinity)));

    Log('GetUserLowestTurns','Selected ' + LowestUser,3);

    Log('GetUserLowestTurns','ended',4);
    return LowestUser
}

function GetRandomReplacePlayer() {
    Log('GetRandomReplacePlayer','started',4);

    while (true) {
        let PlayerID = Math.floor(Math.random() * (Object.keys(Players).length));
        NextSecondPlayer = Object.keys(Players)[PlayerID];
        if (NextSecondPlayer !== NextPlayer) {
            Log('GetRandomReplacePlayer','Break RP: '+NextSecondPlayer+' - NP: '+NextPlayer,3);
            break;
        } else {
            Log('GetRandomReplacePlayer','No break RP: '+NextSecondPlayer+' - NP: '+NextPlayer,3);
        }
    }

    Log('GetRandomReplacePlayer','Selected: ' + NextSecondPlayer,3);
    Log('GetRandomReplacePlayer','ended',4);

    return NextSecondPlayer;
}

function Replace(Subject,Replacement) {
    Log('Replace','started',4);

    if (Subject !== null) {
        if (Subject.includes('{player}') === true) {
            Subject = Subject.replace('{player}', Replacement)
        }
    }

    Log('Replace','ended',4);

    return Subject;
}