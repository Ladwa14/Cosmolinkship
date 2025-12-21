// Simple client-side checks & file size limit (5MB)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".careers-form");
  const resume = document.getElementById("resume");

  if (resume) {
    resume.addEventListener("change", () => {
      const f = resume.files[0];
      if (!f) return;

      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowed.includes(f.type)) {
        alert("Please upload a PDF, DOC, or DOCX file.");
        resume.value = "";
        return;
      }

      if (f.size > 5 * 1024 * 1024) {
        alert("File is too large. Max 5MB.");
        resume.value = "";
      }
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
      }
    });
  }
});



// Basic client-side validation + small UX niceties
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
    }
  });

  // Trim on blur for tidy inputs
  form.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach((el) => {
    el.addEventListener("blur", () => (el.value = el.value.trim()));
  });
});







const popup = document.getElementById('contactPopup');
const closeBtn = document.querySelector('.popup-close');

// Open popup on page load
window.addEventListener('load', () => {
  setTimeout(() => {
    popup.style.display = 'flex';
  }, 800);
});

// Close on button
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close on outside click
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popup.style.display = 'none';
  }
});
