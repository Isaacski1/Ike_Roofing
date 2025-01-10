var owl = $(".hero-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  animateIn: "animate__pulse",
  // animateOut: "animate__flipOutX",
  autoplay: true,
  autoplayTimeout: 8000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [8000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// =========== Section One Owl Carousel ==============
// Initialize the carousel
var owl = $(".section-one-carousel");
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 40,
  autoplay: true,
  dots: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    700: {
      items: 2,
      nav: true,
    },
    1300: {
      items: 3,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// =========== Section Three Owl Carousel ==============

var owl = $(".section-three-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 20,
  autoplay: true,
  dots: true,
  nav: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Section Five Carousel
var owl = $(".section-five-carousel");
owl.owlCarousel({
  items: 3,
  loop: true,
  margin: 20,
  autoplay: true,
  dots: true,
  nav: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    1024: {
      items: 2,
      nav: true,
    },
    1300: {
      items: 3,
      nav: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Customer Says Carousel
var owl = $(".customer-says-carousel");
owl.owlCarousel({
  items: 2,
  loop: true,
  margin: 20,
  autoplay: true,
  dots: true,
  nav: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    1024: {
      items: 2,
      nav: true,
    },
    1300: {
      items: 2,
      dots: true,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// Validation Mesages Start
const name_error = document.getElementById("name-error");
const email_error = document.getElementById("email-error");
const phone_error = document.getElementById("phone-error");
const message_error = document.getElementById("message-error");
const submit_error = document.getElementById("submit-error");

// Name Validation
function validateName() {
  const name = document.getElementById("contact-name").value;
  // Conditional Statement
  if (name.length == 0) {
    name_error.innerHTML = "Enter your full name 😊";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    name_error.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }
  name_error.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Email Validation
function validateEmail() {
  const email = document.getElementById("contact-email").value;
  // Conditional Statement
  if (email.length == 0) {
    email_error.innerHTML = "Type your email 😊";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)) {
    email_error.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }
  email_error.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Validate Phone Number
function validatePhone() {
  const phone = document.getElementById("contact-phone").value;
  // Conditional Statement
  if (phone.length == 0) {
    phone_error.innerHTML = "Type your phone 😊";
    return false;
  }

  if (phone.length !== 10) {
    phone_error.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }

  if (!phone.match(/^[0-9]*[10]*$/)) {
    phone_error.innerHTML = "Only digit required";
    return false;
  }
  phone_error.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Validation Message error
function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const required = 30;
  const remaining = required - message.length;

  // Conditional Statements
  if (message.length == 0) {
    message_error.innerHTML = "Enter your message 😊";
    return false;
  }

  if (remaining > 0) {
    message_error.innerHTML = remaining + " more characters require";
    return false;
  }

  message_error.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Submit Validation
function validateSubmit() {
  // Conditional Statement
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submit_error.style.display = "block";
    submit_error.innerHTML = "Please fix all errors";
    setTimeout(function () {
      submit_error.style.display = "none";
    }, 3000);
    return false;
  }
}

// To Top
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// ============== Website Scrolling Animation //
const sections = document.querySelectorAll("section");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 500;
    let height = sec.offsetHeight;
    // Conditional Statement
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    }
  });
};

// Background Pre-Loader
setTimeout(function () {
  $(".backgroud-preloader").fadeToggle();
}, 2500);

// Whatsapp Chat TimeOut
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const whatsappChat = document.querySelector(".whatsapp-chat");
    if (whatsappChat) {
      whatsappChat.style.display = "block";
    }
  }, 10000);
});
