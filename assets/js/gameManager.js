let NextMessage;
let NextSubmessage;
let NextGreen;
let NextRed;
let NextGreenValue;
let NextRedValue;

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
    NextGreen = null;
    NextRed = null;

    let Message = document.getElementById('Message');
    let Submessage = document.getElementById('Submessage');

    GetRandomQuestion();

    Message.innerHTML = NextMessage;
    Submessage.innerHTML = NextSubmessage;

    Log('NextRound','ended',3);
}

function GetRandomQuestion() {
    Log('GetRandomQuestion','started',3);

    let Type = GetNextType();
    if (Type === 0) {
        let TruthNumber = Math.floor(Math.random() * (Truths.length));
        Log('GetRandomQuestion','Type: ' + Type + ' - TruthNumber: '+TruthNumber,3);

        NextMessage = Truths[TruthNumber].Message;
        NextSubmessage = Truths[TruthNumber].Submessage;
        NextGreen = Truths[TruthNumber].Green;
        NextRed = Truths[TruthNumber].Red;
        NextGreenValue = Truths[TruthNumber].Green;
        NextRedValue = Truths[TruthNumber].Red;

        Truths.splice(TruthNumber, 1);
    } else if (Type === 1) {
        let DareNumber = Math.floor(Math.random() * (Dares.length));
        Log('GetRandomQuestion','Type: ' + Type + ' - DareNumber: '+DareNumber,3);

        NextMessage = Dares[DareNumber].Message;
        NextSubmessage = Dares[DareNumber].Submessage;
        NextGreen = Dares[DareNumber].Green;
        NextRed = Dares[DareNumber].Red;
        NextGreenValue = Dares[DareNumber].Green;
        NextRedValue = Dares[DareNumber].Red;

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