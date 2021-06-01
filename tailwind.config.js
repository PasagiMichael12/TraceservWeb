module.exports = {
   purge: [],
   darkMode: false,
   theme: {
      extend: {
         colors: {
            primary: '#7276E8',
            secondary: '#E3F0FC',
            tertiary: '#6426ab',
         },
         fontFamily: {
            roboto: ['Roboto'],
            poppins: ['Poppins'],
         },
         screens: {
            xxs: {max: '639px'},
            sm: {max: '767px'},
            md: {max: '1023px'},
            lg: {max: '1279px'},
            xl: {max: '1535px'},
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
