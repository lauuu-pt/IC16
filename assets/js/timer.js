function startTimer(duration, display, bar) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        var totalSeconds = 15 * 60
        , remainingSeconds = minutes * 60 + seconds
        
        bar.style.width = (remainingSeconds*100/totalSeconds) + "%";
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var minutes = 60 * 15,
    display = document.querySelector('#time');
    bar = document.querySelector('#progressBar');
    startTimer(minutes, display, bar);
};


