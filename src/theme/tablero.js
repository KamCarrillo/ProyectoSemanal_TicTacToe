const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        ".tablero": {
            marginBottom: "32px",
            display: "flex",
            flexDirection: 'column',
            alignItems: "flex-center",
            ".tablero__fila":{
                display: "flex",
                ".tablero__fila--casilla":{
                    heigt: "96px",
                    width: "96px",
                    alignItems: "flex-center",
                    JustifyContent: "center",
                    borderWidth: "4px",
                    borderColor: theme("colors.blue.400"),
                    borderRadius: '12px', //TODO revisar esto
                    cursor: "pointer",
                    //hover
                },
            },

        }
    })
})