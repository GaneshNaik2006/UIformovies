// FAQ Accordion
const faqButtons = document.querySelectorAll(".faq-item button");

faqButtons.forEach(button => {
    button.addEventListener("click", () => {
        const currentItem = button.parentElement;

        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== currentItem) {
                item.classList.remove("active");
            }
        });

        currentItem.classList.toggle("active");
    });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.9)";
        nav.style.backdropFilter = "blur(10px)";
    } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
    }
});

// Movie cards hover animation
const movieCards = document.querySelectorAll(".movies-grid img");

movieCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.08)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
