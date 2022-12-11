DisplayScreen(0);

setTimeout(function() {
    ShowScreen(0,1);
}, 0);

function ShowScreen(from,to) {
    DisplayScreen(to);
}

function DisplayScreen(number) {
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
            <br>
            <button class="btn btn-green" onClick="ShowScreen(2,3);">
                Play
            </button>
        </div>`;
    }
}