const elements = [
   {
      src: 'assets/images/gallery/',
      type: 'img',
      title: 'Traceserv Team Building 2021',
      caption: '',
      priority: 1,
   },
   {
      src: 'assets/images/gallery/',
      type: 'img',
      title: 'Nice Landscape',
      caption: '',
      priority: 1,
   },
   {
      src: 'assets/images/gallery/',
      type: 'img',
      title: 'Nice Landscape',
      caption: '',
      priority: 1,
   },
   {
      src: 'assets/images/gallery/',
      type: 'img',
      title: 'Nice Landscape',
      caption: '',
      priority: 1,
   },
   {
      src: 'assets/images/gallery/',
      type: 'img',
      title: 'Nice Landscape',
      caption: '',
      priority: 1,
   },
]
const mixgallery = MixGallery(document.querySelector('#gallery'), elements)

mixgallery.render()
