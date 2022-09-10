let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
let timeline2 = new TimelineMax();
// timeline
// .to('.text',5,{x:500})
// .fromTo('.content-images', 2,{opacity:0},{opacity:1}, '-=2s')
timeline
  .to(".rock", 3, { y: -300 })
  .to(".girl", 3, { y: -200 }, "-=3")
  .fromTo(".bg1", 3,{y:-50}, { y: 0 }, "-=3")
  .to('.bg1', {height: '100vh'})
  .to('.content', 3, {top: '0%'}, '-=3')
  .fromTo('.content-images', 3, {opacity:0}, {opacity:1},'-=3')
  .fromTo('.text', 3, {opacity:0}, {opacity:1},'-=3')

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0, //top of image
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);

