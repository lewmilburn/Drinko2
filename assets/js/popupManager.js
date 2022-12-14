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