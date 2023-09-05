const element = document.querySelector('.hidden');

const options = {
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(element);


