// task 4

var ball = document.querySelector(".ballmain");

var ease = Circ.easeIn;

var tl = new TimelineMax({ repeat: -1, yoyo: true });
tl.add("start")
  .to(ball, 0.5, {
    y: 0,
    ease: ease,
  })
  .to(
    ball,
    0.1,
    {
      scaleY: 0.6,
      transformOrigin: "center bottom",
      borderBottomLeftRadius: "40%",
      borderBottomRightRadius: "40%",
      ease: ease,
    },
    "-=.05"
  );

// task 5

var rectangleTop = document.querySelector(".rectangleTop");
var rectangleRight = document.querySelector(".rectangleRight");
var rectangleBottom = document.querySelector(".rectangleBottom");
var rectangleLeft = document.querySelector(".rectangleLeft");
var box = document.querySelector(".boxTest");

rectangleTop.addEventListener("click", changeTeam);
rectangleRight.addEventListener("click", changeTeam);
rectangleBottom.addEventListener("click", changeTeam);
rectangleLeft.addEventListener("click", changeTeam);

function changeTeam() {
  var rect = box.getBoundingClientRect();
  var classes = this.classList;
  this.appendChild(box);

  TweenMax.set(box, { x: 0, y: 0 });

  if (classes.contains("rectangleTop")) {
    TweenMax.to(box, 1, { backgroundColor: "#377d22" });
  } else if (classes.contains("rectangleRight")) {
    TweenMax.to(box, 1, { backgroundColor: "#377d22" });
  } else if (classes.contains("rectangleBottom")) {
    TweenMax.to(box, 1, { backgroundColor: "#377d22" });
  } else if (classes.contains("rectangleLeft")) {
    TweenMax.to(box, 1, { backgroundColor: "#377d22" });
  }

  var newRect = box.getBoundingClientRect();

  TweenMax.from(box, 1, {
    x: rect.left - newRect.left,
    y: rect.top - newRect.top,
    ease: Power3.easeOut,
  });
}

// animation

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("danpheAnimate_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("danpheAnimate_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".danpheAnimate").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
});
