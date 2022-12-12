DisplayScreen(0);

setTimeout(function() {
    Log('setTimeout','started',3);
    ShowScreen(0,1);
    Log('setTimeout','ended',3);
}, 2000);

function ShowScreen(from,to) {
    Log('ShowScreen','started',3);
    DisplayScreen(to);
    let ResetButton = document.getElementById('ResetButton');
    if(ShowScreen !== 0 && ShowScreen !== 1) {
        ResetButton.classList.remove('hidden');
    } else {
        if (!ResetButton.classList.contains('hidden')) {
            ResetButton.classList.add('hidden');
        }
    }
    Log('ShowScreen','ended',3);
}

function DisplayScreen(number) {
    Log('DisplayScreen','started',3);
    let screen = document.getElementById('main');
    if (number === 0) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-6 sm:my-12 md:my-24 lg:my-48 text-center">
            <h1 class="text-header-lg mb-6">
                Drinko!²
            </h1>
            <img src="https://brand.lmwn.co.uk/lewismilburn/logo-light.png" class="w-1/4 mx-auto mb-24">
            <div class="flex space-x-4 mb-2">
                <div class="flex-grow">&nbsp;</div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" class="w-16 mb-2">
                <img src="https://www.jetbrains.com/_assets/www/fleet/inc/overview-content/img/fleet-logo.65f4a04c59fc3ba93bb5e181050891c5.png" class="w-16 mb-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" class="w-16 mb-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cloudflare_Logo.png/480px-Cloudflare_Logo.png" class="w-16 mb-2">
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
            <span class="absolute bottom-0 left-0">Development build. This may contain bugs. Drinko!² is a work in progress.</span>
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
                <input id="HomeAddPlayer" class="input text-sm">
                <button class="btn-sm btn-blue" onClick="AddPlayer();">Add</button>
            </div>
            <ul id="HomePlayerList"></ul>
            <br>
            <div class="flex space-x-2">
                <div class="flex-grow">&nbsp;</div>
                <button class="btn btn-green" onClick="LoadGame('Lightweight');">
                    Lightweight
                </button>
                <button class="btn btn-yellow" onClick="LoadGame('Dirty');">
                    Dirty
                </button>
                <button class="btn btn-red" onClick="alert('Coming soon...');">
                    WTF
                </button>
                <button class="btn btn-red" onClick="alert('Coming soon...');">
                    Hardcore
                </button>
                <div class="flex-grow">&nbsp;</div>
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
            <br>
            <button id="OptionOne" class="btn btn-green" onClick="Answer(1)">
                Error 1
            </button>
            <button id="OptionTwo" class="btn btn-red" onClick="Answer(2)">
                Error 1
            </button>
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
        <button id="NextRound" class="btn btn-blue" onClick="NextRound()">
        Next
        </button>
        </div>`;
    }
    Log('DisplayScreen','ended',3);
}