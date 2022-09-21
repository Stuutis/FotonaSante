window.addEventListener('scroll', onScroll)
onScroll()

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const settingDisplay = document.querySelectorAll('.opened_bar')
hideAll()

function onScroll() {
  showNavOnScroll()
}

function showNavOnScroll() {
  const navigation = document.getElementById('navigation')
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
  console.log('clicked')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
  console.log('clicked')
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

function hideAll() {
  settingDisplay.forEach((displays, index) => {
    settingDisplay[index].style.display = 'none'
  })
}


$('.closed_bar').on('click', function () {
  var openBar = $(this).next();
  var toggleIcon = $(this).find('.toggle_icon');

  if(!toggleIcon.hasClass('open')) {
      $('.full_accordion').each( function () {
          $(this).find('.toggle_icon').removeClass('open');
          $(this).find('.opened_bar').slideUp();
      });
      toggleIcon.addClass('open');
      openBar.slideDown();
  } else {
      toggleIcon.removeClass('open');
      openBar.slideUp();
  }
});
