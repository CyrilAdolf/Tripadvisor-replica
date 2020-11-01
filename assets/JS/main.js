const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  const modal = $.querySelector(".modal");
  const body = $.querySelector("body");
  console.log("chargée");

  $.querySelector(".connect").addEventListener("click", () => {
    // Display modal
    console.log("clic");
    modal.classList.remove("hidden");
    // Disable scroll
    body.classList.add("disable");
  });
});
