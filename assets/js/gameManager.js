let NextMessage;
let NextSubmessage;
let NextOptionOne;
let NextOptionOneColour;
let NextOptionOneValue;
let NextOptionTwo;
let NextOptionTwoColour;
let NextOptionTwoValue;
let NextPlayer;
let NextPlayerID;
let Round = 0;

function StartGame() {
    Log('StartGame','started',3);
    
    ShowScreen(6,3);

    NextRound();

    Log('StartGame','ended',3);
}

function EndGame() {
    Log('EndGame','started',3);

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

    Log('EndGame','ended',3);
}

function NextRound() {
    Log('NextRound','started',3);

    let RoundCounter = document.getElementById('RoundCounter');

    Round = Round + 1;

    if (MaxRounds === -1) {
        RoundCounter.innerText = 'Round ' + Round;
        LoadNextRound();
    } else if (MaxRounds >= Round) {
        RoundCounter.innerText = 'Round ' + Round + '/' + MaxRounds;
        LoadNextRound();
    } else {
        EndGame();
    }

    Log('NextRound','ended',3);
}

function LoadNextRound() {
    Log('LoadNextRound','started',3);
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
    Log('LoadNextRound','ended',3);
}

function GetRandomPlayer() {
    Log('GetRandomPlayer','started',3);

    let PlayerID = Math.floor(Math.random() * (Object.keys(Players).length));
    NextPlayer = Object.keys(Players)[PlayerID];
    NextPlayerID = PlayerID;

    Log('GetRandomPlayer','ended',3);
}

function GetRandomReplacePlayer() {
    Log('GetRandomReplacePlayer','started',3);

    let PlayerID = Math.floor(Math.random() * (Object.keys(Players).length));
    return Object.keys(Players)[PlayerID];

    Log('GetRandomReplacePlayer','ended',3);
}

function SetOption(id, value, colour) {
    let Option = document.getElementById(id);

    Option.innerText = value + "";

    if (colour === 'red') {
        if (Option.classList.contains('btn-green')) { Option.classList.remove('btn-green'); }
        if (Option.classList.contains('btn-blue')) { Option.classList.remove('btn-blue'); }
        Option.classList.add('btn-red');
    } else if (colour === 'green') {
        if (Option.classList.contains('btn-red')) { Option.classList.remove('btn-red'); }
        if (Option.classList.contains('btn-blue')) { Option.classList.remove('btn-blue'); }
        Option.classList.add('btn-green');
    } else if (colour === 'blue') {
        if (Option.classList.contains('btn-red')) { Option.classList.remove('btn-red'); }
        if (Option.classList.contains('btn-green')) { Option.classList.remove('btn-green'); }
        Option.classList.add('btn-blue');
    }
}

function GetRandomQuestion() {
    Log('GetRandomQuestion','started',3);

    let ReplacePlayer = GetRandomReplacePlayer();

    let Type = GetNextType();
    if (Type === 0) {
        let TruthNumber = Math.floor(Math.random() * (Truths.length));
        Log('GetRandomQuestion','Type: ' + Type + ' - TruthNumber: '+TruthNumber,3);

        NextMessage = Replace(Truths[TruthNumber].Message, ReplacePlayer);
        NextSubmessage = Replace(Truths[TruthNumber].Submessage, ReplacePlayer);
        NextOptionOne = Replace(Truths[TruthNumber].OptionOne, ReplacePlayer);
        NextOptionTwo = Replace(Truths[TruthNumber].OptionTwo, ReplacePlayer);
        NextOptionOneValue = Truths[TruthNumber].OptionOneValue;
        NextOptionTwoValue = Truths[TruthNumber].OptionTwoValue;
        NextOptionOneColour = Truths[TruthNumber].OptionOneColour;
        NextOptionTwoColour = Truths[TruthNumber].OptionTwoColour;

        Truths.splice(TruthNumber, 1);
    } else if (Type === 1) {
        let DareNumber = Math.floor(Math.random() * (Dares.length));
        Log('GetRandomQuestion','Type: ' + Type + ' - DareNumber: '+DareNumber,3);

        NextMessage = Replace(Dares[DareNumber].Message, ReplacePlayer);
        NextSubmessage = Replace(Dares[DareNumber].Submessage, ReplacePlayer);
        NextOptionOne = Replace(Dares[DareNumber].OptionOne, ReplacePlayer);
        NextOptionTwo = Replace(Dares[DareNumber].OptionTwo, ReplacePlayer);
        NextOptionOneValue = Dares[DareNumber].OptionOneValue;
        NextOptionTwoValue = Dares[DareNumber].OptionTwoValue;
        NextOptionOneColour = Dares[DareNumber].OptionOneColour;
        NextOptionTwoColour = Dares[DareNumber].OptionTwoColour;

        Dares.splice(DareNumber, 1);
    }

    Log('GetRandomQuestion','ended',3);
}

function Replace(Subject,Replacement) {
    Log('Replace','started',3);

    if (Subject !== null) {
        if (Subject.includes('{player}') === true) {
            Subject = Subject.replace('{player}', Replacement)
        }
    }

    Log('Replace','ended',3);

    return Subject;
}

function GetNextType() {
    Log('GetNextType','started',3);

    let Type;
    if (Truths.length === 0 && Dares.length === 0) {
        EndGame();
    } else if (Truths.length === 0) {
        Type = 1;
    } else if (Dares.length === 0) {
        Type = 0;
    } else {
        Type = Math.floor(Math.random() * 2);
    }
    Log('GetNextType','ended',3);

    if (Type === undefined) {
        EndGame();
        return;
    }

    return Type;
}

function Answer(Number) {
    Log('Answer','started',3);
    
    ShowScreen(3, 5);

    let Punishment = document.getElementById('Punishment')

    document.getElementById('PlayerNamePunishment').innerText = NextPlayer;

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
    Log('Answer','ended',3);
}