(function () {
    const menuToggle = document.getElementById("menu-toggle");
    const siteNav = document.getElementById("site-nav");
    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const dots = Array.from(document.querySelectorAll(".dot"));
    const prevButton = document.getElementById("hero-prev");
    const nextButton = document.getElementById("hero-next");
    const contactForm = document.getElementById("contact-form");

    let currentSlide = 0;
    let autoplayId = null;

    function setSlide(index) {
        if (!slides.length) {
            return;
        }

        currentSlide = (index + slides.length) % slides.length;

        slides.forEach(function (slide, slideIndex) {
            slide.classList.toggle("is-active", slideIndex === currentSlide);
            const title = slide.querySelector(".hero-title");

            if (title) {
                title.style.animation = "none";
                void title.offsetWidth;
                title.style.animation = "";
            }
        });

        dots.forEach(function (dot, dotIndex) {
            dot.classList.toggle("is-active", dotIndex === currentSlide);
        });
    }

    function startAutoplay() {
        if (!slides.length) {
            return;
        }

        stopAutoplay();
        autoplayId = window.setInterval(function () {
            setSlide(currentSlide + 1);
        }, 5000);
    }

    function stopAutoplay() {
        if (autoplayId) {
            window.clearInterval(autoplayId);
            autoplayId = null;
        }
    }

    menuToggle?.addEventListener("click", function () {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!expanded));
        siteNav?.classList.toggle("is-open");
    });

    document.querySelectorAll(".site-nav a").forEach(function (link) {
        link.addEventListener("click", function () {
            siteNav?.classList.remove("is-open");
            menuToggle?.setAttribute("aria-expanded", "false");
        });
    });

    prevButton?.addEventListener("click", function () {
        setSlide(currentSlide - 1);
        startAutoplay();
    });

    nextButton?.addEventListener("click", function () {
        setSlide(currentSlide + 1);
        startAutoplay();
    });

    dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            setSlide(index);
            startAutoplay();
        });
    });

    document.querySelector(".hero-slider")?.addEventListener("mouseenter", stopAutoplay);
    document.querySelector(".hero-slider")?.addEventListener("mouseleave", startAutoplay);

    contactForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        window.alert("Gracias. Tu mensaje fue registrado.");
        contactForm.reset();
    });

    setSlide(0);
    startAutoplay();
})();
