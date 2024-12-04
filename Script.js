// Get all sections and links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSection = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  });
});

// Function to update the progress bar
window.onscroll = function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

// Dark - Light mode switch
var ITI_Logo_path = ["Images/ITI-Logo-Dark.png", "Images/ITI-Logo.svg"];
function darkModeSwitch() {
  var darkSwitch = document.getElementById("mainBody");
  darkSwitch.classList.toggle("darkLightSwitch");
  var ITI_Logo = document.getElementById("ITI-Logo");
  if (ITI_Logo.getAttribute("src") == ITI_Logo_path[0]) {
    ITI_Logo.setAttribute("src", ITI_Logo_path[1]);
  } else {
    ITI_Logo.setAttribute("src", ITI_Logo_path[0]);
  }
}
