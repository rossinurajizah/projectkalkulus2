document.addEventListener('DOMContentLoaded', function() {
    animateText('welcomeText', 100);
});

function animateText(elementId, delay) {
    var text = document.getElementById(elementId).textContent;
    document.getElementById(elementId).textContent = '';
    var index = 0;
    var interval = setInterval(function() {
        document.getElementById(elementId).textContent += text[index];
        index++;
        if (index === text.length) {
            clearInterval(interval);
        }
    }, delay);
}


