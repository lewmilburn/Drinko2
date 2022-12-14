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

    Log('GetRandomQuestion','ended',4);
}