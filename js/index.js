//Menu mobile
const menuBtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closebtn");

if (menu && menuBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

if (menu && closeBtn) {
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

// Helpers
function resetOverlayUI(overlay) {
  if (!overlay) return;
  const cdRotate = overlay.querySelector(".cd-rotate");
  const cdImage = cdRotate ? cdRotate.querySelector("img") : null;
  const previewBtn = overlay.querySelector(".preview-btn");
  const icon = previewBtn ? previewBtn.querySelector(".preview-icon") : null;
  const audio = overlay.querySelector("audio");

  if (cdRotate) {
    cdRotate.classList.remove("playing");
    cdRotate.classList.remove("shifted");
    cdRotate.style.transform = "";
  }
  if (cdImage) {
    const pausedSrc = cdImage.getAttribute("data-src-paused");
    if (pausedSrc) cdImage.src = pausedSrc;
  }
  if (icon) {
    const url = icon.getAttribute("src") || "";
    const newUrl = url.replace(/[^/]+$/, "play-music2.svg");
    icon.src = newUrl;
  }
  if (audio) {
    try { audio.pause(); audio.currentTime = 0; } catch (e) { /* ignore */ }
  }
}

// Heart button: toggle active class on click
document.addEventListener("click", (event) => {
  const heartBtn = event.target.closest(".heart-btn");
  if (heartBtn) {
    // Toggle active class - click to activate, click again to deactivate
    heartBtn.classList.toggle("active");
  }
});

// Product preview: toggle play/pause, swap image, rotate CD
document.addEventListener("click", (event) => {
  const previewBtn = event.target.closest(".preview-btn");
  if (!previewBtn) return;

  const overlay = previewBtn.closest(".card-overlay");
  if (!overlay) return;

  const audio = overlay.querySelector("audio");
  const cdRotate = overlay.querySelector(".cd-rotate");
  const cdImage = cdRotate ? cdRotate.querySelector("img") : null;

  const isPlaying = cdRotate?.classList.contains("playing");

  if (!isPlaying) {
    // Stop any other playing cards first
    document.querySelectorAll(".card-overlay").forEach((ov) => {
      if (ov !== overlay) resetOverlayUI(ov);
    });

    // Start playing
    if (cdRotate) cdRotate.classList.add("playing");
    if (cdRotate && window.innerWidth <= 1199) {
      cdRotate.classList.add("shifted");
    }
    if (audio) {
      try { audio.play(); } catch (e) { /* ignore */ }
    }
    if (cdImage) {
      const playingSrc = cdImage.getAttribute("data-src-playing");
      if (playingSrc) cdImage.src = playingSrc;
    }
    const icon = previewBtn.querySelector(".preview-icon");
    if (icon) {
      const url = icon.getAttribute("src") || "";
      const newUrl = url.replace(/[^/]+$/, "stop-music.svg");
      icon.src = newUrl;
    }
  } else {
    // Stop playing
    resetOverlayUI(overlay);
  }
});

// Close #search-dropdown when clicking outside
document.addEventListener("DOMContentLoaded", () => {
  const searchDropdown = document.getElementById("search-dropdown");
  const searchToggle = document.querySelector('[data-target="#search-dropdown"]');

  if (!searchDropdown || !searchToggle) return;

  document.addEventListener("click", (event) => {
    const isOpen = searchDropdown.classList.contains("show");
    if (!isOpen) return;

    const clickedInsideDropdown = searchDropdown.contains(event.target);
    const clickedToggle = searchToggle.contains(event.target);

    if (!clickedInsideDropdown && !clickedToggle) {
      if (typeof window.jQuery === "function" && typeof window.jQuery(searchDropdown).collapse === "function") {
        window.jQuery(searchDropdown).collapse("hide");
      } else {
        searchDropdown.classList.remove("show");
        searchDropdown.style.height = "";
      }
    }
  });
});

// Reset UI when preview audio ends
document.addEventListener("DOMContentLoaded", () => {
  const audios = document.querySelectorAll(".card-overlay audio");
  audios.forEach((audio) => {
    audio.addEventListener("ended", () => {
      const overlay = audio.closest(".card-overlay");
      if (!overlay) return;

      const cdRotate = overlay.querySelector(".cd-rotate");
      const cdImage = cdRotate ? cdRotate.querySelector("img") : null;
      const previewBtn = overlay.querySelector(".preview-btn");
      const icon = previewBtn ? previewBtn.querySelector(".preview-icon") : null;

      if (cdRotate) {
        cdRotate.classList.remove("playing");
        cdRotate.classList.remove("shifted");
        cdRotate.style.transform = "";
      }
      if (cdImage) {
        const pausedSrc = cdImage.getAttribute("data-src-paused");
        if (pausedSrc) cdImage.src = pausedSrc;
      }
      if (icon) {
        const url = icon.getAttribute("src") || "";
        const newUrl = url.replace(/[^/]+$/, "play-music2.svg");
        icon.src = newUrl;
      }
      try { audio.currentTime = 0; } catch (e) { /* ignore */ }
    });
  });

  // Animate #home-no1rating when it enters viewport (center of screen) - ONCE ONLY
  // Wait for page to load first
  const homeRating = document.querySelector("#home-no1rating");
  if (homeRating) {
    const setupRatingObserver = () => {
      // Check if page is loaded (loader finished)
      if (document.body.classList.contains("page-loaded")) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // Trigger animation only once when element enters viewport
              if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                // Stop observing after animation triggers once - keeps animation state
                observer.unobserve(entry.target);
              }
            });
          },
          {
            // Trigger when element is 50% visible (center of screen)
            threshold: 0.5,
            // Optional: add rootMargin to fine-tune trigger point
            rootMargin: "0px"
          }
        );

        observer.observe(homeRating);
      } else {
        // Retry after a short delay if page not loaded yet
        setTimeout(setupRatingObserver, 100);
      }
    };

    setupRatingObserver();
  }

  // Infinite scroll for #disk-infinite - Wait for page to load
  const diskInfinite = document.querySelector("#disk-infinite");
  if (diskInfinite) {
    const startDiskAnimation = () => {
      // Check if page is loaded (loader finished)
      if (document.body.classList.contains("page-loaded")) {
        let scrollPosition = 0;
        let animationId = null;
        let lastTime = null;
        const scrollSpeed = 50; // pixels per second
        let firstHalfWidth = 0;

        // Calculate half width after images are loaded
        function calculateHalfWidth() {
          // Wait for images to load
          const images = diskInfinite.querySelectorAll("img");
          let loadedCount = 0;
          const totalImages = images.length;

          if (totalImages === 0) {
            // Fallback: calculate from scrollWidth
            firstHalfWidth = diskInfinite.scrollWidth / 2;
            return;
          }

          images.forEach((img) => {
            if (img.complete) {
              loadedCount++;
            } else {
              img.addEventListener("load", () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                  firstHalfWidth = diskInfinite.scrollWidth / 2;
                }
              });
            }
          });

          // If all images are already loaded
          if (loadedCount === totalImages) {
            firstHalfWidth = diskInfinite.scrollWidth / 2;
          } else {
            // Fallback calculation
            firstHalfWidth = diskInfinite.scrollWidth / 2;
          }
        }

        function animate(currentTime) {
          if (!lastTime) lastTime = currentTime;

          const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
          lastTime = currentTime;

          // Update scroll position
          scrollPosition += scrollSpeed * deltaTime;

          // Reset position when we've scrolled half the width (seamless loop)
          if (firstHalfWidth > 0 && scrollPosition >= firstHalfWidth) {
            scrollPosition = 0;
          }

          // Apply transform
          diskInfinite.style.transform = `translate3d(-${scrollPosition}px, 0, 0)`;

          animationId = requestAnimationFrame(animate);
        }

        // Calculate width and start animation
        calculateHalfWidth();
        
        // Recalculate on window resize
        window.addEventListener("resize", () => {
          calculateHalfWidth();
        });

        // Start animation
        animationId = requestAnimationFrame(animate);

        // Cleanup on page unload
        window.addEventListener("beforeunload", () => {
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
        });
      } else {
        // Retry after a short delay if page not loaded yet
        setTimeout(startDiskAnimation, 100);
      }
    };

    // Start checking for page load
    startDiskAnimation();
  }
});


