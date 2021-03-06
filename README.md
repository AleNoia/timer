# ๐ฐ๏ธ Timer
 A simple timer to measuring time interval implemented swith JavaScript

If you want to contact, mail me or send a message on Twitter

๐ง igornoiasilva@gmail.com / โ [@IgorNoiaSilva](https://twitter.com/IgorNoiaSilva)

***
# ๐ Table of Contents
* ๐ก [Features](#features)
* ๐ฏ [Purpose](#Purpose)
* ๐  [Installation](#Installation)
* ๐ [Utilization](#Utilization)
* ๐ค [Contributing](#Contributing)
* ๐งพ [License](#License)
***

# <a name="features"></a>๐ก Features

* ๐ Measure your time.
* ๐ You can stop the timer.
* ๐ You can reset the timer.

***

# <a name="Purpose"></a>๐ฏ Purpose

My purpose with this project is to
* learn how to use ```setInterval``` and ```clearInterval```
* learn how to work with dates
* how to use ```addEventListener``` in a better way
* learn more about Javascript.
***
# <a name="Installation"></a>๐  Installation

Run this command to clone the repository:

```git

git clone https://github.com/AleNoia/timer.git

```
***
# <a name="Utilization"></a>๐ Utilization

You can start the timer by clicking the **Start** button.

```javascript

let seconds = 0 // variable of the time to manipulate
let timer; // variable of the setInterval to use clearInterval

// Return a string formatted 
function getTime(sec) {
    const date = new Date(sec * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

// Insert a string on the HTML and start the timer
function startTimer() {
    clearInterval(timer)
    timer = setInterval(function () {
        seconds++
        clock.innerHTML = getTime(seconds);
    }, 1000)
}

// Event to start the timer
if (el.classList.contains('start')) {
    startTimer()
}
```
To stop the timer, click on the button **Stop**

```javascript
// Event to stop the timer
if (el.classList.contains('stop')) {
    clearInterval(timer)
}
```

To reset the timer, click on the button **Reset**

```javascript
// Reset the timer to 00:00:00
function resetTime() {
    seconds = 0;
    clock.innerHTML = getTime(seconds);
    clearInterval(timer)
}

// Event to reset the timer
if (el.classList.contains('reset')) {
    resetTime()
}

```
***
# <a name="Contributing"></a>๐ค Contributing

Feel free to contribute ๐

***
# <a name="License"></a>๐งพ License

Released in 2021. This project is under the [MIT license](https://github.com/AleNoia/timer/blob/main/LICENSE).

Made by [Igor Noia](https://github.com/AleNoia) ๐

