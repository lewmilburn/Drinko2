let Level = 0;

function Log(funct, message, type) {
    let Alert = document.getElementById('alert-error');
    if (Level >= type) {
        if (type === 4) {
            console.log('[Drinko!²][HIGH-DEBUG] ' + funct + '(): ' + message + '.');
            Alert.classList.remove('hidden');
            Alert.innerHTML = 'High debug mode is enabled. This is not recommended for production environments.'
        } else if (type === 3) {
            console.log('[Drinko!²][LOW-DEBUG] ' + funct + '(): ' + message + '.');
            Alert.classList.remove('hidden');
            Alert.innerHTML = 'Low debug mode is enabled. This is not recommended for production environments.'
        } else if (type === 2) {
            console.log('[Drinko!²][WARNING] ' + funct + '(): ' + message + '.');
        } else if (type === 1) {
            console.log('[Drinko!²][ERROR] ' + funct + '(): ' + message + '.');
            Alert.classList.remove('hidden');
            Alert.innerHTML = 'Error: ' + message;
        } else if (type === 0) {
            console.log('[Drinko!²][FATAL] ' + funct + '(): ' + message + '.');
            Alert.classList.remove('hidden');
            Alert.innerHTML = 'Fatal Error: ' + message;
        }
    }
}