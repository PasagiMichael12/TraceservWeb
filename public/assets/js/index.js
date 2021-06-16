$(document).ready(() => {
   /* Navbar About us*/
   $('.menu-item').on('click', () => {
      $('.menu').toggleClass('invisible')
   })
   /* Navbar About us*/
   /* Burger Menu */
   $('.wrapper').on('click', () => {
      $('.circle').toggleClass('close')
   })

   $('#closeBtn').on('click', () => {
      $('#overlay').toggleClass('active')
   })
   /* Burger Menu */
   /* Dropdown */
   $('.wrapper').on('click', () => {
      let isHidden = $('#dropdown').is(':hidden')
      if (isHidden) {
         $('#dropdown').removeClass('hidden')
         $('#dropdown').slideDown()
      } else {
         $('#dropdown').slideUp()
      }
   })

   $(document).on('click', '#menu-button', () => {
      $('#submenu').removeClass('hidden')
   })

   $(document).on('click', '#menu-button2', () => {
      let isHidden = $('#submenu2').is(':hidden')
      if (isHidden) {
         $('#submenu2').removeClass('xxs:hidden sm:hidden md:hidden')
         $('#submenu2').slideDown()
      } else {
         $('#submenu2').addClass('xxs:hidden sm:hidden md:hidden')
      }
   })

   /*sideArrow navbar */
   let previousScroll = 0
   $(window).on('scroll', function () {
      let currentScroll = $(this).scrollTop()
      if (currentScroll > 99) {
         $('#arrowNav').removeClass('hidden')
         $('#arrowNavLinks').removeClass('arrowNav-view')
         /* reveal the sidenavbar*/
      } else {
         $('#arrowNav').addClass('hidden')
         $('#arrowNavLinks').removeClass('arrowNav-view')
      }
   })
   /*sideArrow navbar */
   $('#arrowNav').on('click', () => {
      $('#arrowNav').toggleClass('hidden')
      $('#arrowNavLinks').toggleClass('arrowNav-view')
   })
   $('#closeNav').on('click', () => {
      $('#arrowNavLinks').toggleClass('arrowNav-view')
      $('#arrowNav').toggleClass('hidden')
   })
   /*sideArrow navbar */

   /* Navbar modal for business cycle */
   $('#modalButton').on('click', () => {
      $('#businessModal').removeClass('hidden')
      $('#closeButton').on('click', () => {
         $('#businessModal').addClass('hidden')
      })
   })

   /* About Us Page --> see more*/
   $('#seeMore').on('click', function () {
      $('.par2').removeClass('hidden')
      $('#seeMore').addClass('hidden')
   })
   /* About Us Page --> see more*/
   /* About Us Page --> see less*/
   $('#seeLess').on('click', function () {
      $('.par2').addClass('hidden')
      $('#seeMore').removeClass('hidden')
   })
   /* About Us Page --> see less*/

   /** services */
   $('#cardOne').on('click', () => {
      clickCardChange('#cardOne')
   })
   $('#cardTwo').on('click', () => {
      clickCardChange('#cardTwo')
   })
   $('#cardThree').on('click', () => {
      clickCardChange('#cardThree')
   })
   $('#cardFour').on('click', () => {
      clickCardChange('#cardFour')
   })
   $('#cardFive').on('click', () => {
      clickCardChange('#cardFive')
   })
   $('#cardSix').on('click', () => {
      clickCardChange('#cardSix')
      $('#front').toggleClass('hidden')
      $('#getInTouch').toggleClass('hidden')
   })
   function clickCardChange(value) {
      $(`${value}`).toggleClass('bg-tertiary text-white')
      $(`${value} p`).toggleClass('hidden')
   }
   /*Foundation Vision Mission*/

   $('.boxes').on('mouseenter', () => {
      $('#upperItems').removeClass('invisible')
      $('#bottomItems').removeClass('invisible')
      $('#bottomItems').addClass('z-50')
   })
   $('.boxes').on('mouseleave', () => {
      $('#upperItems').addClass('invisible')
      $('#bottomItems').addClass('invisible')
      $('#bottomItems').removeClass('z-50')
   })

   $('#btnNetwork').on('click', function (e) {
      $('#cne').removeClass('hidden')
      $('#entCards').addClass('hidden')
      $('#govCards').addClass('hidden')
   })
   $('#btnEnterprise').on('click', function (e) {
      $('#cne').addClass('hidden')
      $('#entCards').removeClass('hidden')
      $('#govCards').addClass('hidden')
   })
   $('#btnGovernance').on('click', function (e) {
      $('#entCards').addClass('hidden')
      $('#cne').addClass('hidden')
      $('#govCards').removeClass('hidden')
   })
})
