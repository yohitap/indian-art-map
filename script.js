/* =====================================================
   INDIAN ART HERITAGE MAP
===================================================== */


const locations = {

    sanchi: {

        period: "3rd Century BCE onwards",

        title: "Sanchi",

        category: "BUDDHIST ART & ARCHITECTURE",

        image: "images/sanchi.jpg",

        alt: "Sanchi Stupa",

        description:
            "Sanchi is one of India's most important Buddhist heritage sites, famous for its stupas, gateways and sculptural decoration.",

        history:
            "The Great Stupa at Sanchi was originally commissioned during the Mauryan period and was later expanded and decorated by subsequent rulers.",

        significance:
            "Sanchi demonstrates the development of Buddhist architecture and narrative sculpture in ancient India."

    },


    bhimbetka: {

        period: "Prehistoric Period",

        title: "Bhimbetka",

        category: "PREHISTORIC ROCK ART",

        image: "images/bhimbetka.jpg",

        alt: "Bhimbetka rock paintings",

        description:
            "The Bhimbetka rock shelters preserve some of the earliest known examples of rock art on the Indian subcontinent.",

        history:
            "The shelters contain paintings created across different prehistoric periods, showing scenes of animals, hunting, dancing and everyday life.",

        significance:
            "Bhimbetka provides valuable evidence of early human creativity, visual communication and life in prehistoric India."

    },


    ajanta: {

        period: "2nd Century BCE – 6th Century CE",

        title: "Ajanta",

        category: "BUDDHIST PAINTING & SCULPTURE",

        image: "images/ajanta.jpg",

        alt: "Ajanta Caves",

        description:
            "The Ajanta Caves are renowned for their Buddhist murals, sculptures and rock-cut architecture.",

        history:
            "The caves developed over several centuries and contain monasteries, prayer halls, sculptures and paintings connected with Buddhist traditions.",

        significance:
            "Ajanta is one of the most important surviving examples of ancient Indian painting and Buddhist visual culture."

    },


    ellora: {

        period: "5th – 10th Century CE",

        title: "Ellora",

        category: "ROCK-CUT ARCHITECTURE",

        image: "images/ellora.jpg",

        alt: "Ellora Caves",

        description:
            "Ellora is a monumental rock-cut complex containing Buddhist, Hindu and Jain caves.",

        history:
            "The caves were created over several centuries and demonstrate the interaction of different religious and artistic traditions.",

        significance:
            "Ellora represents the extraordinary technical and artistic achievements of Indian rock-cut architecture."

    },


    khajuraho: {

        period: "10th – 11th Century CE",

        title: "Khajuraho",

        category: "TEMPLE SCULPTURE & ARCHITECTURE",

        image: "images/khajuraho.jpg",

        alt: "Khajuraho Temple",

        description:
            "The Khajuraho group of monuments is celebrated for its elaborate temple architecture and sculptural decoration.",

        history:
            "The temples were constructed mainly during the Chandela period and contain extensive carvings representing religious, social and everyday themes.",

        significance:
            "Khajuraho demonstrates the sophistication of medieval Indian temple architecture and stone sculpture."

    },


    konark: {

        period: "13th Century CE",

        title: "Konark",

        category: "EASTERN INDIAN TEMPLE ARCHITECTURE",

        image: "images/konark.jpg",

        alt: "Konark Sun Temple",

        description:
            "The Sun Temple at Konark is one of the most celebrated monuments of medieval Indian architecture.",

        history:
            "Built during the 13th century under the Eastern Ganga dynasty, the temple was designed as a monumental chariot dedicated to Surya, the Sun God.",

        significance:
            "Konark demonstrates the advanced architectural planning, stone carving and symbolic design of medieval Odisha."

    },


    thanjavur: {

        period: "11th Century CE",

        title: "Thanjavur",

        category: "CHOLA TEMPLE ART & ARCHITECTURE",

        image: "images/thanjavur.jpg",

        alt: "Brihadeeswarar Temple at Thanjavur",

        description:
            "Thanjavur is renowned for the Brihadeeswarar Temple, one of the greatest achievements of Chola architecture.",

        history:
            "The temple was built under Raja Raja Chola I and completed in the early 11th century.",

        significance:
            "Thanjavur illustrates the architectural ambition, sculpture and cultural achievements of the Chola period."

    }

};


/* =====================================================
   ELEMENTS
===================================================== */

const imageElement =
    document.getElementById("location-image");

const periodElement =
    document.getElementById("location-period");

const titleElement =
    document.getElementById("location-title");

const categoryElement =
    document.getElementById("location-category");

const descriptionElement =
    document.getElementById("location-description");

const historyElement =
    document.getElementById("location-history");

const significanceElement =
    document.getElementById("location-significance");

const markers =
    document.querySelectorAll(".map-marker");


/* =====================================================
   CHANGE LOCATION
===================================================== */

function showLocation(locationId) {

    const location =
        locations[locationId];

    if (!location) {
        return;
    }


    /*
        Update text
    */

    periodElement.textContent =
        location.period;

    titleElement.textContent =
        location.title;

    categoryElement.textContent =
        location.category;

    descriptionElement.textContent =
        location.description;

    historyElement.textContent =
        location.history;

    significanceElement.textContent =
        location.significance;


    /*
        Update image
    */

    imageElement.src =
        location.image;

    imageElement.alt =
        location.alt;


    /*
        Highlight selected marker
    */

    markers.forEach(marker => {

        marker.classList.remove("active");

    });


    const selectedMarker =
        document.querySelector(
            `[data-location="${locationId}"]`
        );


    if (selectedMarker) {

        selectedMarker.classList.add("active");

    }


    /*
        Scroll information panel into view
        on smaller screens.
    */

    if (window.innerWidth <= 1100) {

        document
            .getElementById("info-panel")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }

}


/* =====================================================
   MARKER CLICK EVENTS
===================================================== */

markers.forEach(marker => {

    marker.addEventListener(
        "click",
        function () {

            const locationId =
                this.dataset.location;

            showLocation(locationId);

        }
    );


    /*
        Keyboard accessibility
    */

    marker.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                const locationId =
                    this.dataset.location;

                showLocation(locationId);

            }

        }
    );

});


/* =====================================================
   HERO BUTTON
===================================================== */

function scrollToMap() {

    const mapSection =
        document.getElementById("map-section");

    mapSection.scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   IMAGE ERROR HANDLING
===================================================== */

imageElement.addEventListener(
    "error",
    function () {

        console.error(
            "Image could not be loaded:",
            this.src
        );

        /*
            Do not replace the image with a random
            online URL. This makes debugging easier.
        */

    }
);


/* =====================================================
   INITIAL LOCATION
===================================================== */

showLocation("sanchi");