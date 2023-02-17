DisplayScreen(0);

let CurrentScreen;

setTimeout(function() {
    Log('setTimeout','started',4);
    ShowScreen(0,1);
    Log('setTimeout','ended',4);
}, 2000);

function ShowScreen(from,to) {
    Log('ShowScreen','started',4);
    DisplayScreen(to);

    CurrentScreen = to;

    let ResetButton = document.getElementById('ResetButton');
    let ProgressBar = document.getElementById('ProgressBar');
    let ProgressBarValue = document.getElementById('ProgressBarValue');

    if (CurrentScreen === 0 ||
        CurrentScreen === 1 ||
        CurrentScreen === 2 ||
        CurrentScreen === 6)
    {
        if (!ResetButton.classList.contains('hidden')) {
            ResetButton.classList.add('hidden');
        }
        if (!ProgressBar.classList.contains('hidden')) {
            ProgressBar.classList.add('hidden');
        }
    } else {
        if (ResetButton.classList.contains('hidden')) {
            ResetButton.classList.remove('hidden');
        }
        if (ProgressBar.classList.contains('hidden')) {
            ProgressBar.classList.remove('hidden');
        }
        ProgressBarValue.style.width = ProgressBarProgress()+'%';
    }
    Log('ShowScreen','ended',4);
}

function ProgressBarProgress() {
    Log('ProgressBarProgress','started',4);
    if (MaxRounds === -1) {
        Log('ProgressBarProgress','ended',4);
        return 0;
    } else {
        let ProgressAmount = (100 * Round) / MaxRounds;
        Log('ProgressBarProgress','Progress: ' + ProgressAmount,3);
        Log('ProgressBarProgress','ended',4);
        return ProgressAmount;
    }
}

