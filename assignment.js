// Reveal elements on scroll
const revealOnScroll = () => {
    document.querySelectorAll('.stat-card, .menu-item').forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 80){
            el.classList.add('show');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Increment counter for cups sold
let count = 0;
const soldDisplay = document.getElementById('soldCount');
const interval = setInterval(() => {
    if(count < 120){
        count++;
        soldDisplay.textContent = count;
    } else {
        clearInterval(interval);
    }
}, 20);