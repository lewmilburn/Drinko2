let NextMessage;
let NextSubmessage;
let NextOptionOne;
let NextOptionOneColour;
let NextOptionOneValue;
let NextOptionTwo;
let NextOptionTwoColour;
let NextOptionTwoValue;
let NextPlayer;
let Round = 0;

function StartGame() {
    Log('StartGame','started',4);
    
    ShowScreen(6,3);

    NextRound();

    Log('StartGame','ended',4);
}

function EndGame() {
    Log('EndGame','started',4);

    ShowScreen(3,4);

    let List = document.getElementById("Leaderboard");

    Object.keys(Players).forEach(function(key) {
        let PlayerItem = Players[key];
        if (List.innerHTML === null) {
            List.innerHTML = '<li>' + key + ' ' + PlayerItem + '</li>';
        } else {
            List.innerHTML = List.innerHTML + '<li>' + key + ' ' + PlayerItem + '</li>';
        }
    });

    Log('EndGame','ended',4);
}

function NextRound() {
    Log('NextRound','started',4);

    let RoundCounter = document.getElementById('RoundCounter');

    Round = Round + 1;

    if (MaxRounds === '-1') {
        RoundCounter.innerText = 'Round ' + Round;
        LoadNextRound();
    } else if (MaxRounds >= Round) {
        RoundCounter.innerText = 'Round ' + Round + '/' + MaxRounds;
        LoadNextRound();
    } else {
        EndGame();
    }

    Log('NextRound','ended',4);
}

function LoadNextRound() {
    Log('LoadNextRound','started',4);
    ShowScreen(5, 3);

    NextMessage = null;
    NextSubmessage = null;
    NextOptionOne = null;
    NextOptionOneColour = null;
    NextOptionOneValue = null;
    NextOptionTwo = null;
    NextOptionTwoColour = null;
    NextOptionTwoValue = null;

    let Message = document.getElementById('Message');
    let Submessage = document.getElementById('Submessage');
    let PlayerName = document.getElementById('PlayerName');

    GetRandomQuestion();
    GetRandomPlayer();

    PlayerName.innerHTML = NextPlayer;
    Message.innerHTML = NextMessage;
    Submessage.innerHTML = NextSubmessage;

    SetOption('OptionOne', NextOptionOne, NextOptionOneColour);
    SetOption('OptionTwo', NextOptionTwo, NextOptionTwoColour);

    Turns[NextPlayer] ++;
    
    Log('LoadNextRound','ended',4);
}

function Answer(Number) {
    Log('Answer','started',4);
    
    ShowScreen(3, 5);

    let Punishment = document.getElementById('Punishment')

    document.getElementById('PlayerNamePunishment').innerText = NextPlayer;

    if (NextOptionOneValue === -1) {
        NextOptionOneValue = Math.floor(Math.random() * 10);
    }

    if (NextOptionTwoValue === -1) {
        NextOptionTwoValue = Math.floor(Math.random() * 10);
    }

    if (Number === 1) {
        if (NextOptionOneValue === 0) {
            NextRound();
            return;
        } else {
            Punishment.innerText = "Drink " + NextOptionOneValue + " sips.";
            LeaderboardAdd(NextPlayer, NextOptionOneValue);
        }
    } else if (Number === 2) {
        if (NextOptionTwoValue === 0) {
            NextRound();
            return;
        } else {
            Punishment.innerText = "Drink " + NextOptionTwoValue + " sips.";
            LeaderboardAdd(NextPlayer, NextOptionTwoValue);
        }
    }
    Log('Answer','ended',4);
}