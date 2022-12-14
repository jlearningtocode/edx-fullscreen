const fullScreenButton = document.querySelector('.add-fullscreen');

document.addEventListener('keypress', () => {
    e.preventDefault();
    if (e.key == 'f') {
        fullScreenButton.click();
    }
});