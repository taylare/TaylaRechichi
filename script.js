// Helper function to apply fadeIn effect
function fadeIn(element, delay) {
    setTimeout(() => {
        element.classList.add('visible');
    }, delay);
}

// Intersection Observer to handle when section2 is in view
window.addEventListener('scroll', () => {
    const section2 = document.querySelector('.section2');
    const rect = section2.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        section2.classList.add('fade-in'); // Add fade-in class to section2

        // Get all elements with the fade-up-element class
        const cols = section2.querySelectorAll('.fade-up-element');

        // Apply fadeIn with delay for each column
        cols.forEach((col, index) => {
            fadeIn(col, index * 300); // Sequential delay for each column
        });
    }
});
