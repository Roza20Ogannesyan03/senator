document.addEventListener("DOMContentLoaded", function () {
  // Custom JS
});

const widthScrollBar = () => {
  let div = document.createElement("div");
  div.style.overflowY = "scroll";
  div.style.width = "50px";
  div.style.height = "50px";
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || "block";
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.display = "none";
  }, timeout);
};

const wrapTagInDiv = (el, wrapClass = "wrapclass") => {
  let div = document.createElement("div");
  div.classList.add(wrapClass);
  el.parentNode.insertBefore(div, el);
  div.appendChild(el);
};

const wrapVideoInContent = () => {
  let contents = document.querySelectorAll(".content");
  if (!contents) return false;
  contents.forEach((el) => {
    let videos = el.querySelectorAll("iframe, video");
    videos.forEach((video) => {
      wrapTagInDiv(video, "video");
    });
    let tables = el.querySelectorAll("table");
    tables.forEach((table) => {
      wrapTagInDiv(table, "table-adaptive");
    });
  });
};
document.addEventListener("DOMContentLoaded", wrapVideoInContent);

const swiper = new Swiper("#slider", {
  navigation: {
    nextEl: ".slider__swiper-button-next",
    prevEl: ".slider__swiper-button-prev",
  },
  pagination: {
    el: ".slider__pagination",
    type: "bullets",
    clickable: true,
  },
  slidesPerView: "auto",
});

const popup = document.querySelector("#popup");
const menu = document.querySelector(".menu");
const body = document.body;
const burger = document.querySelector(".burger");
burger.addEventListener("click", hambHandler);

function hambHandler(e) {
  popup.classList.toggle("open");
  burger.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// let feedback = document.querySelectorAll(".modal-button");
// let close = document.querySelector(".close");
// let modal = document.querySelector(".modal");

// feedback.forEach((elem) => {
//   elem.addEventListener("click", function () {
//     modal.style.display = "block";
//     body.classList.add("noscroll");
//   });
// });

// close.addEventListener("click", closeModal);

// modal.addEventListener("click", (e) => {
//   if (e.target.classList.contains("modal")) closeModal();
// });

// function closeModal() {
//   modal.style.display = "none";
//   body.classList.remove("noscroll");
// }

var thumbs = new Swiper(document.getElementById("swiper2"), {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 12,
  centeredSlides: false,
  slideToClickedSlide: true,
  initialSlide: 3,
  breakpoints: {
    // when window width is >= 320px
    768: {
      direction: "vertical",
    },
  },
});

var slider = new Swiper(document.getElementById("swiper1"), {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  thumbs: {
    swiper: thumbs,
  },

  slideToClickedSlide: true,
  navigation: {
    nextEl: ".images__swiper-button-next",
    prevEl: ".images__swiper-button-prev",
  },
});

let tabs = document.querySelectorAll(".tabs__tab");
if (tabs) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      document.querySelector(".tabs__tab.active").classList.remove("active");
      document
        .querySelector(".tabs__content.active")
        .classList.remove("active");
      let targ = e.target;
      targ.classList.add("active");
      document
        .querySelector(`.tabs__content[data-tab-content="${targ.dataset.tab}"]`)
        .classList.add("active");
    });
  });
}
