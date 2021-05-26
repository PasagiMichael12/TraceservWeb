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
      // $('.boxes').addClass('bg-tertiary text-white ')
      $('#upperItems').removeClass('invisible')
      $('#bottomItems').removeClass('invisible')
   })
   $('.boxes').on('mouseleave', () => {
      // $('#foundation').removeClass('bg-tertiary text-white')
      $('#upperItems').addClass('invisible')
      $('#bottomItems').addClass('invisible')
   })
   // $('#vision').on('mouseover', () => {
   //    $('#vision').addClass('bg-tertiary text-white')
   //    $('#upperItems').removeClass('invisible')
   //    $('#bottomItems').removeClass('invisible')
   // })
   // $('#vision').on('mouseleave', () => {
   //    $('#vision').removeClass('bg-tertiary text-white')
   //    $('#upperItems').addClass('invisible')
   //    $('#bottomItems').addClass('invisible')
   // })
   // $('#mission').on('mouseover', () => {
   //    $('#mission').addClass('bg-tertiary text-white')
   //    $('#upperItems').removeClass('invisible')
   //    $('#bottomItems').removeClass('invisible')
   // })
   // $('#mission').on('mouseleave', () => {
   //    $('#mission').removeClass('bg-tertiary text-white')
   //    $('#upperItems').addClass('invisible')
   //    $('#bottomItems').addClass('invisible')
   // })
})
