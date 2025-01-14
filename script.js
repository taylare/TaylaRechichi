// Selecting target elements for both the hidden elements and the languages
const hiddenElements = document.querySelectorAll('.hidden');
const languageElements = document.querySelectorAll('.languages');

// Creating a single intersection observer:
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // For hidden elements, add/remove the 'show' class
        if (entry.target.classList.contains('hidden')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        }
        
        // For language elements, trigger staggered animation
        if (entry.target.classList.contains('languages')) {
            if (entry.isIntersecting) {
                entry.target.classList.add('staggered');
            } else {
                entry.target.classList.remove('staggered');
            }
        }
    });
}); 

// Observe hidden elements
hiddenElements.forEach(el => observer.observe(el));

// Observe each language element
languageElements.forEach(el => observer.observe(el));
