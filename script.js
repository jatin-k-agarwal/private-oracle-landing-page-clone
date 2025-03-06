let lastScrollPosition = 0;
let isScrolling = false;
let scrollTimeout;

window.addEventListener("scroll", function () {
    clearTimeout(scrollTimeout); // Reset timeout on every scroll event

    if (isScrolling) return; // Prevent multiple triggers

    let scrollPosition = window.scrollY;
    let viewportHeight = window.innerHeight;
    let sections = document.querySelectorAll("section");
    let targetScrollPosition = scrollPosition;

    sections.forEach((section, index) => {
        let sectionTop = section.offsetTop;
        let sectionBottom = sectionTop + section.offsetHeight;

        // Smooth forward scrolling
        if (scrollPosition > lastScrollPosition && scrollPosition >= sectionTop - viewportHeight / 2 && scrollPosition < sectionBottom) {
            targetScrollPosition = sectionBottom;
        }

        // Smooth reverse scrolling
        if (scrollPosition < lastScrollPosition && scrollPosition > sectionTop - viewportHeight / 2) {
            targetScrollPosition = index > 0 ? sections[index - 1].offsetTop : 0;
        }
    });

    // Debounce scrolling to prevent excessive triggering
    scrollTimeout = setTimeout(() => {
        isScrolling = true;
        window.scrollTo({
            top: targetScrollPosition,
            behavior: "smooth",
        });

        setTimeout(() => {
            isScrolling = false;
        }, 600); // Smooth delay
    }, 100); // Delay to ensure smooth transitions

    lastScrollPosition = scrollPosition;
});
