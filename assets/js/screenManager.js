DisplayScreen(0);

setTimeout(function() {
    Log('setTimeout','started',3);
    ShowScreen(0,1);
    Log('setTimeout','ended',3);
}, 0);

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
            <img src="https://brand.lmwn.co.uk/lewismilburn/logo-light.png" class="w-1/4 mx-auto mb-2">
            <p class="text-body mb-6">
                Made by Lewis Milburn
            </p>
        </div>`;
    } else if (number === 1) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-6 sm:my-12 md:my-24 lg:my-48 text-center">
            <h1 class="text-header-lg mb-6">
                Drinko!²
            </h1>
            <p class="text-body mb-6">
                Welcome to Drinko!², the sequel to the much loved Drinko!<br>
                <br>
                Do not refresh the page or use the browser's back button whilst playing, this will delete your game.
            </p>
            <button class="btn btn-green" onClick="ShowScreen(1,2);">
                Let's go!
            </button>
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
            <button class="btn btn-green" onClick="LoadGame();">
                Play
            </button>
        </div>`;
    } else if (number === 3) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-3 sm:my-6 md:my-12 lg:my-24 text-center">
            <h1 class="text-header-lg mb-6" id="Message">
                Error 1
            </h1>
                <p class="text-body mb-6" id="Submessage">
                    Error 2
                </p>
            <br>
            <button class="btn btn-green" onClick="Answer(1)">
                Yes
            </button>
            <button class="btn btn-red" onClick="Answer(2)">
                No
            </button>
        </div>`;
    } else if (number === 4) {
        screen.innerHTML = `
        <div class="mx-6 sm:mx-12 md:mx-24 lg:mx-48 my-3 sm:my-6 md:my-12 lg:my-24 text-center">
        <h1 class="text-header-lg mb-6" id="Message">
        Game over
        </h1>
        <p class="text-body mb-6" id="Submessage">
        It's done!
        </p>
        <br>
        <a class="btn btn-blue" href="/">
        Play again
        </a>
        </div>`;
    }
    Log('DisplayScreen','ended',3);
}