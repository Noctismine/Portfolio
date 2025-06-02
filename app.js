const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  const imageContainer = document.querySelector(".image-container");
  const intro = document.querySelector(".intro");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => observer.observe(card));
  if (imageContainer) observer.observe(imageContainer);
  if (intro) observer.observe(intro);
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  const title = document.querySelector(".section-title");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => observer.observe(card));
  if (title) observer.observe(title);
});

document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card, index) => {
    if (index < 6) {
      card.classList.add("left");
    } else {
      card.classList.add("right");
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  skillCards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".project-card, .skills-heading");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".project-card, .skills-heading, #contact .section-title, #contact .contact-info"
  );

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
});

function flipCard() {
  document.querySelector(".contact-container").classList.toggle("flipped");
}
function flipCard() {
  document.querySelector(".contact-container").classList.toggle("flipped");
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".contact-container").classList.add("visible");
});

let rame = document.getElementById("titlee");

rame.innerText = "<my-portfolio></my-portfolio>";
