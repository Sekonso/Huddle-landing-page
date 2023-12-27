// JavaScript to dynamically change the href based on screen size
const squiggly = document.querySelectorAll(".squiggly");

function updateImageLink() {
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  // Check if the screen width is above a certain breakpoint
  if (screenWidth >= 600) {
    // Update the src for desktop mode
    squiggly[0].src = "./images/bg-section-top-desktop-1.svg";
    squiggly[1].src = "./images/bg-section-bottom-desktop-1.svg";
    squiggly[2].src = "./images/bg-section-top-desktop-2.svg";
    squiggly[3].src = "./images/bg-section-bottom-desktop-2.svg";
    squiggly[4].src = "./images/bg-footer-top-desktop.svg";
  } else {
    // Update the src for mobile mode
    squiggly[0].src = "./images/bg-section-top-mobile-1.svg";
    squiggly[1].src = "./images/bg-section-bottom-mobile-1.svg";
    squiggly[2].src = "./images/bg-section-top-mobile-2.svg";
    squiggly[3].src = "./images/bg-section-bottom-mobile-2.svg";
    squiggly[4].src = "./images/bg-footer-top-mobile.svg";
  }
}

// Call the function on page load and window resize
window.addEventListener("load", updateImageLink);
window.addEventListener("resize", updateImageLink);
