document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document
      .getElementById("username")
      .value.trim()
      .toLowerCase();
    const errorMessage = document.getElementById("error-message");

    // Daftar username yang diperbolehkan
    const validUsername = "SALSABILA SYANDANA ANANTA".toLowerCase();

    if (username === validUsername) {
      // Redirect to landing page
      window.location.href = "flwr.html";
    } else {
      errorMessage.textContent = "bukan salsa...";
    }
  });
