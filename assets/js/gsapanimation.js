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
