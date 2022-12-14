const fullScreenButton = document.querySelector('.add-fullscreen');

document.addEventListener('keydown', e => {
    // e.preventDefault();
    const keyName = e.key;
    if (keyName == 'f') {
        fullScreenButton.click();
    }
    console.log(keyName);
});
