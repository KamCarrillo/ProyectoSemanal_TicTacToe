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
            },
            "&_o_outline": {
                backgroundImage: theme('backgroundImage.o_outline'),
                backgroundRepeat: 'no-repeat',
            },
            "&_x": {
                backgroundImage: theme("backgroundImage.x"),
                backgroundRepeat: 'no-repeat',
            },
            "&_x_outline": {
                backgroundImage: theme("backgroundImage.x_outline"),
                backgroundRepeat: 'no-repeat',
            },
            "restart": {
                backgroundImage: theme("backgroundImage.restart"),
                backgroundRepeat: 'no-repeat',
            },
            "logo": {
                backgroundImage: theme("backgroundImage.logo"),
                backgroundRepeat: 'no-repeat',
            },
        },
    })
})