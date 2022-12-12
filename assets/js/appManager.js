// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    Log('beforeinstallprompt','event listener started',3);
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown.
    Log('beforeinstallprompt','event listener ended',3);
});

function showInstallPromotion() {
    document.getElementById('alert-install-prompt').classList.remove('hidden');
}

async function Install() {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    window.deferredPrompt = null;
}