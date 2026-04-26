const header = document.querySelector(".site-header");
const heroVideo = document.querySelector(".hero-video");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (heroVideo) {
  const playHeroVideo = () => {
    heroVideo.play().catch(() => {});
  };

  heroVideo.addEventListener("loadeddata", playHeroVideo, { once: true });
  heroVideo.addEventListener("error", () => {
    document.querySelector(".hero")?.classList.add("video-fallback");
  });
  playHeroVideo();
}
