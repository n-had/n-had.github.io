console.log("hello");

function detectAndSetSystemTheme() {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const updateTheme = (event) => {
    if (event.matches) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };
  // initial check
  updateTheme(darkModeMediaQuery);

  // listen for changes
  darkModeMediaQuery.addEventListener("change", updateTheme);
}

detectAndSetSystemTheme();

const copyEmailButton = document.getElementById("btn-copy-email");
copyEmailButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText("nihad.mail@proton.me")
    .then(() => {
      console.log("Copied.");
    })
    .catch((err) => {
      console.log("Failed to copy: ", err);
    })
    .catch();
});

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const blob = document.querySelector(".blob");
window.addEventListener("pointermove", (e) => {
  const { clientX, clientY } = e;
  console.log(clientX, clientY);
  blob.animate(
    { left: `${clientX}px`, top: `${clientY}px` },
    { duration: 3000, fill: "forwards" }
  );
});
