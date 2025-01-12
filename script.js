//selecting target elements:
const hiddenElements = document.querySelectorAll('.hidden');


//creating the intersection observer:
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
           entry.target.classList.add('show'); 
        } else {
            entry.target.classList.remove('show');
        }
    });
});

//telling the observer what to watch (each element with the class .hidden)
hiddenElements.forEach((el) => observer.observe(el));