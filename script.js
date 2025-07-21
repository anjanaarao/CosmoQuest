// NASA API configuration
const NASA_API_KEY = "3b9y7O5PQTSTPjsXye1Kyr9mYWB1cozAenbaIpKc"; 
const NASA_BASE_URL = "https://api.nasa.gov";

// Simple planet database with fun facts
const planets = {
  mercury: { name: "Mercury", fact: "A day on Mercury is longer than its year!" },
  venus: { name: "Venus", fact: "Venus spins backward; the Sun rises in the west." },
  earth: { name: "Earth", fact: "Earth is the only planet not named after a deity." },
  mars: { name: "Mars", fact: "Mars has the tallest volcano in the solar system." },
  jupiter: { name: "Jupiter", fact: "Europa may harbor life under its ice." },
  saturn: { name: "Saturn", fact: "Saturn's rings are made of ice and rock." },
  uranus: { name: "Uranus", fact: "Uranus rotates on its side — a unique tilt!" },
  neptune: { name: "Neptune", fact: "Neptune has the fastest winds in the solar system." },
};

// Info card when a planet is clicked
document.querySelectorAll(".planet").forEach(btn => {
  btn.addEventListener("click", () => {
    const planet = planets[btn.id];
    document.getElementById("planet-name").textContent = planet.name;
    document.getElementById("planet-fact").textContent = planet.fact;
    document.getElementById("info-card").style.display = "block";
  });
});

// Closing the planet info card
document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("info-card").style.display = "none";
});

// Navigation logic: switch between Solar System and APOD
document.querySelectorAll(".nav-btn").forEach(button => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-section");

    // Update button styles
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Show correct section
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(target + "-section").classList.add("active");

    // If APOD tab selected, fetch image
    if (target === "apod") loadAPOD();
  });
});

// NASA Astronomy Picture of the Day
async function loadAPOD() {
  const content = document.getElementById("apod-content");
  content.innerHTML = `<div class="loading">Loading today's cosmic wonder...</div>`;

  try {
    const res = await fetch(`${NASA_BASE_URL}/planetary/apod?api_key=${NASA_API_KEY}`);
    const data = await res.json();

    // Display image or video with explanation
    content.innerHTML = `
      <h4>${data.title}</h4>
      <p><em>${data.date}</em></p>
      ${data.media_type === "image"
        ? `<img src="${data.url}" alt="${data.title}" class="apod-image" />`
        : `<iframe width="100%" height="315" src="${data.url}" frameborder="0" allowfullscreen></iframe>`}
      <p>${data.explanation}</p>
      ${data.copyright ? `<p><strong>Credit:</strong> ${data.copyright}</p>` : ""}
    `;
  } catch (err) {
    content.innerHTML = `<div class="error">Failed to load APOD. Please try again later.</div>`;
  }
}

// Animated stars for background
function createStars() {
  const container = document.querySelector(".stars");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.style.position = "absolute";
    star.style.width = `${Math.random() * 2}px`;
    star.style.height = star.style.width;
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.opacity = Math.random().toFixed(2);
    star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate`;
    container.appendChild(star);
  }
}

// Twinkling animation style 
const style = document.createElement("style");
style.textContent = `
@keyframes twinkle {
  from { opacity: 0.2; }
  to { opacity: 1; }
}`;
document.head.appendChild(style);

// Start star background on page load
createStars();
