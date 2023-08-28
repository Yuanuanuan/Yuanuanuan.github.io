

let nav = document.querySelector('nav')
const title = document.querySelector(".title")
const titleScroll = document.querySelector('.title-scroll')

const bgImg = document.querySelector('.bg-img')
const bgImgWidth = bgImg.offsetWidth;
const bgImgHeight = bgImg.offsetHeight;

let animation = gsap.to(titleScroll, { y: 20, duration: 1, repeat: -1 });

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    nav.style.opacity = '0';
    animation.restart();
  } else {
    nav.style.opacity = '1';
    animation.pause(); // 暫停動畫
  }
});

const titleAnimation = gsap.timeline({repeat: -1, repeatDelay: 2});

titleAnimation
  .to(title, { opacity: 0, duration: 0.15, stagger: 0.05, repeat: 3})
  .to(title, { opacity: 1, duration: 0.1, stagger: 0.05})

  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const moveX = (0.5 - mouseX / bgImgWidth) * 10;
    const moveY = (0.5 - mouseY / bgImgHeight) * 10;

    bgImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
  })