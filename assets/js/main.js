document.addEventListener("DOMContentLoaded", () => {
    const drawer = document.querySelector(".drawer");
    const close = document.querySelector(".close");
    const cardsContainer = document.querySelector(".cards");

    gsap.from(".nav .nav-item", 1, {
        scale: 0,
        opacity: 0,
        stagger: {
            amount: 0.3,
        },
        ease: "power4.inOut",
    });

    const tl = gsap.timeline({
        paused: true,
        reversed: true,
        onStart: () => {
            cardsContainer.style.pointerEvents = "all";
        },
        onReverseComplete: () => {
            cardsContainer.style.pointerEvents = "none";
        },
    });

    tl.to(".cards", 1, {
        background: "rgba(0,0,0,0.9)",
        ease: "power4.inOut",
    })
        .from(".cards .card", 0.1, {
            y: 1000,
            stagger: {
                amount: 0.3,
            },
            ease: "power4.inOut",
        })
        .to(".cards .card", 0.5, {
            opacity: 1,
            stagger: {
                amount: 0.3,
            },
            ease: "power4.inOut",
        })
        .from(
            ".close",
            0.5,
            {
                scale: 0,
                delay: 1,
            },
            "<"
        )
        .from(".footer", 0.5, {
            opacity: 0,
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
