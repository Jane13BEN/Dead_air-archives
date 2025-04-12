document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("dropdownBtn");
    const menu = document.getElementById("dropdownContent");
  
    btn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  
    // Optional: Close menu if clicked outside
    window.addEventListener("click", (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  });
  
