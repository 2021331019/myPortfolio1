const data = {
  name: "Mehedi Hasan Masum",
  role: "Student of SUST CSE",
  profileImage:
    "https://raw.githubusercontent.com/2021331019/myPortfolio/main/profile.jpg",
  about:
    "Hello! I’m Mehedi Hasan Masum, a Computer Science & Engineering student at SUST. I love programming, solving problems, and building creative web applications.",
  projects: [
    {
      icon: "🎮",
      title: "Tic-tac-Toe Game",
      description: "A simple yet fun game to play and practice programming logic.",
    },
    {
      icon: "💻",
      title: "Tuition Media Web App",
      description:
        "A web app for managing tuition classes and student information.",
    },
    // তোমার আরো প্রজেক্ট এখানে যোগ করতে পারো
  ],
  contact: {
    email: "mahadihasankhan00@gmail.com",
    mobile: "01601496272",
    facebook: "https://www.facebook.com/mehadihasan.masum.3",
  },
};

function loadPortfolio() {
  // Header
  document.getElementById("profile-img").src = data.profileImage;
  document.getElementById("name").textContent = data.name;
  document.getElementById("role").textContent = data.role;

  // About
  document.getElementById("about-text").textContent = data.about;

  // Projects
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = "";
  data.projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <div class="project-icon">${project.icon}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    projectsGrid.appendChild(card);
  });

  // Contact
  document.getElementById("email-link").textContent = data.contact.email;
  document.getElementById("email-link").href = "mailto:" + data.contact.email;
  document.getElementById("mobile").textContent = data.contact.mobile;
  document.getElementById("facebook-link").href = data.contact.facebook;

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
}

window.onload = loadPortfolio;
