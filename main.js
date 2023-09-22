
const topIcon = document.querySelector('.top')
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const title = document.querySelector(".title")
const titleScroll = document.querySelector('.title-scroll')
const menuToggle = document.querySelector('.menu-toggle')
const menuIcon = document.querySelector('.menu-icon')
const closeIcon = document.querySelector('.close-icon')
const list = document.querySelector('ul')
const listOfATags = document.querySelectorAll('nav-a')

const bgImg = document.querySelector('.bg-img')
const bgImgWidth = bgImg.offsetWidth;
const bgImgHeight = bgImg.offsetHeight;

const aboutMe = document.querySelector('#about-me')

const learningCard = document.querySelectorAll('.learning-card')

const skillsImgs = document.querySelectorAll('.skills-icon');

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
    
    bgImg.style.transform = `scale(${scaleFactor}) translate3d(0, ${translateY}px, 0)`;
  
    if (window.scrollY === 0) {
      header.style.backgroundColor = 'transparent';
      header.style.boxShadow = 'none';
      nav.style.opacity = '0';
      animation.restart();
      titleScroll.style.display = 'block';
    } else {
      header.style.backgroundColor = '#f9f9f9';
      header.style.boxShadow = '0 0 15px 4px #343434';
      nav.style.opacity = '1';
      titleScroll.style.display = 'none';
    }

    if (window.scrollY > 800) {
      topIcon.style.display = 'block';
    } else {
      topIcon.style.display = 'none';
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
    if (e.target.classList.contains('open')) {
      e.target.classList.remove('open');
      list.style.transform = 'scale(1, 0)';
      list.style.opacity = '0';
    } else {
      e.target.classList.add('open');
      list.style.transform = 'scale(1, 1)';
      list.style.opacity = '1';
    }
  });

  learningCard.forEach((card) => {
    const describe = card.querySelector('.learning-card-describle')
    const learnMoreBtn = card.querySelector('.learn-more-btn')

    let expanded = false;

    learnMoreBtn.addEventListener('click', () => {
      if (!expanded) {
        describe.style.height = 'auto';
        describe.style.whiteSpace = 'wrap';
        learnMoreBtn.innerText = 'Close';
      } else {
        describe.style.height = '24px';
        describe.style.whiteSpace = 'nowrap';
        learnMoreBtn.innerText = 'Read More';
      }

      expanded =!expanded;
    })
  });

  skillsImgs.forEach((icon) => {
    const iconAnimation = gsap.timeline({ paused: true })

    iconAnimation
    .to(icon, {
      y: -20,
      yoyo: true,
      duration: 0.2,
      repeat: 3,
      ease: 'power2.out',
    })

    icon.addEventListener('click', (e) => {
      e.preventDefault();
      iconAnimation.restart();
    })
  })





// --------------------- Animation ----------------------//

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

const myImage = document.querySelectorAll('.me-image');

const AboutMeAnimation = gsap.timeline({ paused: true});


AboutMeAnimation
  .from(myImage, {x:300, scale: 0.1, duration: .8, opacity: 0, transformOrigin: "center bottom", stagger: -0.05,})
  .from('.intro', {opacity: 0, scale: 2, transformOrigin: 'center center', stagger: 0.05})
  .from('.social-media a', {y:-60, opacity: 0, duration: 1, ease: Elastic.easeOut.config(1.2, 0.2), stagger: 0.15})

const ProfileAnimation = gsap.timeline({ paused: true })

ProfileAnimation
  .from('.profile-paragraph1', {y:30, opacity: 0, duration: 0.5})
  .from('.profile-paragraph2', {y:30, opacity: 0, duration: 0.5})
  .from('.profile-paragraph3', {y:30, opacity: 0, duration: 0.5})
  .from('.block-profile', {scale: 0, transformOrigin: 'left bottom'})

  const qualificationAnimation = gsap.timeline({ paused: true });

  qualificationAnimation
    .from('.title', {y:-50, opacity: 0, ease: 'back'})
    .from('.card > h2', {x: 50, opacity: 0, ease: 'back'})
    .from('.card > h3', {x: -50, opacity: 0, stagger: 0.2, ease: 'back'})


// -------------------- ScrollAnimation ------------------//

  const ScrollAnimation = ({ target, start, play }) => {
    ScrollTrigger.create({
      trigger: target,
      start: start,
      onEnter: () => {
        play.play();
      }
    })
  }

  ScrollAnimation({ target: '#about-me', start: 'top 30%', play: AboutMeAnimation});

  ScrollAnimation({ target: '.about-me-banner', start: 'top 40%', play: ProfileAnimation});

  ScrollAnimation({ target: '#qualification', start: 'top 30%', play: qualificationAnimation})
