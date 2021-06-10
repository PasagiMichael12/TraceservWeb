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
            xxs: {min: '320px', max: '639px'},
            sm: {min: '640px', max: '767px'},
            md: {min: '768px', max: '1023px'},
            lg: {min: '1024px', max: '1279px'},
            xl: {min: '1280px', max: '1535px'},
            xxl: {min: "2000px"}
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
