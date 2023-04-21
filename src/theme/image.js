const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }){
    addComponents({
        ".icon": {
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            "&_o": {
                backgroundImage: theme('backgroundImage.o'),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center",
            },
            "&_o_outline": {
                backgroundImage: theme('backgroundImage.o_outline'),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center",
                //backgroundSize: 'auto',
            },
            "&_x": {
                backgroundImage: theme('backgroundImage.x'),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center", 
                
            },
            "&_x_outline": {
                backgroundImage: theme('backgroundImage.x_outline'),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center",
            },
            "&_restart": {
                backgroundImage: theme('backgroundImage.restart'),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "center", 
            },
            "&_logo": {
                backgroundImage: theme('backgroundImage.logo'),
                backgroundRepeat: 'no-repeat',
                
            },
        },
    })
})