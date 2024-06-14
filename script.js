$(document).ready(function () {
  var $scramble = $(".scramble");
  $scramble.scramble(2000, 32, "alphabet", true);
  //this is all about jquery
});
//..................................scrambleEND.......................................
var tl = gsap.timeline();
tl.to(".loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    opacity: 0,
    duration: 1,
    ease: "Expo.eseInOut",
  })
  .to(".loader", {
    y: "-100%",
    duration: 1,
  },
    "up"
  )
  .to(
    ".pgto", {
    opacity: 1,
    delay: -1.7,
    ease: "Expo.easeInOut",
  },
    "donut"
  )
  .to(
    "#dotted",
    {
      opacity: 1,
      delay: -1.8,
      ease: "Expo.easeInOut"
    },
    "donut"
  )
  .to(
    "#donut",
    {
      opacity: 1,
      scale: 2,
      delay: -1.4,
      ease: "Expo.easeInOut",
      rotationY: "+=15",
      duration: 3,
      rotationX: "+=15",
      rotationZ: "+=15",
    },
    "up"
  )
  .from(
    "#M,#A,#Y,#K,#AA", {
    opacity: 0,
    duration: 1,
    scale: 0,
    top: "40%",
    left: "47%",
  },
    "up"
  );
var tl2 = gsap.timeline();
document.querySelectorAll("#explore").forEach((elem) => {
  elem.addEventListener("click", () => {
    tl2.to("#A", {
      left: "-15%",
      top: "-15%",
      scale: "2",
      rotate: "25deg",
      ease: "ease.out",
      duration: 1,
      opacity: 0,
    },
      "sw")
      .to(
        "#M",
        {
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,


        },
        "sw"
      )
      .to(
        "#Y",
        {
          left: "115%",
          top: "-20%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#K",
        {
          left: "115%",
          top: "110%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )
      .to(
        "#AA",
        {
          left: "35%",
          top: "120%",
          scale: "2",
          rotate: "25deg",
          ease: "ease.out",
          duration: 1,
          opacity: 0,
        },
        "sw"
      )

      .to("#donut", {
        width: "80vw",
        top: "-10%",
        rotate: "360deg",
        ease: "ease.out",
        duration: 1,
        opacity: 0,
        delay: "-1",
      })
      .to(
        "#dotted",
        {
          opacity: 0,
        },
        "sw"
      )
      .to(".pgto", {
        opacity: 0,
      });
  });
});

function example() {
  window.location.href = "again.html";
}
// ......................again-html....................
var tl7 = gsap.timeline();
tl7.from(
  ".main-second",
  {
    opacity: "0",
    ease: "expo.inout",
    duration: 1,
  },
  "anim3"
);
tl7
  .from(
    ".front-page-img",
    {
      opacity: "0",
      ease: "expo.inout",
      duration: 1,
    },
    "anim3"
  )
  .from(
    "#line-effect-3",
    {
      opacity: "0",
      ease: "expo.inout",
      duration: 1,
    },
    "anim3"
  )
  .from(
    "#line-effect-1",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 2,
    },
    "anim1"
  )
  .from(
    "#line-effect-2",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 1,
    },
    "anim2"
  )
  .from(
    ".img-one",
    {
      height: "0%",
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".mandit",
    {
      width: "0%",
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".mandit-2",
    {
      height: "0%",
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim1"
  )
  .from(
    ".main-txt-front",
    {
      opacity: 0,
      ease: "expo.inout",
      delay: -0.5,
      duration: 1,
    },
    "anim2"
  )
  .from(
    "#nav",
    {
      top: -50,
      opacity: 0,
      ease: "expo.inout",
      duration: 1,
    },
    "anim2"
  )

  .from(
    ".img-div",
    {
      // top: 0,
      opacity: 0,
      ease: "expo.inout",
      duration: 4,
    },
    "anim3"
  )


document.querySelector(".cntr-nav .ri-menu-line").addEventListener("click", function () {
  document.querySelector(".upar-menu").style.top = "0%";
  document.querySelector(".upar-menu .ri-close-fill").style.display = "initial";
  document.querySelector(".cntr-nav .ri-menu-line").style.display = "none";
});

document.querySelector(".upar-menu .ri-close-fill").addEventListener("click", function () {
  document.querySelector(".upar-menu").style.top = "-100%";
  document.querySelector(".cntr-nav .ri-menu-line").style.display = "initial";
  document.querySelector(".upar-menu .ri-close-fill").style.display = "none";
})

document.querySelector("#home").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "0%";
  document.querySelector("#home").style.cursor = "pointer";
});
document.querySelector("#about").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "-50vh";
  document.querySelector("#about").style.cursor = "pointer";
});
document.querySelector("#order").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "-100vh";
  document.querySelector("#order").style.cursor = "pointer";
});
document.querySelector("#contact").addEventListener("mousemove", function () {
  document.querySelector("#slider-upar-wala").style.marginTop = "-150vh";
  document.querySelector("#contact").style.cursor = "pointer";
});