function animateClick() {
    const iconWrapper = document.querySelector('.icon-wrapper');
    iconWrapper.classList.add('click-animation');

    setTimeout(() => {
        iconWrapper.classList.remove('click-animation');
    }, 200);
}

// Começo do Loading
window.addEventListener('load', function() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('active');
  
    // Remove the spinner after a short delay (e.g., 3 seconds)
    setTimeout(function() {
        overlay.classList.remove('active');
        setTimeout(function() {
            document.body.style.overflow = 'auto'; // Restore scrolling
        }, 1000); // Allow time for the opacity transition to complete
    }, 1000); // 3000 milliseconds = 3 seconds
  });
