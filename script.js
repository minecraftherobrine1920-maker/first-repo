/* script.js — theme toggle, mobile menu, simple tilt on cards, contact form demo */

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.getElementById("toggle-mode");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  // restore theme
  if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark");
    if (toggle) toggle.textContent = "☀️";
  } else {
    if (toggle) toggle.textContent = "🌙";
  }

  // toggle click (if present)
  if (toggle) {
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      const darkOn = body.classList.contains("dark");
      localStorage.setItem("mode", darkOn ? "dark" : "light");
      toggle.textContent = darkOn ? "☀️" : "🌙";
    });
  }

  // hamburger menu (mobile)
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
    });

    // close when clicking a link
    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("open");
      });
    });
  }

  // simple 3D tilt effect for elements with [data-tilt]
  const tiltEls = document.querySelectorAll("[data-tilt]");
  tiltEls.forEach(el => {
    el.style.transformStyle = "preserve-3d";
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width/2;
      const cy = rect.height/2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      const tiltX = (dy * 6) * -1;
      const tiltY = (dx * 6);
      el.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(6px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });

  // contact form demo behaviour (no real POST)
  const form = document.getElementById("contact-form");
  if (form) {
    const send = document.getElementById("send");
    const clear = document.getElementById("clear");
    send.addEventListener("click", () => {
      send.textContent = "Sent ✓";
      setTimeout(()=> send.textContent = "Send Message", 1500);
    });
    if (clear) clear.addEventListener("click", () => {
      form.reset();
    });
  }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
 
