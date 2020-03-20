const plain = [...document.querySelectorAll(".plain")],
bounce = document.getElementById('bounce'),
startImg = document.getElementById('start-img'),
menuTop = document.querySelector('.interface'),
menuBottom = document.querySelector('.menu'),
section= document.getElementById('section-1'),
panWrapper = document.querySelector('.pan-wrapper'),
sectionBG = document.querySelector('.section-1-bg'),
heroImg = document.querySelector('.hero-image'),
balloon = document.querySelector('.parallax-el'),
airLogo = document.querySelector('.air-logo');
let tl = new gsap.timeline();
document.addEventListener("DOMContentLoaded", ()=>{
  tl
  .to(startImg,1,{scale:1.2,ease:Power4.easeOut})
  .to(plain,1.5,{y:"-100%", ease: Power4.easeOut,delay:0,stagger:0.1})
  .to(sectionBG,1,{'-webkit-filter':'blur('+(10)+'px)', 'filter':'blur('+(10)+'px)',ease: Power4.easeOut})
  .to(heroImg,1,{scale:0.7,ease: Power4.easeOut,delay:-1})
  //.from(menuTop,2,{y:"-100%",ease: Power4.easeOut,delay:-1.7})
  .from(balloon,.5,{y:800,ease: Power4.easeOut,})
  .from(airLogo,.5,{y:1000,ease: Power4.easeOut})
})
//Elastic.easeOut.config(1, 0.3)