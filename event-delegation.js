document.getElementById("category").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    window.location.href = "/" + e.target.id;
  }
});

document.getElementById("text").addEventListener("keyup", (e) => {
  e.target.value = e.target.value.toUpperCase();
});

