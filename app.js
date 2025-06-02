const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text",               { y: "0%",   duration: 1,   stagger: 0.25 });
tl.to(".slider",             { y: "-100%", duration: 1.3, delay: 0.25 });
tl.to(".intro",              { y: "-100%", duration: 1 }, "-=1");

tl.add(() => {
  const s = document.querySelector(".swiper");
  s.style.visibility = "visible";
}, "+=0");
tl.to(".swiper",             { opacity: 1, duration: 1 });

tl.fromTo("nav",             { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("img",             { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".contact-details",{ opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".cv-layout",      { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".big-text",       { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.5");
tl.fromTo(".small-text",     { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".title",          { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".box-text",       { opacity: 0 }, { opacity: 1, duration: 0.5 });
tl.fromTo(".video-container",{ opacity: 0 }, { opacity: 1, duration: 1 });
