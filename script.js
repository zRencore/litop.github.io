(function () {
    const menuToggle = document.getElementById("menu-toggle");
    const siteNav = document.getElementById("site-nav");
    const slides = Array.from(document.querySelectorAll(".hero-slide"));
    const dots = Array.from(document.querySelectorAll(".dot"));
    const prevButton = document.getElementById("hero-prev");
    const nextButton = document.getElementById("hero-next");
    const servicesCarousel = document.querySelector(".services-carousel");
    const servicesTrack = servicesCarousel?.querySelector(".services-track");
    const servicesPrevButton = document.getElementById("services-prev");
    const servicesNextButton = document.getElementById("services-next");
    const servicesDots = Array.from(document.querySelectorAll(".services-dots .dot"));
    const contactForm = document.getElementById("contact-form");

    let currentSlide = 0;
    let autoplayId = null;
    let currentServiceSlide = 0;
    let serviceAutoplayId = null;
    let realServiceSlideCount = 0;
    let serviceCloneCount = 0;
    let serviceSlideWidth = 0;
    let serviceTransitionIndex = 0;

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

    function setServiceSlide(index, withTransition = true) {
        if (!servicesTrack || !realServiceSlideCount) {
            return;
        }

        currentServiceSlide = index;
        serviceTransitionIndex = ((currentServiceSlide - serviceCloneCount) % realServiceSlideCount + realServiceSlideCount) % realServiceSlideCount;
        servicesTrack.style.transition = withTransition ? "transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none";
        servicesTrack.style.transform = `translate3d(-${Math.round(currentServiceSlide * serviceSlideWidth)}px, 0, 0)`;

        servicesDots.forEach(function (dot, dotIndex) {
            dot.classList.toggle("is-active", dotIndex === serviceTransitionIndex);
        });

        if (!withTransition) {
            void servicesTrack.offsetWidth;
        }
    }

    function updateServiceSlideWidth() {
        if (!servicesTrack) {
            return;
        }

        const firstCard = servicesTrack.querySelector(".service-card");
        const trackStyles = window.getComputedStyle(servicesTrack);
        const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || "0") || 0;
        serviceSlideWidth = firstCard ? firstCard.getBoundingClientRect().width + gap : 0;
    }

    function startServiceAutoplay() {
        if (!servicesTrack || realServiceSlideCount < 2) {
            return;
        }

        stopServiceAutoplay();
        serviceAutoplayId = window.setInterval(function () {
            setServiceSlide(currentServiceSlide + 1);
        }, 5000);
    }

    function stopServiceAutoplay() {
        if (serviceAutoplayId) {
            window.clearInterval(serviceAutoplayId);
            serviceAutoplayId = null;
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

    if (servicesTrack) {
        const realServiceSlides = Array.from(servicesTrack.children);

        if (realServiceSlides.length > 0) {
            serviceCloneCount = Math.min(3, realServiceSlides.length);

            const firstClones = realServiceSlides.slice(0, serviceCloneCount).map(function (slide) {
                return slide.cloneNode(true);
            });
            const lastClones = realServiceSlides.slice(-serviceCloneCount).map(function (slide) {
                return slide.cloneNode(true);
            });

            lastClones.reverse().forEach(function (clone) {
                servicesTrack.insertBefore(clone, realServiceSlides[0]);
            });
            firstClones.forEach(function (clone) {
                servicesTrack.appendChild(clone);
            });

            realServiceSlideCount = realServiceSlides.length;
            currentServiceSlide = serviceCloneCount;
            updateServiceSlideWidth();
            setServiceSlide(currentServiceSlide, false);

            servicesTrack.addEventListener("transitionend", function () {
                if (currentServiceSlide >= realServiceSlideCount + serviceCloneCount) {
                    setServiceSlide(serviceCloneCount, false);
                } else if (currentServiceSlide < serviceCloneCount) {
                    setServiceSlide(realServiceSlideCount + currentServiceSlide, false);
                }
            });

            servicesPrevButton?.addEventListener("click", function () {
                setServiceSlide(currentServiceSlide - 1);
                startServiceAutoplay();
            });

            servicesNextButton?.addEventListener("click", function () {
                setServiceSlide(currentServiceSlide + 1);
                startServiceAutoplay();
            });

            servicesCarousel?.addEventListener("mouseenter", stopServiceAutoplay);
            servicesCarousel?.addEventListener("mouseleave", startServiceAutoplay);

            servicesDots.forEach(function (dot) {
                dot.addEventListener("click", function () {
                    const targetIndex = Number(dot.dataset.serviceSlide);

                    if (!Number.isNaN(targetIndex)) {
                        setServiceSlide(serviceCloneCount + targetIndex);
                        startServiceAutoplay();
                    }
                });
            });

            window.addEventListener("resize", function () {
                updateServiceSlideWidth();
                setServiceSlide(currentServiceSlide, false);
            });

            startServiceAutoplay();
        }
    }

    contactForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        window.alert("Gracias. Tu mensaje fue registrado.");
        contactForm.reset();
    });

    setSlide(0);
    startAutoplay();
})();
