
window.addEventListener('load', () => {
  const loading = document.querySelector('#loading')
  const loadSuccess = document.querySelector('#load-success')
  gsap.to('.loading-icon', {rotation:360, repeat: -1, duration: 3, ease: 'power0'})

  setTimeout(() => {
    loading.style.display = 'none';
    loadSuccess.style.display = '1';
  }, 0);
})