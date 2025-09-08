// Switch toggles effect
document.querySelectorAll(".switch input").forEach((toggle) => {
  toggle.addEventListener("change", function () {
    if (this.checked) {
      alert("Switched ON");
    } else {
      alert("Switched OFF");
    }
  });
});

// Search bar alert
const searchInput = document.querySelector(".search-bar input");
const searchIcon = document.querySelector(".search-bar .icons span:first-child");

searchIcon.addEventListener("click", () => {
  if (searchInput.value.trim() !== "") {
    alert("Searching for: " + searchInput.value);
  } else {
    alert("Please type something...");
  }
});
