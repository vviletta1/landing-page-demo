document.getElementById("demoForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Simulate form submission
    document.getElementById("successMessage").classList.remove("hidden");
  
    // Optionally clear the form
    this.reset();
  });