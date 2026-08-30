

/* =========================================================
   REM SARU MAGAR — PREMIUM PORTFOLIO
   JavaScript
========================================================= */


/* =========================================================
   1. ELEMENTS
========================================================= */

const header = document.querySelector(".header");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

const typingText = document.getElementById("typing-text");

const revealElements = document.querySelectorAll(".reveal");

const backToTop = document.getElementById("back-to-top");

const modal = document.getElementById("certificate-modal");
const modalImage = document.getElementById("modal-image");
const modalClose = document.getElementById("modal-close");

const certificateButtons =
    document.querySelectorAll(".certificate-view");


/* =========================================================
   2. MOBILE NAVIGATION
========================================================= */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        const isOpen = navMenu.classList.contains("open");

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

}


/* =========================================================
   3. CLOSE MOBILE MENU
========================================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        if (menuToggle) {

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

});


/* =========================================================
   4. HEADER SCROLL EFFECT
========================================================= */

function handleHeader() {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeader);

handleHeader();


/* =========================================================
   5. TYPING ANIMATION
========================================================= */

const roles = [
    "Web Developer",
    "Frontend Developer",
    "CSE Student",
    "Creative Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    const speed = deleting ? 45 : 80;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =========================================================
   6. SCROLL REVEAL ANIMATION
========================================================= */

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   7. ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 180;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${sectionId}`
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


/* =========================================================
   8. CERTIFICATE MODAL
========================================================= */

certificateButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const imagePath =
            button.getAttribute("data-image");

        if (!imagePath || !modal || !modalImage) return;

        modalImage.src = imagePath;

        modal.classList.add("active");

        document.body.classList.add("modal-open");

    });

});


/* =========================================================
   9. CLOSE CERTIFICATE MODAL
========================================================= */

function closeCertificateModal() {

    if (!modal) return;

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

    setTimeout(() => {

        if (modalImage) {

            modalImage.src = "";

        }

    }, 300);

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeCertificateModal
    );

}


/* =========================================================
   10. CLOSE MODAL WHEN CLICKING BACKGROUND
========================================================= */

if (modal) {

    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            closeCertificateModal();

        }

    });

}


/* =========================================================
   11. ESCAPE KEY CLOSES MODAL
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeCertificateModal();

    }

});


/* =========================================================
   12. BACK TO TOP
========================================================= */

function handleBackToTop() {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}

window.addEventListener(
    "scroll",
    handleBackToTop
);

handleBackToTop();


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   13. CARD STAGGER ANIMATION
========================================================= */

const animatedGroups = [
    ".skill-card",
    ".project-card",
    ".certificate-card",
    ".stat-card"
];

animatedGroups.forEach((selector) => {

    const cards =
        document.querySelectorAll(selector);

    cards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });

});


/* =========================================================
   14. IMAGE LOAD EFFECT
========================================================= */

const images =
    document.querySelectorAll("img");

images.forEach((image) => {

    image.addEventListener("load", () => {

        image.classList.add("loaded");

    });

});


/* =========================================================
   15. PREVENT BROKEN IMAGE LOOK
========================================================= */

images.forEach((image) => {

    image.addEventListener("error", () => {

        console.warn(
            `Image could not be loaded: ${image.src}`
        );

    });

});


/* =========================================================
   16. CONSOLE MESSAGE
========================================================= */

console.log(
    "%c👋 Hello from Rem Saru Magar!",
    "font-size: 18px; font-weight: bold;"
);

console.log(
    "%cPortfolio loaded successfully.",
    "font-size: 13px;"
);