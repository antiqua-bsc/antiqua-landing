const phases = document.querySelectorAll(".phases");

var openedPhase = null;

Array.from(phases).forEach((phase) => {
  phase.addEventListener("click", (e) => {
    const phaseContent = e.target.querySelector(".content");
    phaseContent.classList.toggle("hidden");
    if (openedPhase !== null && openedPhase !== e.target) {
      const openedPhaseContent = openedPhase.querySelector(".content");
      openedPhaseContent.classList.add("hidden");
    }
    openedPhase = e.target;
  });
});

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
setInterval(() => {
  var countdowns = countdown(new Date(2021, 10, 25, 19));
  days.innerHTML = `${countdowns.days} days`;
  hours.innerHTML = `${countdowns.hours} hours`;
  minutes.innerHTML = `${countdowns.minutes} minutes`;
  if (countdowns.seconds !== 0) {
    seconds.innerHTML = `and ${countdowns.seconds} seconds`;
  }
}, 1000);

const indigenousDetails = document.querySelector("#indigenousDetails");
const indigenous = document.querySelector("#indigenous");
const closeIndigenousCollection = document.querySelector(
  "#closeIndigenousCollection"
);

closeIndigenousCollection.addEventListener("click", () => {
  indigenousDetails.classList.add("hidden");
});

indigenous.addEventListener("click", () => {
  indigenousDetails.classList.remove("hidden");
  new Glider(document.querySelector(".glider"), {
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
    ],
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: ".arrow-prev",
      next: ".arrow-next",
    },
  });
});

const mayanDetails = document.querySelector("#mayanDetails");
const mayan = document.querySelector("#mayan");
const closeMayanCollection = document.querySelector("#closeMayanCollection");

closeMayanCollection.addEventListener("click", () => {
  mayanDetails.classList.add("hidden");
});

mayan.addEventListener("click", () => {
  mayanDetails.classList.remove("hidden");
  new Glider(document.querySelector(".mayanSlider"), {
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
    ],
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: ".arrow-prev",
      next: ".arrow-next",
    },
  });
});

const pharoDetails = document.querySelector("#pharoDetails");
const pharo = document.querySelector("#pharo");
const closePharoCollection = document.querySelector("#closePharoCollection");

closePharoCollection.addEventListener("click", () => {
  pharoDetails.classList.add("hidden");
});

pharo.addEventListener("click", () => {
  pharoDetails.classList.remove("hidden");
  new Glider(document.querySelector(".pharoSlider"), {
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
        },
      },
    ],
    slidesToScroll: 1,
    draggable: true,
    arrows: {
      prev: ".arrow-prev",
      next: ".arrow-next",
    },
  });
});

const closeNav = document.querySelector("#closeNav");
const openNav = document.querySelector("#openNav");
const mobileNav = document.querySelector("#mobileNav");
const mobileNavLinks = document.querySelectorAll(".mobileNavLinks");

Array.from(mobileNavLinks).forEach((navLink) => {
  navLink.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
  });
});

closeNav.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});

openNav.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
});
