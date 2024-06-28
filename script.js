
let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let viewportHeight = window.innerHeight;
    let halfwayPoint = viewportHeight / 2;
    let scrollDecrement = viewportHeight / 4;

    // Check if scrolling down and past halfway point
    if (scrollPosition > lastScrollPosition && scrollPosition >= halfwayPoint) {
        let nextScreen = Math.ceil(scrollPosition / viewportHeight) * viewportHeight - scrollDecrement;
        window.scrollTo({
            top: nextScreen,
            behavior: 'smooth'
        });
    }

    lastScrollPosition = scrollPosition;
});



