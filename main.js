const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000
};

// header container
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__form", {
    ...scrollRevealOption,
    delay: 500
});

//trending content
ScrollReveal().reveal(".trending__card", {
    ...scrollRevealOption,
    interval: 500,
});

//destination container
ScrollReveal().reveal(".destination__card", {
    duration: 1000,
    interval: 500
});

// Seller Container
ScrollReveal().reveal(".seller__card", {
    ...scrollRevealOption,
    interval: 500,
});