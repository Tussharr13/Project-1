const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

function firstPageAnim() {
    var tl = gsap.timline();

    tl.from("#nav", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    .to("boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duraton: 2,
        delay: -1,
        stagger: 0.2,
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration:1.5,
        delay: -1,
        ease: Expo.easeInOut,
    });
}