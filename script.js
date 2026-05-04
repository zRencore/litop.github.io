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
    const aboutCarousel = document.querySelector(".about-services-carousel");
    const aboutTrack = aboutCarousel?.querySelector(".about-carousel-track");
    const aboutPrevButton = document.getElementById("about-prev");
    const aboutNextButton = document.getElementById("about-next");
    const aboutDots = Array.from(document.querySelectorAll(".about-dot"));
    const contactForm = document.getElementById("contact-form");

    const SERVICE_ORDER = [
        "topografia-y-geodesia",
        "saneamiento-fisico-legal",
        "fotogrametria",
        "construccion-y-arquitectura",
        "gestion-territorial",
        "geotecnia",
        "produccion-cartografica",
        "capacitaciones",
    ];

    const SERVICE_PAGES = {
        "topografia-y-geodesia": {
            title: "TOPOGRAFÍA Y GEODESIA",
            heroImage: "https://centinel-ingenieros.com/wp-content/uploads/2021/12/TOPOGRAFIA.jpg",
            intro: "Realizamos servicios topográficos y geodésicos en obras públicas y privadas, de carreteras, de edificaciones, naves industriales, hacemos mediciones, levantamientos topográficos y todo tipo de controles de obras en general.",
            gallery: [
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/1-500x400.jpg",
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/2-500x400.jpg",
            ],
            bullets: [
                "Determinación y/o Monumentación de puntos de Control. Replanteo de puntos en edificaciones, control de posición.",
                "Levantamientos Arquitectónicos y estructurales.",
                "Nivelación Topográfica en diferentes proyectos.",
                "Cálculo de Volúmenes de Movimiento de Tierra",
                "Topografía Superficial, Subterránea y batimetría en general.",
                "Levantamientos topográficos en construcciones y obras civiles:",
                "Levantamientos Catastrales Urbano y Rural de Predios.",
                "Compra, Venta y Alquiler de Equipos Topográficos y Geodésicos.",
            ],
        },
        "saneamiento-fisico-legal": {
            title: "SANEAMIENTO FÍSICO LEGAL",
            heroImage: "https://centinel-ingenieros.com/wp-content/uploads/2021/12/saneamiento.jpg",
            intro: "El saneamiento físico legal de predios es el conjunto de pasos orientados a la regularización y formalización del derecho de propiedad u otros derechos reales.",
            gallery: [
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/1-1-500x400.jpg",
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/2-1-500x400.jpg",
            ],
            bullets: [
                "Replanteo de Lotización para Habilitaciones Urbanas",
                "Tasación de Inmuebles para Proyectos de Infraestructura.",
                "Levantamiento de Edificiones, Obras Complementarias, Elaboración de Búsquedas Catastrales a nivel nacional.",
                "Elaboración de documentación ( planos, expedientes, etc.)",
                "Visación para declaratoria de Fabrica.",
                "Asesoramiento y Elaboración de Expedientes Técnicos. Expedientes",
                "Técnico para Saneamiento Físico Legal.",
                "Gestión para tramites prediales y municipales en general.",
            ],
        },
        "fotogrametria": {
            title: "FOTOGRAMETRÍA",
            heroImage: "https://centinel-ingenieros.com/wp-content/uploads/2021/12/seguimiento-obra-con-drones-peru-1.jpg",
            intro: "Con el empleo de drones especialmente acondicionadas de alta precisión obtenemos fotografías aéreas de alta resolución, Nuestra empresa utiliza un procedimiento estricto de trabajo lo cual asegura la precisión que nos caracteriza.",
            gallery: [
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/seguimiento-obra-con-drones-500x400.jpg",
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/seguimiento-obra-con-drones-peru-500x400.jpg",
            ],
            bullets: [
                "Levantamientos Aero fotogramétricos con Sistema Lidar",
                "Levantamientos Aero fotogramétricos con Fotografías Aéreas",
                "Levantamientos Topográficos con Sistema Drone (UAV)",
                "Inspección Termográfica con Drones",
                "Supervisión y Seguimiento de Obras con Drone (UAV)",
                "Prevención y Atención de Emergencias.",
                "Fotogrametría para Gestión de Riesgo de Desastres. Filmaciones y/o grabaciones de diferentes eventos",
                "Fotogrametría para agricultura de Precisión",
            ],
        },
        "construccion-y-arquitectura": {
            title: "CONSTRUCCIÓN Y ARQUITECTURA",
            heroImage: "https://centinel-ingenieros.com/wp-content/uploads/2021/12/construccion-2.jpg",
            intro: "Brindamos servicios de ingeniería y arquitectura para viviendas, edificios multifamiliares, condominios, casa de playa, local comercial o industrial, contamos con un equipo de profesionales de primer nivel y amplia experiencia para satisfacer sus necesidades.",
            gallery: [
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/construccion1-500x400.jpg",
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/construccion2-500x400.jpg",
            ],
            bullets: [
                "Construcción de obras civiles, eléctricas y obras hidráulicas, Planeamiento urbanístico vial: diseños e implementación.",
                "Plantas cementeras, mineras, migración de sistemas automatizados.",
                "Servicios de mantenimientos preventivos predictivos, proactivos.",
                "Telecomunicaciones e instalaciones eléctricas, entre otros.",
                "Inspección técnica y habitabilidad, seguridad y durabilidad.",
                "Estudios en arquitectura, diseño de interiores y mobiliario.",
                "Construcción tradicional y construcción en drywall.",
                "Diseño de estructuras especiales como reservorios, silosm etc.",
                "Servicio de carpintería en general madera y metal.",
                "Alquiler de camionetas 4×4 y vehículos motorizados para obra.",
                "Proyectos de delimitación de suelo urbano, estudios de detalle.",
            ],
        },
        "gestion-territorial": {
            title: "GESTIÓN TERRITORIAL",
            heroImage: "https://centinel-ingenieros.com/wp-content/uploads/2021/12/Planes-de-Ordenamiento-Territorial.jpg",
            intro: "Gestionar un territorio implica, en la actualidad, una acción compartida socialmente. por ello estamos comprometidos a elabora Planes de Ordenamiento Territorial adecuados a los instrumentos locales de intervención.",
            gallery: [
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/ambiental-500x400.jpg",
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/Planes-de-Ordenamiento-Territorial2-500x400.jpg",
            ],
            bullets: [
                "Elaboración de Planes Ordenamiento Territorial en entidades públicas tales como municipalidades y gobiernos regionales.",
                "Estudios de Zonificación Ecológica y Económica",
                "Estudios de Demarcación Territorial",
                "Asesoramiento y Elaboración de Planes de Desarrollo Urbano.",
                "Asesoramiento y Elaboración de Planes de Acondicionamiento",
                "Elaboración de Expedientes para Habilitaciones Urbanas.",
                "Elaboración de Programas de Actuación Integrada.",
                "Elaboración de Evaluación Ambiental Estratégica",
            ],
        },
        geotecnia: {
            title: "GEOTECNIA",
            heroImage: "https://centinel-ingenieros.com/wp-content/uploads/2021/12/GEOTECNIA-peru.jpg",
            intro: "Nuestro servicio estudio de suelos esta basado en análisis geotécnicos con fines de cimentación de instalaciones civiles y mineras: edificaciones, carreteras, plantas industriales, chancadoras,molinos, puentes, etc.",
            gallery: [
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/geotecnia1-500x400.jpg",
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/GEOTECNIA2-500x400.jpg",
            ],
            bullets: [
                "Estudios geotécnicos en diferentes áreas apropiadas para la para otros proyectos necesarios para las operaciones, investigaciones.",
                "Exploraciones, estudios y análisis de ingeniería integrada.",
                "Evaluación de estabilidad física en depósitos de relaves.",
                "Estabilidad de taludes en suelo y roca.",
                "Evaluación del potencial de licuación.",
                "Diseño de muros de suelo reforzado, gaviones.",
                "Investigación in-situ de geotecnia aplicada, cimentaciones.",
                "Asesorías en soluciones de tecnología para túneles y autopistas.",
            ],
        },
        "produccion-cartografica": {
            title: "PRODUCCIÓN CARTOGRÁFICA",
            heroImage: "https://centinel-ingenieros.com/wp-content/uploads/2021/12/Elaboraci%C3%B3n-de-mapas-en-formato-digital.jpg",
            intro: "La cartografía en formato digital y los servicios de mapas web han experimentado un crecimiento explosivo y constituyen actualmente el núcleo conceptual de todo el proceso productivo.",
            gallery: [
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/cartografia1-500x400.jpg",
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/cartografia2-500x400.jpg",
            ],
            bullets: [
                "Elaboración de visores web, cartográfico.",
                "Elaboración de mapas en formato digital para proyectos.",
                "Creación de un sistema de consulta dinámico para la gestión organizacional.",
                "Entrenamiento para el personal de gestión del sig.",
                "Asesoría post-implementación, diseño de bases de datos.",
                "Compra y venta de productos cartográficos tales como mapas, imágenes satelitales, ortofotos y similares.",
            ],
        },
        capacitaciones: {
            title: "CAPACITACIONES",
            heroImage: "https://centinel-ingenieros.com/wp-content/uploads/2021/12/capacitacion.jpg",
            intro: "Contamos con un staff de profesionales y técnicos con una amplia experiencia en temas que requieren del uso de la cartografía como herramienta para el desarrollo de proyectos de ingeniería, minería, agricultura y planificación urbana.",
            gallery: [
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/estudiar-drones-500x400.jpg",
                "https://centinel-ingenieros.com/wp-content/uploads/2021/12/TOPOGRAFIA-capacitacion-500x400.jpg",
            ],
            bullets: [
                "Capacitaciones en el Manejo de Equipos Topográficos.",
                "Capacitación en Manejo y/o Operatividad de Drones (UAV)",
                "Capacitación en Levantamiento y/o procesamiento.",
                "Capacitación en Sistemas de Información Geográfica (GIS).",
                "Capacitación en Gestión de riesgo de desastres.",
                "Capacitación en temas vinculados a gestión ambiental.",
                "Capacitación en temas vinculados a Ordenamiento Territorial.",
                "Capacitación en temas de Catastro y Saneamiento Físico Legal.",
                "Capacitación en temas vinculados a Geología y Geotecnia",
                "Capacitación en temas vinculados a Ingeniería Geográfica, Civil, Ambiental, Arquitectura, etc.",
            ],
        },
    };

    function getServiceUrl(slug) {
        return `servicio.html?slug=${encodeURIComponent(slug)}`;
    }

    function getServiceMeta(slug) {
        const index = SERVICE_ORDER.indexOf(slug);
        const current = SERVICE_PAGES[slug] || SERVICE_PAGES[SERVICE_ORDER[0]];
        const prev = SERVICE_ORDER[(index - 1 + SERVICE_ORDER.length) % SERVICE_ORDER.length] || SERVICE_ORDER[0];
        const next = SERVICE_ORDER[(index + 1) % SERVICE_ORDER.length] || SERVICE_ORDER[0];

        return { slug, current, prev, next };
    }

    let currentSlide = 0;
    let autoplayId = null;
    let currentServicePage = 0;
    let serviceAutoplayId = null;
    let servicePageCount = 0;
    let currentAboutSlide = 0;
    let aboutAutoplayId = null;
    let aboutSlideCount = 0;

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

    function setServicePage(index, withTransition = true) {
        if (!servicesTrack || !servicePageCount) {
            return;
        }

        currentServicePage = (index + servicePageCount) % servicePageCount;
        servicesTrack.style.transition = withTransition ? "transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none";
        servicesTrack.style.transform = `translate3d(-${currentServicePage * 100}%, 0, 0)`;

        servicesDots.forEach(function (dot, dotIndex) {
            dot.classList.toggle("is-active", dotIndex === currentServicePage);
        });
    }

    function buildServicePages() {
        if (!servicesTrack) {
            return;
        }

        const cards = Array.from(servicesTrack.querySelectorAll(".service-card"));

        if (cards.length < 2) {
            return;
        }

        const step = 3;
        const sequence = [];
        let start = 0;

        do {
            sequence.push(start);
            start = (start + step) % cards.length;
        } while (start !== 0);

        const pages = sequence.map(function (pageStart) {
            const page = document.createElement("div");
            page.className = "services-page";

            for (let offset = 0; offset < step; offset += 1) {
                const card = cards[(pageStart + offset) % cards.length].cloneNode(true);
                page.appendChild(card);
            }

            return page;
        });

        servicesTrack.replaceChildren(...pages);
        servicePageCount = pages.length;
        currentServicePage = 0;
        setServicePage(0, false);
    }

    function startServiceAutoplay() {
        if (!servicesTrack || servicePageCount < 2) {
            return;
        }

        stopServiceAutoplay();
        serviceAutoplayId = window.setInterval(function () {
            setServicePage(currentServicePage + 1);
        }, 5000);
    }

    function stopServiceAutoplay() {
        if (serviceAutoplayId) {
            window.clearInterval(serviceAutoplayId);
            serviceAutoplayId = null;
        }
    }

    function setAboutSlide(index, withTransition = true) {
        if (!aboutTrack || !aboutSlideCount) {
            return;
        }

        currentAboutSlide = (index + aboutSlideCount) % aboutSlideCount;
        aboutTrack.style.transition = withTransition ? "transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none";
        aboutTrack.style.transform = `translate3d(-${currentAboutSlide * 100}%, 0, 0)`;

        aboutDots.forEach(function (dot, dotIndex) {
            dot.classList.toggle("is-active", dotIndex === currentAboutSlide);
        });
    }

    function startAboutAutoplay() {
        if (!aboutTrack || aboutSlideCount < 2) {
            return;
        }

        stopAboutAutoplay();
        aboutAutoplayId = window.setInterval(function () {
            setAboutSlide(currentAboutSlide + 1);
        }, 5000);
    }

    function stopAboutAutoplay() {
        if (aboutAutoplayId) {
            window.clearInterval(aboutAutoplayId);
            aboutAutoplayId = null;
        }
    }

    function createServiceHoverIcon() {
        const icon = document.createElement("span");
        icon.className = "service-hover-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.innerHTML = '<svg viewBox="0 0 24 24" focusable="false"><path d="M10.5 4a6.5 6.5 0 1 0 4.17 11.49l3.92 3.92 1.41-1.41-3.92-3.92A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"/></svg>';
        return icon;
    }

    function createServiceHoverDots() {
        const dots = document.createElement("span");
        dots.className = "service-hover-dots";
        dots.setAttribute("aria-hidden", "true");
        dots.innerHTML = "<span></span><span></span><span></span>";
        return dots;
    }

    function prepareServiceCards() {
        document.querySelectorAll(".service-card").forEach(function (card) {
            if (card.dataset.hoverReady === "true") {
                return;
            }

            const media = card.querySelector(".service-media");
            let icon = card.querySelector(".service-hover-icon");
            let dotsNode = card.querySelector(".service-hover-dots");

            if (!icon) {
                icon = createServiceHoverIcon();
            }

            if (!dotsNode) {
                dotsNode = createServiceHoverDots();
            }

            if (media) {
                media.appendChild(icon);
                media.appendChild(dotsNode);
            }

            card.tabIndex = 0;
            card.setAttribute("role", "link");
            card.setAttribute("aria-label", `Ver servicio ${card.dataset.serviceSlug.replace(/-/g, " ")}`);

            let leaveTimer = null;

            card.addEventListener("mouseenter", function () {
                if (leaveTimer) {
                    window.clearTimeout(leaveTimer);
                    leaveTimer = null;
                }

                card.classList.add("is-hovering");
                card.classList.remove("is-leaving");
            });

            card.addEventListener("mouseleave", function () {
                card.classList.remove("is-hovering");
                card.classList.add("is-leaving");

                leaveTimer = window.setTimeout(function () {
                    card.classList.remove("is-leaving");
                    leaveTimer = null;
                }, 220);
            });

            card.dataset.hoverReady = "true";
        });
    }

    function renderServiceDetail() {
        const root = document.querySelector("[data-service-detail]");

        if (!root) {
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const slug = params.get("slug") || SERVICE_ORDER[0];
        const meta = getServiceMeta(slug);
        const detail = meta.current;

        document.title = `${detail.title} | Constructora Litop`;

        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
            descriptionTag.setAttribute("content", detail.intro);
        }

        const titleNode = document.getElementById("service-title");
        const introNode = document.getElementById("service-intro");
        const heroNode = document.getElementById("service-hero");
        const galleryNode = document.getElementById("service-gallery");
        const bulletsNode = document.getElementById("service-bullets");
        const prevNode = document.getElementById("service-prev");
        const nextNode = document.getElementById("service-next");
        const prevLabelNode = document.getElementById("service-prev-label");
        const nextLabelNode = document.getElementById("service-next-label");

        if (titleNode) {
            titleNode.textContent = detail.title;
        }

        if (introNode) {
            introNode.textContent = detail.intro;
        }

        if (heroNode) {
            heroNode.style.backgroundImage = `url('${detail.heroImage}')`;
        }

        if (galleryNode) {
            galleryNode.innerHTML = detail.gallery.map(function (src, index) {
                return `<figure class="service-gallery-item"><img src="${src}" alt="${detail.title} ${index + 1}"></figure>`;
            }).join("");
        }

        if (bulletsNode) {
            bulletsNode.innerHTML = detail.bullets.map(function (bullet) {
                return `<li>${bullet}</li>`;
            }).join("");
        }

        if (prevNode) {
            prevNode.href = getServiceUrl(meta.prev);
            if (prevLabelNode) {
                prevLabelNode.textContent = SERVICE_PAGES[meta.prev].title;
            }
            prevNode.setAttribute("aria-label", `Servicio anterior: ${SERVICE_PAGES[meta.prev].title}`);
        }

        if (nextNode) {
            nextNode.href = getServiceUrl(meta.next);
            if (nextLabelNode) {
                nextLabelNode.textContent = SERVICE_PAGES[meta.next].title;
            }
            nextNode.setAttribute("aria-label", `Servicio siguiente: ${SERVICE_PAGES[meta.next].title}`);
        }
    }

    function bindServiceNavigation() {
        document.addEventListener("click", function (event) {
            const card = event.target.closest(".service-card[data-service-slug]");

            if (!card) {
                return;
            }

            if (event.target.closest("a, button")) {
                return;
            }

            const slug = card.dataset.serviceSlug;

            if (slug) {
                window.location.href = getServiceUrl(slug);
            }
        });

        document.addEventListener("keydown", function (event) {
            const card = event.target.closest(".service-card[data-service-slug]");

            if (!card) {
                return;
            }

            if (event.key !== "Enter" && event.key !== " ") {
                return;
            }

            event.preventDefault();

            const slug = card.dataset.serviceSlug;

            if (slug) {
                window.location.href = getServiceUrl(slug);
            }
        });
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

    bindServiceNavigation();
    renderServiceDetail();

    if (servicesTrack) {
        buildServicePages();
        prepareServiceCards();

        if (servicePageCount > 0) {
            servicesPrevButton?.addEventListener("click", function () {
                setServicePage(currentServicePage - 1);
                startServiceAutoplay();
            });

            servicesNextButton?.addEventListener("click", function () {
                setServicePage(currentServicePage + 1);
                startServiceAutoplay();
            });

            servicesCarousel?.addEventListener("mouseenter", stopServiceAutoplay);
            servicesCarousel?.addEventListener("mouseleave", startServiceAutoplay);

            servicesDots.forEach(function (dot) {
                dot.addEventListener("click", function () {
                    const targetIndex = Number(dot.dataset.serviceSlide);

                    if (!Number.isNaN(targetIndex)) {
                        setServicePage(targetIndex);
                        startServiceAutoplay();
                    }
                });
            });

            startServiceAutoplay();
        }
    }

    prepareServiceCards();

    if (aboutTrack) {
        aboutSlideCount = aboutTrack.children.length;
        setAboutSlide(0, false);

        aboutPrevButton?.addEventListener("click", function () {
            setAboutSlide(currentAboutSlide - 1);
            startAboutAutoplay();
        });

        aboutNextButton?.addEventListener("click", function () {
            setAboutSlide(currentAboutSlide + 1);
            startAboutAutoplay();
        });

        aboutCarousel?.addEventListener("mouseenter", stopAboutAutoplay);
        aboutCarousel?.addEventListener("mouseleave", startAboutAutoplay);

        aboutDots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                const targetIndex = Number(dot.dataset.aboutSlide);

                if (!Number.isNaN(targetIndex)) {
                    setAboutSlide(targetIndex);
                    startAboutAutoplay();
                }
            });
        });

        startAboutAutoplay();
    }

    contactForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        window.alert("Gracias. Tu mensaje fue registrado.");
        contactForm.reset();
    });

    setSlide(0);
    startAutoplay();
})();
