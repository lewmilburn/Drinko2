function PlayerScorePopupDelay(contents, delaycontents, timeoutOne, timeoutTwo) {
    let PSP = document.getElementById('PlayerScorePopup');
    PSP.classList.remove('hidden');
    PSP.innerText = contents;
    setTimeout(function() {
        PSP.innerText = delaycontents;
        setTimeout(function() {
            PSP.classList.add('hidden');
        }, timeoutTwo);
    }, timeoutOne);
}

function ErrorPopup(funct, message) {
    let ErrorPopup = document.getElementById('ErrorPopup');
    ErrorPopup.classList.remove('hidden');
    ErrorPopup.innerText = "[ERROR][" + funct + "]" + message;
    setTimeout(function() {
        setTimeout(function() {
            ErrorPopup.classList.add('hidden');
            }, 3000);
        }, 2000);
}

function WarningPopup(funct, message) {
    let WarningPopup = document.getElementById('WarningPopup');
    WarningPopup.classList.remove('hidden');
    WarningPopup.innerText = "[WARNING][" + funct + "]" + message;
    setTimeout(function() {
        setTimeout(function() {
            WarningPopup.classList.add('hidden');
            }, 3000);
        }, 2000);
}