barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async;
        pageTransition();
        await delay(1000);
        done();
      },
      async enter(data) {
        animateContent();
        secondAnimated();
      },
      async once(data) {
        const done = this.async;
        pageTransition();
        await delay(1000);
        done();
        animateContent();
        secondAnimated();
      },
    },
  ],
});

function pageTransition() {
  var tl = gsap.timeline();

  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  });

  tl.set(".loading-screen", { left: "-100%" });
}

function animateContent() {
  var tl = gsap.timeline();
  tl.from(".animated", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.4,
    delay: 0.5,
  });
}

function secondAnimated() {
  var tl = gsap.timeline();
  tl.from(".second-animated", {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.4,
    delay: 0.75,
  });
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}
