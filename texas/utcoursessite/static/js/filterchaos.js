const chaosbutton = document.getElementById("filterchaosbutton");
const body = document.body;

chaosbutton.addEventListener("click", () => {
  // Prevent re-trigger while animation is running
  if (body.classList.contains("chaos-active")) return;

  body.classList.add("chaos-active");

  // Remove the class after 20 seconds to reset
  setTimeout(() => {
    body.classList.remove("chaos-active");
  }, 20000);
});
