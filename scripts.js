// Project Data
const projects = [
    {
      title: "Amazon clone",
      description:
        "A amazon which look same as amazon.",
      tags: ["html", "css"],
      github: "#",
      live: "#",
    },
    {
      title: "Hospital Management App",
      description:
        "hospital management application with real-time updates,stores patient detail, and records.",
      tags: ["html", "css", "js"],
      github: "#",
      live: "#",
    },

  ];
  
  // Populate Projects
  document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-container");
  
    projects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.className = "project-card";
  
      projectElement.innerHTML = `
                          <div class="project-content">
                              <h3 class="project-title">${project.title}</h3>
                              <p class="project-description">${
                                project.description
                              }</p>
                              <div class="project-tags">
                                  ${project.tags
                                    .map(
                                      (tag) => `<span class="tag">${tag}</span>`
                                    )
                                    .join("")}
                              </div>
                              <div class="project-links">
                                  <a href="${
                                    project.github
                                  }" target="_blank" title="View Source Code">
                                      <i class="fab fa-github"></i>
                                  </a>
                                  <a href="${
                                    project.live
                                  }" target="_blank" title="View Live Demo">
                                      <i class="fas fa-external-link-alt"></i>
                                  </a>
                              </div>
                          </div>
                      `;
  
      projectsContainer.appendChild(projectElement);
    });
  
    // Remove loader after content is loaded
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  });
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
  
  // Scroll to sections with smooth animation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Add scroll animation to reveal elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });
  
  document.querySelectorAll(".skill-card, .project-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });
