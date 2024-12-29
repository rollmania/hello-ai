document.querySelectorAll(".module-header").forEach((header) => {
    header.addEventListener("click", () => {
      const module = header.parentElement;
      module.classList.toggle("open"); // Add or remove the "open" class
    });
  });
  