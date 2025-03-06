let lastScrollPosition = 0;
let isScrolling = false;

window.addEventListener("scroll", function () {
    if (isScrolling) return; // Prevent multiple triggers

    let scrollPosition = window.scrollY;
    let viewportHeight = window.innerHeight;
    let sections = document.querySelectorAll("section");
    let nextScrollPosition = scrollPosition;

    sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        let sectionBottom = sectionTop + section.offsetHeight;

        // If current scroll is within the section
        if (scrollPosition >= sectionTop - viewportHeight / 2 && scrollPosition < sectionBottom) {
            nextScrollPosition = sectionBottom;
        }
    });

    if (scrollPosition > lastScrollPosition) {
        isScrolling = true;
        window.scrollTo({
            top: nextScrollPosition,
            behavior: "smooth",
        });

        setTimeout(() => {
            isScrolling = false;
        }, 800); // Delay to allow smooth scrolling before triggering again
    }

    lastScrollPosition = scrollPosition;
});



