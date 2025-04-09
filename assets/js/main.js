
document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.querySelector(".drawer");
    const close = document.querySelector(".close");
    const cardsContainer = document.querySelector(".cards");

    const tl = gsap.timeline({
        paused: true,
        reversed: true,
        onStart: () => {
            cardsContainer.style.pointerEvents = "all";
        },
        onReverseComplete: () => {
            cardsContainer.style.pointerEvents = "none";
        }
    });

    tl.from(".cards .card", 1.5, {
        y: 1000,
        stagger: {
            amount: 0.3
        },
        ease: "power4.inOut"
    }).from(".close", 0.5, {
        scale: 0,
        delay: 1
    }, "<").from(".footer", 0.5, {
        opacity: 0
    });

    drawer.addEventListener("click", () => {
        if (tl.reversed()) {
            tl.play();
        } else {
            tl.reverse();
        }
    });

    close.addEventListener("click", () => {
        tl.reverse();
    });

});



















