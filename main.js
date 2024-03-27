const btn = document.querySelector(".nav-btn");
const nav = document.querySelector("nav");
// Toogle Button
btn.addEventListener("click", () => {
  nav.classList.toggle("toggle");
});
// Videos
document.addEventListener("DOMContentLoaded", function () {
  let userInteracted = false;

  document.body.addEventListener(
    "click",
    () => {
      userInteracted = true;
    },
    { once: true }
  );

  const videos = document.querySelectorAll("video");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (userInteracted) {
          entry.target
            .play()
            .catch(error => console.error("Video play error:", error));
        }
        entry.target.addEventListener("ended", () => {
          entry.target.currentTime = 0;
          if (userInteracted) {
            entry.target
              .play()
              .catch(error => console.error("Video play error:", error));
          }
        });
      } else {
        entry.target.pause();
      }
    });
  });

  videos.forEach(video => {
    observer.observe(video);
  });
});
