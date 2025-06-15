// Preloader functionality
document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader when content is loaded
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            // Add fade-out class
            preloader.classList.add('fade-out');
            
            // Remove preloader from DOM after animation
            setTimeout(() => {
                preloader.remove();
                // Show main content
                document.body.style.overflow = 'visible';
            }, 500);
        }
    });

    // In case load event already fired
    if (document.readyState === 'complete') {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.remove();
                document.body.style.overflow = 'visible';
            }, 500);
        }
    }
});
