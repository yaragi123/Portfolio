
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active_modal')
}

modalBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active_modal')
        })
    })
})

let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

const linWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active_work'))
    this.classList.add('active_work')
}

linWork.forEach(l=> l.addEventListener('click', activeWork))

let swiperTestimonial = new Swiper(".testimonial_container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

  const sections = document.querySelectorAll('section[id]')

  function scrollActive(){
      const scrollY = window.pageYOffset
  
      sections.forEach(current =>{
          const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')
  
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
          }else{
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
      })
  }
  window.addEventListener('scroll', scrollActive)

  const themeButton = document.getElementById('theme-button')
  const lightTheme = 'light-theme'
  const iconTheme = 'bx-sun'
  
  
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')
  

  const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'
  
  if (selectedTheme) {

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
  }
  
  themeButton.addEventListener('click', () => {
      document.body.classList.toggle(lightTheme)
      themeButton.classList.toggle(iconTheme)
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
  })


const sr =ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay:400,
})

sr.reveal(`.home_data`)
sr.reveal(`.home_handle`, {delay:700} )
sr.reveal(`.home_social, .home_scroll`, {delay:900, origin:'bottom'})