//LOADER - Play video and fade out when video ends
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const loaderVideo = document.getElementById("loader-video");

  if (loader && loaderVideo) {
    // Remove loop attribute so video plays once
    loaderVideo.removeAttribute("loop");
    
    // Ensure video is muted and autoplay
    loaderVideo.muted = true;
    loaderVideo.autoplay = true;

    // Play video
    loaderVideo.play().catch((error) => {
      // If autoplay fails, try to play on user interaction
      console.log("Autoplay prevented, waiting for user interaction");
    });

    // Listen for video end event
    loaderVideo.addEventListener("ended", () => {
      // Fade out loader
      loader.style.transition = "opacity 0.5s ease-out";
      loader.style.opacity = "0";
      
      // Add class to body to enable animations
      document.body.classList.add("page-loaded");
      
      // Remove loader from DOM after fade out
      setTimeout(() => {
        loader.style.display = "none";
      }, 500); // Match transition duration
    });

    // Fallback: if video fails to load or play, hide loader after timeout
    setTimeout(() => {
      if (loader.style.display !== "none") {
        loader.style.transition = "opacity 0.5s ease-out";
        loader.style.opacity = "0";
        document.body.classList.add("page-loaded");
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }
    }, 10000); // 10 seconds max wait time
  } else {
    // If no loader, enable animations immediately
    document.body.classList.add("page-loaded");
  }
});
