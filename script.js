const planets = {
    mercury: {
        name: "Mercury",
        fact: "A day on Mercury (one full rotation) is longer than its year (orbit around the Sun)!",
    },
    venus: {
        name: "Venus",
        fact: "Venus spins backward; the Sun rises in the west.",
    },
    earth: {
        name: "Earth",
        fact: "Earth is the only planet not named after a Greek or Roman god.",
    },
    mars: {
        name: "Mars",
        fact: "Mars is home to the tallest volcano in the solar system, Olympus Mons.",
    },
    jupiter: {
        name: "Jupiter",
        fact: "Jupiter's moon, Europa, may have a hidden ocean beneath its icy surface, possibly capable of supporting life.",
    },
    saturn: {
        name: "Saturn",
        fact: "Saturn's rings are made of ice and rock particles.",
    },
    uranus: {
        name: "Uranus",
        fact: "Uranus is the coldest planet in the solar system, even though Neptune is farther from the Sun.",
    },
    neptune: {
        name: "Neptune",
        fact: "Neptune has the strongest winds in the solar system, faster than a jet!",
    }
};

const infoCard = document.getElementById("info-card");
const planetName = document.getElementById("planet-name");
const planetFact = document.getElementById("planet-fact");

document.querySelectorAll(".planet").forEach(button => {
    button.addEventListener("click", () => {
        const planet = planets[button.id];
        planetName.textContent = planet.name;
        planetFact.textContent = planet.fact;
        infoCard.style.display = "block";
    });
});

document.querySelector(".close-btn").addEventListener("click", () => {
    infoCard.style.display = "none";
});