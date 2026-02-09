// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu when clicking any link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// To Top
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 450) toTop.classList.add("show");
  else toTop.classList.remove("show");
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => revealObserver.observe(el));

// Form -> WhatsApp
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const phoneNumber = "917734920728";

  const text =
    `Hello King Kingdom,%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Message: ${message}%0A%0A` +
    `(From Website)`;

  window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
});