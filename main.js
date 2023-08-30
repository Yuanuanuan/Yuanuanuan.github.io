
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const title = document.querySelector(".title")
const titleScroll = document.querySelector('.title-scroll')
const menuToggle = document.querySelector('.menu-toggle')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const list = document.querySelector('ul')

const bgImg = document.querySelector('.bg-img')
const bgImgWidth = bgImg.offsetWidth;
const bgImgHeight = bgImg.offsetHeight;

const aboutMe = document.querySelector('#about-me')

window.addEventListener('load', () => {
  const loading = document.querySelector('#loading')
  const loadSuccess = document.querySelector('#load-success')

  setTimeout(() => {
    loading.style.display = 'none';
    loadSuccess.style.display = '1';
  }, 0);
})

  
  let animation = gsap.to(titleScroll, { y: 20, duration: 1, repeat: -1 });

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scaleFactor = 1 + scrollY * 0.002; // 調整放大倍率
    const translateY = scrollY * 0.2;
  
    const rect = aboutMe.getBoundingClientRect();
    
    bgImg.style.transform = `scale(${scaleFactor}) translate3d(0, ${translateY}px, 0)`;
  
    if (window.scrollY === 0) {
      nav.style.opacity = '0';
      animation.restart();
      titleScroll.style.display = 'block';
    } else {
      nav.style.opacity = '1';
      titleScroll.style.display = 'none';
    }
  
    if (rect.top <= header.getBoundingClientRect().height) {
      header.style.color = '#000';
      header.style.backgroundColor = '#f0f0f0';
      header.style.boxShadow = '0 0 15px 2px #555';
      menuIcon.src = '/images/menu-black.svg';
    } else {
      header.style.color = '#c9c9c9';
      header.style.backgroundColor = 'transparent';
      header.style.backdropFilter = 'none';
      menuIcon.src = '/images/menu.svg';
      header.style.boxShadow = 'none';
    }
  });
  
  document.addEventListener('mousemove', (e) => {
      if (scrollY > 0 || window.innerWidth < 576) return;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      const moveX = (0.5 - mouseX / bgImgWidth) * 15;
      const moveY = (0.5 - mouseY / bgImgHeight) * 15;
  
      bgImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
  
  menuToggle.addEventListener('click', e => {
    if (list.style.transform !== 'scale(1, 1)') {
      list.style.transform = 'scale(1, 1)';
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      list.style.transform = 'scale(1, 0)';
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });


const LoadingAnimation = gsap.timeline({repeat: -1, repeatDelay: 0.5})

LoadingAnimation
  .to('.loading-title', {y:-30, duration: 0.2, ease: 'none'})
  .to('.loading-title', {y:0, duration: 0.2, ease: 'none'})
  .to('.loading-title1', {y:-30, duration: 0.2, ease: 'none'}, '<-0.15')
  .to('.loading-title1', {y:0, duration: 0.2, ease: 'none'})
  .to('.loading-title2', {y:-30, duration: 0.2}, '<-0.15')
  .to('.loading-title2', {y:0, duration: 0.2})
  .to('.loading-title3', {y:-30, duration: 0.2}, '<-0.15')
  .to('.loading-title3', {y:0, duration: 0.2})
  .to('.loading-title4', {y:-30, duration: 0.2}, '<-0.15')
  .to('.loading-title4', {y:0, duration: 0.2})
  .to('.loading-title5', {y:-30, duration: 0.2}, '<-0.15')
  .to('.loading-title5', {y:0, duration: 0.2})
  .to('.loading-title6', {y:-30, duration: 0.2}, '<-0.15')
  .to('.loading-title6', {y:0, duration: 0.2})
  .to('.loading-title7', {y:-30, duration: 0.2}, '<-0.15')
  .to('.loading-title7', {y:0, duration: 0.2})
  .to('.loading-title8', {y:-30, duration: 0.2}, '<-0.15')
  .to('.loading-title8', {y:0, duration: 0.2})
  .to('.loading-title9', {y:-30, duration: 0.2}, '<-0.15')
  .to('.loading-title9', {y:0, duration: 0.2})

  
  
const titleAnimation = gsap.timeline({repeat: -1, repeatDelay: 2});
  
  titleAnimation
    .to(title, { opacity: 0, duration: 0.15, stagger: 0.05, repeat: 3})
    .to(title, { opacity: 1, duration: 0.1, stagger: 0.05})


const AboutMeAnimation = gsap.timeline({ paused: true});


AboutMeAnimation
  .to('.about-me-img', {x:0, scale: 1, duration: .5})
  .to('.about-me-img1', {x:20, scale: 1.1, transformOrigin: "center bottom"}, '<')
  .to('.about-me-img2', {x:40, scale: 1.2, transformOrigin: "center bottom"}, '<')
  .to('.about-me-img3', {x:60, scale: 1.3, transformOrigin: "center bottom"}, '<')
  .to('.about-me-img4', {x:80, scale: 1.4, transformOrigin: "center bottom"}, '<')
  .to('.about-me-img5', {x:100, scale: 1.5, transformOrigin: "center bottom"}, '<')
  .to('.about-me-img6', {x:120, scale: 1.6, transformOrigin: "center bottom"}, '<')
  .to('.about-me-img7', {x:140, scale: 1.7, transformOrigin: "center bottom"}, '<')
  .to('.about-me-img8', {x:160, scale: 1.8, transformOrigin: "center bottom"}, '<')
  .to('.about-me-img9', {x:180, scale: 1.9, transformOrigin: "center bottom"}, '<')

const ProfileAnimation = gsap.timeline({ paused: true })

ProfileAnimation
  .from('.profile-paragraph1', {y:30, opacity: 0, duration: 0.5})
  .from('.profile-paragraph2', {y:30, opacity: 0, duration: 0.5})
  .from('.profile-paragraph3', {y:30, opacity: 0, duration: 0.5})
  .from('.block-profile', {scale: 0, transformOrigin: 'left bottom'})


  const ScrollAnimation = ({ target, start, play }) => {
    ScrollTrigger.create({
      trigger: target,
      start: start,
      onEnter: () => {
        play.play();
      }
    })
  }

  ScrollAnimation({ target: '#about-me', start: 'top 20%', play: ProfileAnimation});

  ScrollAnimation({ target: '#about-me', start: 'top 50%', play: AboutMeAnimation});