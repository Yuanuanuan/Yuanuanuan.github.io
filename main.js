
const topIcon = document.querySelector('.top')
const coverTitle = document.querySelector(".cover-title")
const menuToggle = document.querySelector('.menu-toggle')
const closeIcon = document.querySelector('.close-icon')
const list = document.querySelector('ul')
const listOfATags = document.querySelectorAll('nav-a')

const bgImg = document.querySelector('.bg-img')
const bgImgWidth = bgImg.offsetWidth;
const bgImgHeight = bgImg.offsetHeight;

const aboutMe = document.querySelector('#about-me')

const learningCard = document.querySelectorAll('.learning-card')

const skillsImgs = document.querySelectorAll('.skills-icon');

const body = document.body

window.addEventListener('load', () => {
  const loading = document.querySelector('#loading')
  const loadSuccess = document.querySelector('#load-success')
  gsap.to('.loading-icon', {rotation:360, repeat: -1, duration: 3, ease: 'power0'})

  setTimeout(() => {
    loading.style.display = 'none';
    loadSuccess.style.display = '1';
  }, 0);
})

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scaleFactor = 1 + scrollY * 0.002; // 調整放大倍率
    const translateY = scrollY * 0.2;
    
    bgImg.style.transform = `scale(${scaleFactor}) translate3d(0, ${translateY}px, 0)`;

    if (window.scrollY > 500) {
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
      list.style.transform = 'translate(-50%, -50%) scale(1, 1)';
      list.style.opacity = '1';
  });

  closeIcon.addEventListener('click', e => {
    list.style.transform = 'translate(-50%, -50%) scale(0, 0)';
    list.style.opacity = '0';
  })

  const aboutMeSection = document.querySelector('.about-me-section')
  const qualificationSection = document.querySelector('.qualification-section')
  const learningSection = document.querySelector('.learning-experience-section')
  const skillsSection = document.querySelector('.skills-section')
  const portfolioSection = document.querySelector('.portfolio-section')
  const contactSection = document.querySelector('.contact-section')

  const sections = {
    'about-link': aboutMeSection,
    'qualification-link': qualificationSection,
    'learning-link': learningSection,
    'skills-link': skillsSection,
    'portfolio-link': portfolioSection,
    'contact-link': contactSection,
  };

  list.addEventListener('click', e => {
    console.log(e.target)
    if (e.target.classList.contains('close-icon')) return

    list.style.transform = 'translate(-50%, -50%) scale(0, 0)';
    list.style.opacity = '0';

    const linkType = e.target.classList[1];

    Object.values(sections).forEach(section => {
      section.style.maxHeight = '0';
    })

    sections[linkType].style.maxHeight = '2000px';

    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }, 550);

  })
  

  learningCard.forEach((card) => {
    const describe = card.querySelector('.learning-card-describle')
    const learnMoreBtn = card.querySelector('.learn-more-btn')

    let expanded = false;

    learnMoreBtn.addEventListener('click', () => {
      if (!expanded) {
        describe.style.display = 'block';
        learnMoreBtn.innerText = 'Close';
      } else {
        describe.style.display = '-webkit-box';
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

  const moonIcon = document.querySelector('.moon-icon');

  moonIcon.addEventListener('click', (e) => {
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      e.target.style.backgroundImage = "url('./images/icons/sun-svgrepo-com.svg')";
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
      e.target.style.backgroundImage = "url('./images/icons/moon-svgrepo-com.svg')";
    }
  })




// --------------------- Animation ----------------------//

  
const coverTitleAnimation = gsap.timeline({repeat: -1, repeatDelay: 2});
  
  coverTitleAnimation 
    .to(coverTitle, { opacity: 1, duration: 0.07, repeat: 6, yoyo: true})
    .to(coverTitle, { opacity: 0, delay: .7, duration: 0.06, repeat: 1, yoyo: true})

const coverClickMe = gsap.to('.cover-click-me', {scale: 1.1, duration: .6, repeat: -1, yoyo: true})

const CoverBorder = gsap.from('.cover-border', {scale: .8, opacity: 0, duration: .6, repeat: -1, yoyo: true});


const myImage = document.querySelectorAll('.me-image');

const AboutMeAnimation = gsap.timeline({ paused: true});

AboutMeAnimation
  .from(myImage, {x:300, scale: 0.1, duration: .8, opacity: 0, transformOrigin: "center bottom", stagger: -0.05,})
  .from('.intro', {opacity: 0, scale: 2, transformOrigin: 'center center', stagger: 0.05})
  .from('.social-media a', {y:-60, opacity: 0, duration: 1, ease: 'smooth', stagger: 0.15})

const ProfileAnimation = gsap.timeline({ paused: true })

ProfileAnimation
  .from('.profile-paragraph1', {y:30, opacity: 0, duration: 0.5})
  .from('.profile-paragraph2', {y:30, opacity: 0, duration: 0.5})
  .from('.profile-paragraph3', {y:30, opacity: 0, duration: 0.5})
  .from('.block-profile', {scale: 0, transformOrigin: 'left bottom'})

  const qualificationAnimation = gsap.timeline({ paused: true });

  qualificationAnimation
    .from('.card-title', {y:-50, opacity: 0, duration: .5, ease: 'back'})
    .from('.qualification-card > h2', {x: 50, opacity: 0, duration: .4, ease: 'back'})
    .from('.qualification-card > h3', {x: -50, opacity: 0, duration: .3, stagger: 0.2, ease: 'back'})

  const learningAlphaCampAnimation = gsap.timeline({ paused: true });
  const learningUdemyAnimation = gsap.timeline({ paused: true });

  learningAlphaCampAnimation
    .from('.alphacamp', {y:100, opacity:0, scale: .5, duration: .5, ease: 'smooth'})

  learningUdemyAnimation
    .from('.udemy', {y:100, opacity:0, scale: .5, duration: .5, ease: 'smooth'})


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

  ScrollAnimation({ target: '#learning', start: 'top 30%', play: learningAlphaCampAnimation});

  ScrollAnimation({ target: '#learning', start: 'top -30%', play: learningUdemyAnimation});
