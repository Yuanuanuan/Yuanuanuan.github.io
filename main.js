

let nav = document.querySelector('nav')
const title = document.querySelector(".title")
const titleScroll = document.querySelector('.title-scroll')
const hamburger = document.querySelector('.hamburger-banner')
const hamburgerIcon = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close-icon')
const list = document.querySelector('ul')

const bgImg = document.querySelector('.bg-img')
const bgImgWidth = bgImg.offsetWidth;
const bgImgHeight = bgImg.offsetHeight;

let animation = gsap.to(titleScroll, { y: 20, duration: 1, repeat: -1 });

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    nav.style.opacity = '0';
    animation.restart();
    titleScroll.style.display = 'block';
  } else {
    nav.style.opacity = '1';
    titleScroll.style.display = 'none';
  }
});

const titleAnimation = gsap.timeline({repeat: -1, repeatDelay: 2});

titleAnimation
  .to(title, { opacity: 0, duration: 0.15, stagger: 0.05, repeat: 3})
  .to(title, { opacity: 1, duration: 0.1, stagger: 0.05})

  document.addEventListener('mousemove', (e) => {
    if (scrollY > 0) return;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const moveX = (0.5 - mouseX / bgImgWidth) * 10;
    const moveY = (0.5 - mouseY / bgImgHeight) * 10;

    bgImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
  })

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const scaleFactor = 1 + scrollY * 0.002; // 調整放大倍率
    const translateY = scrollY * 0.2;
  
    bgImg.style.transform = `scale(${scaleFactor}) translate3d(0, ${translateY}px, 0)`;
  });


hamburger.addEventListener('click', e => {
  if (list.style.transform === 'scale(0, 1)') {
    list.style.transform = 'scale(1, 1)';
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  } else {
    list.style.transform = 'scale(0, 1)';
    hamburgerIcon.style.display = '';
    closeIcon.style.display = 'none';
  }
})
