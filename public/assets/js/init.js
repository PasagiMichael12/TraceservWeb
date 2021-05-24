//wow js initialization
new WOW().init()

$(document).ready(() => {
   $('.menu-item').on('click', () => {
      $('.menu').toggleClass('invisible')
   })
   $('#seeMore').on('click', function () {
      $('.par2').removeClass('hidden')
      $('#seeMore').addClass('hidden')
   })
   $('#seeLess').on('click', function () {
      $('.par2').addClass('hidden')
      $('#seeMore').removeClass('hidden')
   })
})
