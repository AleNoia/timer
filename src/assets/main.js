(function() {
    // ================================================================= [VARIABLES]
    const clock = document.querySelector('.clock')
    let seconds = 0 // variable of the time to manipulate
    let timer; // variable of the setInterval to use clearInterval

    // ================================================================= [FUNCTIONS]
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

    // Reset the timer to 00:00:00
    function resetTime() {
        seconds = 0;
        clock.innerHTML = getTime(seconds);
        clearInterval(timer)
    }

    // ================================================================= [EVENTS]
    document.addEventListener('click', function (e) {
        // Element
        const el = e.target;

        // Start timer
        if (el.classList.contains('start')) {
            startTimer()
        }

        // Stop timer
        if (el.classList.contains('stop')) {
            clearInterval(timer)
        }

        // Reset timer
        if (el.classList.contains('reset')) {
            resetTime()
        }

    });
})()

