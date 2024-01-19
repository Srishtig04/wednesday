var tl = gsap.timeline();

tl.from("#nav h1, #nav2 h4, #nav3 i, #nav3 h5", {
  y: -40,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
})
  .from("#center>h1", {
    opacity: 0,
    y: 50,
    scale: 1.2,
    duration: 0.6,
  })
  .from("#center>p", {
    opacity: 0,
    y: 50,
    duration: 0.3,
  })
  .from("#page1>img", {
    opacity: 0,
    scale: 0.8,
    duration: 0.7,
  });

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
});
tl2.from("#page2 h1", {
  y: 30,
  opacity: 0,
});
tl2.from("#page2 p", {
  y: 30,
  opacity: 0,
});

gsap.from(".elem", {
  opacity: 0,
  y: 100,
  scale: 0.7,
  scrollTrigger: {
    trigger: ".elem",
    scroller: "body",
    // markers: true,
    start: "top 80%",
  },
});