function DisplayScreen(number) {
    Log('DisplayScreen','started',4);
    Log('DisplayScreen','Displaying screen: ' + number,3);
    let screen = document.getElementById('main');
    if (number === 0) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-6 sm:my-12 md:my-24 lg:my-48 text-center">
            <h1 class="text-header-lg mb-10">
                Drinko!²
            </h1>
            <p class="text-body mb-16">
                <i class="fa-solid fa-loader fa-spin"></i> Loading...
            </p>
            <img src="/assets/images/splash/lewismilburn-light.webp" class="hidden dark:block w-1/4 mx-auto mb-6">
            <img src="/assets/images/splash/lewismilburn-dark.webp" class="block dark:hidden w-1/4 mx-auto mb-6">
            <div class="flex space-x-4 mb-2">
                <div class="flex-grow">&nbsp;</div>
                <img src="/assets/images/splash/tailwind.webp" class="w-16 mb-2">
                <img src="/assets/images/splash/fleet.webp" class="w-16 mb-2">
                <img src="/assets/images/splash/github.webp" class="w-16 mb-2">
                <img src="/assets/images/splash/cloudflare.webp" class="w-16 mb-2">
                <div class="flex-grow">&nbsp;</div>
            </div>
            <p>
                Made with Tailwind, Fleet, GitHub, and CloudFlare.
            </p>
        </div>`;
    } else if (number === 1) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-1 sm:my-2 md:my-4 lg:my-8 text-center">
            <h1 class="text-header-lg mb-6">
                Drinko!²
        </h1>
            <p class="text-body mb-1">
                Welcome to Drinko!², the sequel to the much loved game Drinko!
            </p>
            <p class="text-body mb-6">
            Do not refresh the page or use the browser's back button whilst playing, this will delete your game.
            </p>
            <p class="text-body mb-1">
                <strong>Disclaimer</strong>
            </p>
            <p class="text-body mb-1">
                This game is dirty and contains adult themes, don't play it with your parents.
            </p>
            <p class="text-body mb-1">
                You must be 18+ to play.
            </p>
            <p class="text-body mb-6">
                This game will get you drunk. Always drink responsibly. When the fun stops, stop.
            </p>
            <button class="btn btn-green" onClick="ShowScreen(1,2);">
                Let's go!
        </button>
            <span class="absolute bottom-0 left-0">V2.1 (Patch 1)</span>
            <a href="https://lewmilburn.github.io/Drinko" class="absolute bottom-0 right-0 text-center underline">Play the original Drinko!</a>
        </div>`;
    } else if (number === 2) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-3 sm:my-6 md:my-12 lg:my-24 text-center">
            <h1 class="text-header-lg mb-6">
                Drinko!²
            </h1>
            <p class="text-body mb-6">
                Who's playing?
            </p>
            <div class="mb-6">
                <input id="HomeAddPlayer" class="input" maxlength="10">
                <button class="btn-sm btn-blue" onClick="AddPlayer();">Add</button>
            </div>
            <ul id="HomePlayerList"></ul>
            <select id="HomeSelectRounds" class="input">
                <option value="50">50 Rounds</option>
                <option value="25" selected>25 Rounds</option>
                <option value="15">15 Rounds</option>
                <option value="10">10 Rounds</option>
                <option value="10">5 Rounds</option>
            </select>
            <br><br>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                <button class="btn-mode-select btn-green" onClick="LoadGame('Lightweight');">
                    Lightweight
                    <span class="absolute top-1 right-1 text-white text-xs">55</span>
                </button>
                <button class="btn-mode-select btn-yellow" onClick="LoadGame('Dirty');">
                    <span class="absolute top-1 right-1 text-white text-xs">60</span>
                    Dirty
                </button>
                <button class="btn-mode-select btn-red" onClick="LoadGame('WTF');">
                    <span class="absolute top-1 right-1 text-white text-xs">27</span>
                    WTF
                </button>
                <button class="btn-mode-select btn-red" onClick="LoadGame('Hardcore');">
                    <span class="absolute top-1 right-1 text-white text-xs">25</span>
                    Hardcore
                </button>
            </div>
        </div>`;
    } else if (number === 3) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-3 sm:my-6 md:my-12 lg:my-24 text-center">
            <h1 class="text-header-lg mb-6" id="PlayerName">
                Error 1
            </h1>
            <p class="text-header mb-6" id="Message">
                Error 1
            </p>
            <p class="text-body mb-6" id="Submessage">
                Error 1
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 game-buttons">
                <button id="OptionOne" class="btn-game-option btn-green" onClick="Answer(1)">
                    Error 1
                </button>
                <button id="OptionTwo" class="btn-game-option btn-red" onClick="Answer(2)">
                    Error 1
                </button>
            </div>
        </div>`;
    } else if (number === 4) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-3 sm:my-6 md:my-12 lg:my-24 text-center">
        <h1 class="text-header-lg mb-6" id="Message">
        Game over
        </h1>
        <ul class="text-body mb-6" id="Leaderboard"></ul>
        <br>
        <a class="btn btn-blue" href="/">
        Play again
        </a>
        </div>`;
    } else if (number === 5) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-3 sm:my-6 md:my-12 lg:my-24 text-center">
            <h1 class="text-header-lg mb-6" id="PlayerNamePunishment">
                Error 1
            </h1>
            <p class="text-header mb-6" id="Punishment">
                Error 1
            </p>
            <br>
            <div class="grid grid-cols-1 game-buttons">
                <button id="NextRound" class="btn-game-option btn-blue" onClick="NextRound()">
                    Next
                </button>
            </div>
        </div>`;
    } else if (number === 6) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-3 sm:my-6 md:my-12 lg:my-24 text-center">
            <h1 class="text-header-lg mb-6">
                Loading...
            </h1>
            <p class="text-header mb-6">
                Please wait.
            </p>
        </div>`;
    } else if (number === 7) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-3 sm:my-6 md:my-12 lg:my-24 text-center">
            <h1 class="text-header-lg mb-6" id="PlayerName">
                Error 1
            </h1>
            <p class="text-header mb-6" id="Message">
                Error 1
            </p>
            <p class="text-body mb-6" id="Submessage">
                Error 1
            </p>
            <br>
            <div class="grid grid-cols-1 md:grid-cols-3 game-buttons">
                <button id="OptionOne" class="btn-game-option btn-green" onClick="Answer(1)">
                    Error 1
                </button>
                <button id="OptionTwo" class="btn-game-option btn-red" onClick="Answer(2)">
                    Error 1
                </button>
                <button id="Skip" class="btn-game-option btn-blue" onClick="Answer(2)">
                    Skip
                </button>
            </div>
        </div>`;
    }
    Log('DisplayScreen','ended',4);
}