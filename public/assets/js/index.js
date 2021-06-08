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
   /* Dropdown */
   /* Navbar modal for business cycle */
   $('#modalButton').on('click', (e) => {
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

   /* Ajax gallery */
   $.ajax({
      url: 'assets/JSON/galleryJSON.json',
      dataType: 'json',
      success: (data) => {},
      error: (e) => {},
   })
   /* Ajax gallery*/
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

const elements = [
   {
      src: 'assets/images/gallery/yeeji.jpg',
      type: 'img',
      title: 'Traceserv Team Building 2021',
      caption:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh. Diam quam nulla porttitor massa id neque aliquam vestibulum. Velit scelerisque in dictum non. In egestas erat imperdiet sed euismod nisi porta lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Aliquet sagittis id consectetur purus ut. Eget est lorem ipsum dolor sit amet. Iaculis urna id volutpat lacus laoreet non. Enim sit amet venenatis urna. Commodo elit at imperdiet dui accumsan sit amet. Sagittis orci a scelerisque purus semper eget duis. Pharetra pharetra massa massa ultricies mi. Etiam sit amet nisl purus in mollis nunc sed id. Tristique senectus et netus et malesuada fames ac. Vel risus commodo viverra maecenas accumsan lacus vel. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Etiam sit amet nisl purus in mollis.',
      priority: 1,
   },
   {
      src: 'assets/images/gallery/bicol.jpg',
      type: 'img',
      title: 'Nice Landscape',
      caption:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh. Diam quam nulla porttitor massa id neque aliquam vestibulum. Velit scelerisque in dictum non. In egestas erat imperdiet sed euismod nisi porta lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Aliquet sagittis id consectetur purus ut. Eget est lorem ipsum dolor sit amet. Iaculis urna id volutpat lacus laoreet non. Enim sit amet venenatis urna. Commodo elit at imperdiet dui accumsan sit amet. Sagittis orci a scelerisque purus semper eget duis. Pharetra pharetra massa massa ultricies mi. Etiam sit amet nisl purus in mollis nunc sed id. Tristique senectus et netus et malesuada fames ac. Vel risus commodo viverra maecenas accumsan lacus vel. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Etiam sit amet nisl purus in mollis.',
      priority: 1,
   },
   {
      src: 'assets/images/gallery/boracay.jpg',
      type: 'img',
      title: 'Nice Landscape',
      caption:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh. Diam quam nulla porttitor massa id neque aliquam vestibulum. Velit scelerisque in dictum non. In egestas erat imperdiet sed euismod nisi porta lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Aliquet sagittis id consectetur purus ut. Eget est lorem ipsum dolor sit amet. Iaculis urna id volutpat lacus laoreet non. Enim sit amet venenatis urna. Commodo elit at imperdiet dui accumsan sit amet. Sagittis orci a scelerisque purus semper eget duis. Pharetra pharetra massa massa ultricies mi. Etiam sit amet nisl purus in mollis nunc sed id. Tristique senectus et netus et malesuada fames ac. Vel risus commodo viverra maecenas accumsan lacus vel. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Etiam sit amet nisl purus in mollis.',
      priority: 1,
   },
   {
      src: 'assets/images/gallery/Ryeji.jpg',
      type: 'img',
      title: 'Nice Landscape',
      caption:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh. Diam quam nulla porttitor massa id neque aliquam vestibulum. Velit scelerisque in dictum non. In egestas erat imperdiet sed euismod nisi porta lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Aliquet sagittis id consectetur purus ut. Eget est lorem ipsum dolor sit amet. Iaculis urna id volutpat lacus laoreet non. Enim sit amet venenatis urna. Commodo elit at imperdiet dui accumsan sit amet. Sagittis orci a scelerisque purus semper eget duis. Pharetra pharetra massa massa ultricies mi. Etiam sit amet nisl purus in mollis nunc sed id. Tristique senectus et netus et malesuada fames ac. Vel risus commodo viverra maecenas accumsan lacus vel. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Etiam sit amet nisl purus in mollis.',
      priority: 1,
   },
   {
      src: 'assets/images/gallery/palawan.jpg',
      type: 'img',
      title: 'Nice Landscape',
      caption:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh. Diam quam nulla porttitor massa id neque aliquam vestibulum. Velit scelerisque in dictum non. In egestas erat imperdiet sed euismod nisi porta lorem. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Aliquet sagittis id consectetur purus ut. Eget est lorem ipsum dolor sit amet. Iaculis urna id volutpat lacus laoreet non. Enim sit amet venenatis urna. Commodo elit at imperdiet dui accumsan sit amet. Sagittis orci a scelerisque purus semper eget duis. Pharetra pharetra massa massa ultricies mi. Etiam sit amet nisl purus in mollis nunc sed id. Tristique senectus et netus et malesuada fames ac. Vel risus commodo viverra maecenas accumsan lacus vel. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Etiam sit amet nisl purus in mollis.',
      priority: 1,
   },
]
const mixgallery = MixGallery(document.querySelector('#gallery'), elements)

mixgallery.render()
