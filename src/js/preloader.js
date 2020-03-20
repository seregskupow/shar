const plain = [...document.querySelectorAll(".plain")],
bounce = document.getElementById('bounce'),
startImg = document.getElementById('start-img'),
menuTop = document.querySelector('.interface'),
menuBottom = document.querySelector('.menu'),
section= document.getElementById('section-1'),
panWrapper = document.querySelector('.pan-wrapper'),
sectionBG = document.querySelector('.section-1-bg'),
balloon = document.querySelector('.parallax-el'),
airLogo = document.querySelector('.air-logo');
let tl = new gsap.timeline();
document.addEventListener("DOMContentLoaded", ()=>{
  tl
  .to(startImg,2,{scale:1.2,ease:Elastic.easeOut.config(1, 0.3),delay:0.5})
  .to(plain,2.5,{y:"-100%", ease: Power4.easeOut,delay:0,stagger:0.1})
  .from(bounce,2,{scale:1.2,x:0,opacity:0.8,ease: Power4.easeOut,delay:-2.7})
  .from(menuTop,2,{y:"-100%",ease: Power4.easeOut,delay:-1.7})
  //.from(menuBottom,2,{height:0,ease: Power4.easeOut,delay:-1.6})
  .to(sectionBG,2.5,{scale:1.2,ease: Power4.easeOut,delay:-3.2})
  .from(balloon,2.5,{y:800,ease: Power4.easeOut,delay:-3.2})
  .from(airLogo,2.5,{y:1500,ease: Power4.easeOut,delay:-3.2})
})
//Elastic.easeOut.config(1, 0.3)