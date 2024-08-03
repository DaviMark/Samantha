function animateClick() {
    const iconWrapper = document.querySelector('.icon-wrapper');
    iconWrapper.classList.add('click-animation');

    setTimeout(() => {
        iconWrapper.classList.remove('click-animation');
    }, 200);
}