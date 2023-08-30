
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
  const aboutMeImg = document.querySelectorAll('.about-me-img');
  const aboutMeImg1 = document.querySelectorAll('.about-me-img1');
  const aboutMeImg2 = document.querySelectorAll('.about-me-img2');
  const aboutMeImg3 = document.querySelectorAll('.about-me-img3');
  const aboutMeImg4 = document.querySelectorAll('.about-me-img4');
  const aboutMeImg5 = document.querySelectorAll('.about-me-img5');
  const aboutMeImg6 = document.querySelectorAll('.about-me-img6');
  const aboutMeImg7 = document.querySelectorAll('.about-me-img7');
  const aboutMeImg8 = document.querySelectorAll('.about-me-img8');
  const aboutMeImg9 = document.querySelectorAll('.about-me-img9');
  

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
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      header.style.color = '#000';
      header.style.boxShadow = '0 0 15px 2px #555';
      menuIcon.src = '/images/menu-black.svg';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.color = '#c9c9c9';
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
      list.style.transform = 'scale(0, 1)';
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }
  });
  
  
  const titleAnimation = gsap.timeline({repeat: -1, repeatDelay: 2});
  
  titleAnimation
    .to(title, { opacity: 0, duration: 0.15, stagger: 0.05, repeat: 3})
    .to(title, { opacity: 1, duration: 0.1, stagger: 0.05})


const AboutMeAnimation = gsap.timeline({ paused: true});


AboutMeAnimation
  .to(aboutMeImg, {x:0, scale: 1, duration: .5})
  .to(aboutMeImg1, {x:20, scale: 1.1, transformOrigin: "center bottom"}, '<')
  .to(aboutMeImg2, {x:40, scale: 1.2, transformOrigin: "center bottom"}, '<')
  .to(aboutMeImg3, {x:60, scale: 1.3, transformOrigin: "center bottom"}, '<')
  .to(aboutMeImg4, {x:80, scale: 1.4, transformOrigin: "center bottom"}, '<')
  .to(aboutMeImg5, {x:100, scale: 1.5, transformOrigin: "center bottom"}, '<')
  .to(aboutMeImg6, {x:120, scale: 1.6, transformOrigin: "center bottom"}, '<')
  .to(aboutMeImg7, {x:140, scale: 1.7, transformOrigin: "center bottom"}, '<')
  .to(aboutMeImg8, {x:160, scale: 1.8, transformOrigin: "center bottom"}, '<')
  .to(aboutMeImg9, {x:180, scale: 1.9, transformOrigin: "center bottom"}, '<');

  ScrollTrigger.create({
    trigger: "#about-me",
    start: "top 50%",
    onEnter: () => {
      AboutMeAnimation.play();
    }
  })