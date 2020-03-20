const $ = document.querySelector.bind(document);
const $on = document.addEventListener.bind(document);
const bg = document.getElementById("image");
const balloonsArray = [...document.querySelectorAll(".balloon-hover")];
const blocks = [...document.querySelectorAll(".img-block")];

if(window.innerWidth>1440){
balloonsArray.forEach(item => {
  item.addEventListener("mousemove", event => mouseOver(event, item));
  item.addEventListener("mouseleave", event => {
    gsap.to(item, 2, { x: 0, y: 0, ease: "elastic.out(1, 0.3)" });
    gsap.to(item.querySelector('img'), 2, { x: 0, y: 0,scale:1, ease: "elastic.out(1, 0.3)" });
  });
});
}
function mouseOver(event, item, value = 2) {
  let rect = item.getBoundingClientRect();
  let pX = (event.clientX - rect.left).toFixed();
  let pY = (event.clientY - rect.top).toFixed();
  let targetElement = event.target;
  let cX = targetElement.offsetWidth / 2;
  let cY = targetElement.offsetHeight / 2;
  gsap.to(item, 1, {
    x: (pX - cX) / value,
    y: (pY - cY) / value,
    ease: "power3.out"
  });
  gsap.to(item.querySelector('img'), 1, {
    x: (pX - cX) / value/2,
    y: (pY - cY) / value/2,
    scale:1.2,
    ease: "power3.out"
  });
}

////////skew animation///////////
const img = document.querySelector(".img-container"),
  text = document.querySelector(".inner-right-wrapper"),
  section = document.querySelectorAll(".section-bg-skew");

let currentPixel = window.pageYOffset;

// const looper = function() {
//   let newPixel = window.pageYOffset;
//   let diff = newPixel - currentPixel;
//   let speed = diff * 0.05;
//   gsap.to(section, 1, { skewY: speed, ease: "elastic.out(1, 0.3)" });
//   //gsap.to(text, 1, { skewY: speed });
//   requestAnimationFrame(looper);
//   currentPixel = newPixel;
// };
// looper();

////////////////////////Cursor////////////////////////////////////////
let cursor = $(".cursor");
let posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    // gsap.set(follower, {
    //   css: {
    //     left: posX - 20,
    //     top: posY - 20
    //   }
    // });

    gsap.to(cursor, {
      css: {
        left: mouseX-cursor.offsetWidth/2,
        top: mouseY-cursor.offsetHeight/2
      },
      ease: Power4.easeOut
    });
  }
});

document.addEventListener("mousemove", function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});
const balloonsURIS = [...document.querySelectorAll(".cursor-change")];
if(window.innerWidth>1440){
  balloonsURIS.forEach(item => {
    item.addEventListener("mouseenter", function() {
    cursor.classList.add("active");
    //follower.classList.add("active");
   
    item.addEventListener("mouseleave", function() {
    cursor.classList.remove("active");
    //follower.classList.remove("active");
    });
  });
});
}

////////////////////////Cursor////////////////////////////////////////

///////////////////////Menu/////////////////////////////////////////
// let prevScrollPos = window.pageYOffset;
// window.onscroll = ()=>{
//   let currentScrollPos = window.pageYOffset;
//   if(prevScrollPos>currentScrollPos){
//     document.querySelector('.menu').style.top = "0";
//   }
//   else{
//     document.querySelector('.menu').style.top = "-100px";
//   }
//   prevScrollPos = currentScrollPos;
// }
///////////////////////Menu/////////////////////////////////////////