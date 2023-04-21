const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        ".tablero": {
            marginBottom: "32px",
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            ".tablero__fila":{
                display: "flex",
                ".tablero__fila__casilla":{
                    display: "flex",
                    alignItems: "flex-center",
                    JustifyContent: "center",
                    placeContent: "center",
                    margin:"0.5rem",
                    height: "7rem",
                    width: "7rem",
                    //backgroundColor: "blue-400",
                    backgroundColor: theme('colors.blue.300'),
                    //borderWidth: "4px",
                    //borderColor: "white-100",
                    //borderColor: theme("colors.gray.200"),
                    borderRadius: '0.75rem', //TODO revisar esto
                    cursor: "pointer",
                    boxShadow: "0px 5px 0px 0px #000000",

                    //hover
                },
                ".fila__div":{
                    display: "flex",
                    //alignItems: "flex-center",
                    //JustifyContent: "center",
                    //placeContent: "center",
                    margin:"0.5rem",
                    height: "3rem",
                    width: "7rem",
                    //backgroundColor: theme('colors.blue.300'),
                    //borderRadius: '0.5rem',
                    ".fila__div--logo":{
                        height:"2rem",
                        //width:"6rem",
                    },
                    ".fila__div--turno":{
                        display: "flex",
                        height:"3rem",
                        width:"7rem",
                        paddingLeft: "1.25rem",
                        backgroundColor: theme('colors.blue.300'),
                        borderColor: theme("colors.gray.200"),
                        borderRadius: '0.5rem',
                        boxShadow: "0px 4px 0px 0px #000000",
                        color: "#A3A3A3",
                        fontWeight: "bold",
                        //fontSize: "1rem",
                        gap: "0.5rem",
                        //textAlign: "left",
                        //lineHeight: "2.5rem",

                    },
                    ".fila__div--restart":{
                        height:"2.5rem",
                        width:"2.5rem",
                        //backgroundColor: theme('colors.gray.100'),
                        borderRadius: '0.5rem',
                        boxShadow: "0px 4px 0px 0px #A8BFC9",
                        cursor: "pointer",
                    },
                },
            },
            ".tablero__score":{
                display: "flex",
                ".tablero__score__cuadro":{
                    height: "4rem",
                    width: "7rem",
                    lineHeight: "2rem",
                    margin:"0.5rem",
                    borderRadius: '0.75rem',
                    //alignItems: "flex-center",
                    //justifyContent: "center",
                    //placeContent: "center",
                    //boxShadow: "0px 5px 0px 0px #000000",
                    color: theme('colors.blue.400'),
                    fontWeight: "bold",
                },
            },

        }
    })
})