# Drinko!2
The sequel to the much loved Drinko game.

Drinko!2 is a game inspired by the mobile app Drinkopoly designed to get you drunk.

# Disclaimer
This game is dirty and contains adult themes, don't play it with your parents.

You must be 18+ to play.

This game will get you drunk. Always drink responsibly. When the fun stops, stop.

# Open Source
## Building and Deploying
Drinko!2 is ready to go out of the box.
No need to do any fancy build commands or anything like that.
Just upload it to your server and you're ready to go!

## Modifying Drinko!2
You can modify Drinko!2 as long as you follow the terms of the Apache 2.0 license.

We use TailwindCSS for the CSS for Drinko!2

The build command is `npx tailwindcss -i ./assets/css/src.css -o ./assets/css/dist.css --minify`

## Debug mode
To enable debug mode either modify the source code in logger.js or open the JavaScript console in the browser and type `Level = 3` for low-level logging or `Level = 4` for high-level logging.

Low-level logging shows logs for selecting players, displaying pages, etc.

High-level logging shows logs for every time a function is started and completed alongside all logs in low-level.

You can also enable different warning levels. Level 0 shows fatal errors only, Level 1 shows fatal errors and errors, level 2 shows fatal errors, errors, and warnings, level 3 shows fatal errors, errors, warnings, and low-level logs, level 4 shows fatal errors, errors, warnings, low-level logs, and high-level logs.
