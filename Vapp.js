var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0"; // Open menu
}

function closemenu() {
  sidemenu.style.right = "-100%"; // Close menu
}

// Close the menu when a link is clicked
var menuLinks = sidemenu.getElementsByTagName('a');

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function() {
    closemenu(); // Close the menu when a link is clicked
  });
}

window.onresize = function() {
  if (window.innerWidth > 768) { // Adjust based on your breakpoint for desktop
      closemenu(); // Close the menu if window size is larger than 768px
  }
};



var slideIndex = 0;
showSlides();
function showSlides() {
var i;
 var slides = document.getElementsByClassName("mySlides");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
 slideIndex++;
if (slideIndex > slides.length) { slideIndex = 1 }
slides[slideIndex - 1].style.display = "block";
setTimeout(showSlides, 2000); // Change image every 2 seconds
}



let calScrollValue = () => {
  let scrollProgress = document.getElementsByClassName("progress")[0];
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop || document.body.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#ff004f ${scrollValue}%, #2c2c2c ${scrollValue}%)`;
};

window.addEventListener("scroll", calScrollValue);
window.addEventListener("resize", calScrollValue); // Recalculate on resize

//Contact form functionality----------------------------------------------------------------------------------------------------
const scriptURL =
        "https://script.google.com/macros/s/AKfycbwD11D7WsF4Hq2IlJsVPB-uww4tVRBFYJ--4rCTJSXtQb7bDfOzlQC5N6nMbUUH_aT1/exec";
      const form = document.forms["submit-to-google-sheet"];
      const msg = document.getElementById("msg");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            if (confirm("Message sent successfully! We'll reach you out soon!.")) {
              // If user clicks "OK", form is cleared
              form.reset();
            } else {
              // If user clicks "Cancel", no action is taken
              console.log("User canceled further actions.");
            }
            // setTimeout(function () {
            //   msg.innerHTML = "";
            // },1000);
            // form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });

      document.getElementById('surpriseButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action (if any)
        window.open('Surprise.html', '_blank'); // Open the new page in a new tab
    });
    