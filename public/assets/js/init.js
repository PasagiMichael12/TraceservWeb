//wow js initialization
new WOW().init()

$(document).ready(() => {
   /* Navbar About us*/
   $('.menu-item').on('click', () => {
      $('.menu').toggleClass('invisible')
   })
   /* Navbar About us*/
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
