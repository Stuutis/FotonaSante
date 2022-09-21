window.addEventListener('scroll', onScroll)
onScroll()
function onScroll() {
  showNavOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(treatments)
  activateMenuAtCurrentSection(contact)
  activateMenuAtCurrentSection(faq)
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

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

$('.closed_bar').on('click', function () {
  var openBar = $(this).next()
  var toggleIcon = $(this).find('.toggle_icon')

  if (!toggleIcon.hasClass('open')) {
    $('.full_accordion').each(function () {
      $(this).find('.toggle_icon').removeClass('open')
      $(this).find('.opened_bar').slideUp()
    })
    toggleIcon.addClass('open')
    openBar.slideDown()
  } else {
    toggleIcon.removeClass('open')
    openBar.slideUp()
  }
})
