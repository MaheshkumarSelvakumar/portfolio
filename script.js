const hour = new Date().getHours();
const greeting = document.getElementById("greeting");

if (hour<12) {
    greeting.textContent = "Good morning! Ready to code? ☀️";
}
else if (hour<=17) {
    greeting.textContent = "Good afternoon! Keep building! 🌸";
}
else if (hour>17) {
    greeting.textContent = "Good evening! Night coding session? 🌙";
}

const skills = document.querySelectorAll(".skill-card");

skills.forEach(skill => {
    skill.addEventListener("click", () => {
        skill.classList.toggle("active");
    });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const statsBox = document.getElementById("github-stats");

async function fetchGitHubStats() {
    try {
        const response = await fetch("https://api.github.com/users/MaheshkumarSelvakumar");
        const data = await response.json();
        statsBox.innerHTML = `
            <p class="github-name">${data.name}</p>
            <p class="github-bio">${data.bio || "Aspiring Full Stack Developer 🌸"}</p>

            <div class="github-stats-grid">
                <div class="github-stat">
                    <p class="github-stat-value">${data.public_repos}</p>
                    <span class="github-stat-label">Repositories</span>
                </div>
                <div class="github-stat">
                    <p class="github-stat-value">${data.followers}</p>
                    <span class="github-stat-label">Followers</span>
                </div>
                <div class="github-stat">
                    <p class="github-stat-value">${data.following}</p>
                    <span class="github-stat-label">Following</span>
                </div>
                <div class="github-stat">
                    <p class="github-stat-value">${data.public_gists}</p>
                    <span class="github-stat-label">Gists</span>
                </div>
            </div>

            <a href="${data.html_url}" target="_blank" class="btn btn-primary">
                View GitHub Profile
            </a>`;

    } catch (error) {
        console.log("GitHub fetch failed:", error);
        statsBox.innerHTML = `<p>Error: Unable to fetch GitHub stats.</p>`;
    }
}


fetchGitHubStats();