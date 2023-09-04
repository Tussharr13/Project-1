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

function circleChaptaKaro() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev=0 ;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  })
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  
circleMouseFollower();