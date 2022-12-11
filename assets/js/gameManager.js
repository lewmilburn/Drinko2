let NextMessage;
let NextSubmessage;
let NextOptionOne;
let NextOptionOneColour;
let NextOptionOneValue;
let NextOptionTwo;
let NextOptionTwoColour;
let NextOptionTwoValue;

function StartGame() {
    Log('StartGame','started',3);

    let Message = document.getElementById('Message');
    let Submessage = document.getElementById('Submessage');

    GetRandomQuestion();

    Message.innerHTML = NextMessage;
    Submessage.innerHTML = NextSubmessage;

    Log('StartGame','ended',3);
}

function EndGame() {
    Log('EndGame','started',3);

    ShowScreen(3,4);

    Log('EndGame','ended',3);
}

function NextRound() {
    Log('NextRound','started',3);

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

    GetRandomQuestion();

    Message.innerHTML = NextMessage;
    Submessage.innerHTML = NextSubmessage;
    SetOption('OptionOne', NextOptionOne, NextOptionOneColour);
    SetOption('OptionTwo', NextOptionTwo, NextOptionOneColour);

    Log('NextRound','ended',3);
}

function SetOption(id, value, colour) {
    let Option = document.getElementById(id);

    Option.innerText = value;

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

    let Type = GetNextType();
    if (Type === 0) {
        let TruthNumber = Math.floor(Math.random() * (Truths.length));
        Log('GetRandomQuestion','Type: ' + Type + ' - TruthNumber: '+TruthNumber,3);

        NextMessage = Truths[TruthNumber].Message;
        NextSubmessage = Truths[TruthNumber].Submessage;
        NextOptionOne = Truths[TruthNumber].OptionOne;
        NextOptionTwo = Truths[TruthNumber].OptionTwo;
        NextOptionOneValue = Truths[TruthNumber].OptionOneValue;
        NextOptionTwoValue = Truths[TruthNumber].OptionTwoValue;
        NextOptionOneColour = Truths[TruthNumber].OptionOneColour;
        NextOptionTwoColour = Truths[TruthNumber].OptionTwoColour;

        Truths.splice(TruthNumber, 1);
    } else if (Type === 1) {
        let DareNumber = Math.floor(Math.random() * (Dares.length));
        Log('GetRandomQuestion','Type: ' + Type + ' - DareNumber: '+DareNumber,3);

        NextMessage = Dares[DareNumber].Message;
        NextSubmessage = Dares[DareNumber].Submessage;
        NextOptionOne = Dares[DareNumber].Green;
        NextOptionTwo = Dares[DareNumber].Red;
        NextOptionOneValue = Dares[DareNumber].OptionOneValue;
        NextOptionTwoValue = Dares[DareNumber].OptionTwoValue;
        NextOptionOneColour = Dares[DareNumber].OptionOneColour;
        NextOptionTwoColour = Dares[DareNumber].OptionTwoColour;

        Dares.splice(DareNumber, 1);
    }
    console.log('Type: ' + Type);

    Log('GetRandomQuestion','ended',3);
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
    
    NextRound();
    Log('Answer','ended',3);
}