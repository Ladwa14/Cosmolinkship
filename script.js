document.addEventListener("DOMContentLoaded", function () {

  /* ================= HAMBURGER MENU ================= */
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      navToggle.classList.toggle("open");

      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !expanded);
    });
  }

  /* ================= CAREERS FORM ================= */
  const careersForm = document.querySelector(".careers-form");
  const resume = document.getElementById("resume");

  if (resume) {
    resume.addEventListener("change", () => {
      const file = resume.files[0];
      if (!file) return;

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF, DOC, or DOCX file.");
        resume.value = "";
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File is too large. Maximum size is 5MB.");
        resume.value = "";
      }
    });
  }

  if (careersForm) {
    careersForm.addEventListener("submit", (e) => {
      if (!careersForm.checkValidity()) {
        e.preventDefault();
        careersForm.reportValidity();
      }
    });
  }

  /* ================= CONTACT FORM ================= */
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      if (!contactForm.checkValidity()) {
        e.preventDefault();
        contactForm.reportValidity();
      }
    });

    // Trim inputs on blur
    contactForm
      .querySelectorAll('input[type="text"], input[type="email"], textarea')
      .forEach((el) => {
        el.addEventListener("blur", () => {
          el.value = el.value.trim();
        });
      });
  }

  /* ================= CONTACT POPUP ================= */
  const popup = document.getElementById("contactPopup");
  const closeBtn = document.querySelector(".popup-close");

  if (popup && closeBtn) {
    // Open popup after page load
    window.addEventListener("load", () => {
      setTimeout(() => {
        popup.style.display = "flex";
      }, 800);
    });

    // Close button
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

    // Click outside popup
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });

    // ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        popup.style.display = "none";
      }
    });
  }

});
