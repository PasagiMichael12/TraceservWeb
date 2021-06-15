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
