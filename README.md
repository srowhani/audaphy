# Audaphy

This project is a combination of a couple of my repos, `SocketIO-chat` and `AudioPhile`.

I found a library called [duino](https://github.com/ecto/duino), which  allows serial communication to the Arduino.

The goal of this project was to display the Fourier Transform of a given track. But since I couldn't find a good way to do it in vanilla Node.js without a DOM, I had to improvise.

The program analyzes the track on the client side, uses sockets to send back the AudioBuffer to the Express server, and uses duino to write to a (16x2) LCD Display.
