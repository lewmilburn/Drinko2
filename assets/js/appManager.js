if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/assets/js/serviceworker.js");
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
});

const installApp = document.getElementById('InstallPWAButton');

installApp.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null;
        }
    }
});

async function InstallPWA() {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    window.deferredPrompt = null;
}