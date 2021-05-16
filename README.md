# 🕰️ Timer
 A timer to measuring time intervals.
 
If you have any question, suggestion or want to contact, mail me:

📧 igornoiasilva@gmail.com.

***
# 📌 Table of Contents
* 💡 [Features](#features)
* 🎯 [Purpose](#Purpose)
* 🛠 [Installation](#Installation)
* 📝 [Utilization](#Utilization)
* 🤝 [Contributing](#Contributing)
* 🧾 [License](#License)
***

# <a name="features"></a>💡 Features

* 🕒 Measure your time.
* 🛑 You can stop the timer.
* 🔁 You can reset the timer.

***

# <a name="Purpose"></a>🎯 Purpose

My purpose with this project is to
* learn how to use ```setInterval``` and ```clearInterval```
* learn how to work with dates
* how to use ```addEventListener``` in a better way
* learn more about Javascript.
***
# <a name="Installation"></a>🛠 Installation

Run this command to clone the repository:

```git

git clone https://github.com/AleNoia/timer.git

```
***
# <a name="Utilization"></a>📝 Utilization

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
# <a name="Contributing"></a>🤝 Contributing

Feel free to contribute 🙂

***
# <a name="License"></a>🧾 License

Released in 2021. This project is under the [MIT license](https://github.com/AleNoia/timer/blob/main/LICENSE).

Made by [Igor Noia](https://github.com/AleNoia) 👋

