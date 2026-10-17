const modeButton = document.getElementById('modeButton');

modeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        modeButton.textContent = 'Light Mode';
    } else {
        modeButton.textContent = 'Dark Mode';
    }

});  

