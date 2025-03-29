var preloader = document.getElementsByClassName("preloader")[0];
window.onload = function() {
  setTimeout(function() {
    // preloader.style.display = "none";
    preloader.style.opacity = 0;
    preloader.style.transition = "opacity 0.5s ease";
    setTimeout(function() {
      preloader.style.display = "none";
    }, 500);
  }, 2000);
};

// ........................
var header = document.querySelector(".fixed-bar");
let lastScrollY = window.scrollY;
var fade = document.getElementsByClassName("fade");

console.log(fade);

window.addEventListener("scroll", function() {
  if (window.scrollY >= 440) {
    header.classList.add("show");
    header.classList.remove("hide");
    fade[0].style.animation = "fadeInUp 0.7s forwards";
    fade[1].style.animation = "fadeInUp 1.2s forwards";
    fade[2].style.animation = "fadeInUp 1.7s forwards";

    fade[3].style.animation = "fadeInUp 2.1s forwards";
    fade[4].style.animation = "fadeInUp 3.1s forwards";

    fade[5].style.animation = "fadeInUp 3.8s forwards";
    fade[6].style.animation = "fadeInUp 4.5s forwards";
    fade[7].style.animation = "fadeInUp 5s forwards";
  } else {
    header.classList.add("hide");
    header.classList.remove("show");
  }

  if (window.scrollY < 100) {
    header.classList.remove("hide");
    header.classList.add("show");
    header.classList.add("fixed-bar");
  }
});

// ........................
document.addEventListener("DOMContentLoaded", function() {
  let heroSection = document.querySelector(".hero-content");

  function checkVisibility() {
    let rect = heroSection.getBoundingClientRect();
    let windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.75) {
      heroSection.classList.add("p-visible");
    }
  }

  var preloader = document.querySelector(".preloader");

  window.onload = function() {
    setTimeout(function() {
      preloader.style.opacity = 0;
      preloader.style.transition = "opacity 0.5s ease";
      setTimeout(function() {
        preloader.style.display = "none";
        checkVisibility();
      }, 500);
    }, 2000);
  };

  window.addEventListener("scroll", checkVisibility);
});

// ........................
const testimonials = [
  {
    text:
      "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    author: "John Doe",
    role: "Creative designer at Colorlib",
    image: "images/testimonial.png"
  },
  {
    text:
      "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    author: "Sarah Smith",
    role: "Creative designer at Colorlib",
    image: "images/testimonial.png"
  },
  {
    text:
      "Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.",
    author: "Michael Brown",
    role: "Creative designer at Colorlib",
    image: "images/testimonial.png"
  }
];

const wrapper = document.getElementById("carousel-wrapper");

// Generate testimonial slides dynamically
testimonials.forEach(({ text, author, role, image }) => {
  const slide = document.createElement("div");
  slide.classList.add("testimonial-slide");
  slide.innerHTML = `
  
                <p class="testimonial-text">"${text}"</p>

                <div class="test">
                <div class="test-image">
                      <img src=${image} alt="Testimonial">
</div>

                <div class="test-content">
                <p class="testimonial-author">${author}</p>
                <p>${role}</p>
                </div>
                                </div>

            `;
  wrapper.appendChild(slide);
});

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let index = 0;
let startX = 0;
let endX = 0;
let interval;

function moveToNextSlide() {
  index++;
  if (index >= testimonials.length) {
    index = 0;
  }
  updateCarousel();
}

function moveToPrevSlide() {
  index--;
  if (index < 0) {
    index = testimonials.length - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

function startAutoSlide() {
  interval = setInterval(moveToNextSlide, 4000);
}

function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

startAutoSlide();

prevBtn.addEventListener("click", () => {
  moveToPrevSlide();
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  moveToNextSlide();
  resetAutoSlide();
});

// Swipe support
// const container = document.querySelector(".carousel-container");

// container.addEventListener("touchstart", e => {
//   startX = e.touches[0].clientX;
// });

// container.addEventListener("touchend", e => {
//   endX = e.changedTouches[0].clientX;
//   handleSwipe();
// });

// function handleSwipe() {
//   const diff = startX - endX;
//   if (diff > 50) {
//     moveToNextSlide();
//   } else if (diff < -50) {
//     moveToPrevSlide();
//   }
//   resetAutoSlide();
// }
