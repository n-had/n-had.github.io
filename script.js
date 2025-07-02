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
const blobSize = 200;
window.addEventListener("pointermove", (e) => {
  const { clientX, clientY } = e;
  // console.log(clientX, clientY);

  // calculate the maximum X and Y positions to prevent overflow
  const maxX = window.innerWidth - blobSize;
  const maxY = window.innerHeight - blobSize;

  // constrain the blob's position
  const constrainedX = Math.min(Math.max(clientX, 0), maxX);
  const constrainedY = Math.min(Math.max(clientY, 0), maxY);

  blob.animate(
    { left: `${constrainedX}px`, top: `${constrainedY}px` },
    { duration: 3000, fill: "forwards" }
  );
});
