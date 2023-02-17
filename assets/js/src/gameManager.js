function StartGame() {
    Log('StartGame','started',4);
    
    ShowScreen(6,3);

    for (let i=0; i <= Players.length; i++) {
        if (Object.keys(Players)[i] === undefined) {
            delete Players.undefined;
        }
    }

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
        RoundCounter.innerText = Gamemode + ' Round ' + Round;
        LoadNextRound();
    } else if (MaxRounds >= Round) {
        RoundCounter.innerText = Gamemode + ' Round ' + Round + '/' + MaxRounds;
        LoadNextRound();
    } else {
        EndGame();
    }

    Log('NextRound','ended',4);
}

function LoadNextRound() {
    Log('LoadNextRound','started',4);

    if (NextCanSkip === true) {
        ShowScreen(3, 7);
    } else {
        ShowScreen(7, 3);
    }

    NextMode = null;
    NextCanSkip = null;
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

    GetRandomPlayer();
    GetRandomQuestion();

    if (NextMode === 1) {
        PlayerName.innerHTML = NextPlayer;
    } else if (NextMode === 2) {
        PlayerName.innerHTML = NextPlayer + ' and ' + NextSecondPlayer;
    }
    Message.innerHTML = NextMessage;
    Submessage.innerHTML = NextSubmessage;

    SetOption('OptionOne', NextOptionOne, NextOptionOneColour);
    SetOption('OptionTwo', NextOptionTwo, NextOptionTwoColour);

    Turns[NextPlayer] ++;
    if (NextMode === 2) {
        Turns[NextSecondPlayer] ++;
    }
    
    Log('LoadNextRound','ended',4);
}

function Answer(Number) {
    Log('Answer','started',4);
    
    ShowScreen(3, 5);

    let Punishment = document.getElementById('Punishment')

    if (NextMode === 1 || NextMode === undefined) {
        document.getElementById('PlayerNamePunishment').innerText = NextPlayer;
        if (NextMode === undefined) {
            Log('Answer', 'Mode is undefined. Type:'+NextTypeID +' Question:'+NextQuestionID);
        }
    } else if (NextMode === 2) {
        document.getElementById('PlayerNamePunishment').innerText = NextPlayer+' and '+NextSecondPlayer;
    }

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
            if (NextOptionOneValue === 1) {
                Punishment.innerText = "Drink " + NextOptionOneValue + " sip.";
            } else {
                Punishment.innerText = "Drink " + NextOptionOneValue + " sips.";
            }
            if (NextMode === 1) {
                let contentsOne = NextPlayer+': '+ Players[NextPlayer] + ' +' + NextOptionOneValue;
                let contentsTwo = NextPlayer+': '+ (Players[NextPlayer]+NextOptionOneValue);

                PlayerScorePopupDelay(contentsOne, contentsTwo, 2000, 3000);

                LeaderboardAdd(NextPlayer, NextOptionOneValue);
            } else if (NextMode === 2) {
                let contentsOne = NextPlayer+': '+ Players[NextPlayer] + ' + ' + NextOptionOneValue + '\n' + NextSecondPlayer+': '+ Players[NextSecondPlayer] + ' + ' + NextOptionOneValue;
                let contentsTwo = NextPlayer+': '+ (Players[NextPlayer] + NextOptionOneValue) + '\n' + NextSecondPlayer+': '+ (Players[NextSecondPlayer] + NextOptionOneValue);

                PlayerScorePopupDelay(contentsOne, contentsTwo, 2000, 3000);

                LeaderboardAdd(NextPlayer, NextOptionOneValue);
                LeaderboardAdd(NextSecondPlayer, NextOptionOneValue);
            }
        }
    } else if (Number === 2) {
        if (NextOptionTwoValue === 0) {
            NextRound();
            return;
        } else {
            if (NextOptionTwoValue === 1) {
                Punishment.innerText = "Drink " + NextOptionTwoValue + " sip.";
            } else {
                Punishment.innerText = "Drink " + NextOptionTwoValue + " sips.";
            }
            if (NextMode === 1) {
                let contentsOne = NextPlayer+': '+ Players[NextPlayer] + ' +' + NextOptionTwoValue;
                let contentsTwo = NextPlayer+': '+ (Players[NextPlayer]+NextOptionTwoValue);

                PlayerScorePopupDelay(contentsOne, contentsTwo, 2000, 3000);

                LeaderboardAdd(NextPlayer, NextOptionTwoValue);
            } else if (NextMode === 2) {
                let contentsOne = NextPlayer+': '+ Players[NextPlayer] + ' + ' + NextOptionTwoValue + '\n' + NextSecondPlayer+': '+ Players[NextSecondPlayer] + ' + ' + NextOptionTwoValue;
                let contentsTwo = NextPlayer+': '+ (Players[NextPlayer] + NextOptionTwoValue) + '\n' + NextSecondPlayer+': '+ (Players[NextSecondPlayer] + NextOptionTwoValue);

                PlayerScorePopupDelay(contentsOne, contentsTwo, 2000, 3000);

                LeaderboardAdd(NextPlayer, NextOptionTwoValue);
                LeaderboardAdd(NextSecondPlayer, NextOptionTwoValue);
            }
        }
    }
    Log('Answer','ended',4);
}