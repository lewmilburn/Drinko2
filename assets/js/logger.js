let Level = 3;

function Log(funct, message, type) {
    if (Level >= type) {
        if (type === 3) {
            console.log('[Drinko!²][DEBUG] ' + funct + '(): ' + message + '.');
        } else if (type === 2) {
            console.log('[Drinko!²][WARNING] ' + funct + '(): ' + message + '.');
        } else if (type === 1) {
            console.log('[Drinko!²][ERROR] ' + funct + '(): ' + message + '.');
        } else if (type === 0) {
            console.log('[Drinko!²][FATAL] ' + funct + '(): ' + message + '.');
        }
    }
}