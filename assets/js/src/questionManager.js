function GetNextType() {
    Log('GetNextType','started',4);

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
    Log('GetNextType','ended',4);

    if (Type === undefined) {
        EndGame();
        return;
    }

    return Type;
}

function SetOption(id, value, colour) {
    Log('SetOption','started',4);
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
    Log('SetOption','ended',4);
}

function GetRandomQuestion() {
    Log('GetRandomQuestion','started',4);

    NextSecondPlayer = GetRandomReplacePlayer();

    let Type = GetNextType();
    if (Type === 0) {
        let TruthNumber = Math.floor(Math.random() * (Truths.length));

        SetNextValues(Truths, TruthNumber, 0);

        Log('GetRandomQuestion','Type: ' + Type + ' - Number: '+TruthNumber+' - Mode: '+NextMode,3);

        Truths.splice(TruthNumber, 1);
    } else if (Type === 1) {
        let DareNumber = Math.floor(Math.random() * (Dares.length));

        SetNextValues(Dares, DareNumber, 1);

        Log('GetRandomQuestion','Type: ' + Type + ' - Number: '+DareNumber+' - Mode: '+NextMode,3);

        Dares.splice(DareNumber, 1);
    }

    Log('GetRandomQuestion','ended',4);
}

function SetNextValues(Arr, ItemNumber, Type) {
    Log('SetNextValues','started',4);
    
    NextMode = Arr[ItemNumber].Mode;
    NextCanSkip = Arr[ItemNumber].CanSkip;
    NextMessage = Replace(Arr[ItemNumber].Message, NextSecondPlayer);
    NextSubmessage = Replace(Arr[ItemNumber].Submessage, NextSecondPlayer);
    NextOptionOne = Replace(Arr[ItemNumber].OptionOne, NextSecondPlayer);
    NextOptionTwo = Replace(Arr[ItemNumber].OptionTwo, NextSecondPlayer);
    NextOptionOneValue = Arr[ItemNumber].OptionOneValue;
    NextOptionTwoValue = Arr[ItemNumber].OptionTwoValue;
    NextOptionOneColour = Arr[ItemNumber].OptionOneColour;
    NextOptionTwoColour = Arr[ItemNumber].OptionTwoColour;

    // For debugging purposes.
    NextQuestionID = ItemNumber;
    NextTypeID = Type;

    Log('SetNextValues','ended',4);
}