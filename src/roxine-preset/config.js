import grid from "./grid";
const config = {
    styles: {
        root: {
            fontSize: "10px",
            fontFamily: "body",
            lineHeight: 1.5,
            color: 'text',
            h1: {
                fontSize: '40px'
            },
            "h1,h2,h3,h4,h5,h6": {
                margin: '0rem',
                fontFamily: "heading",
                lineHeight: 1.2
            },
            p: {
                marginTop: '0rem',
                marginBottom: '2rem',
                '@media only screen and (min-width: 768px)': {
                    marginBottom: '4rem',
                }
            },
            body: {
                margin: 'auto'
            },
            ul: {
                padding: '0rem',
                margin: '0rem'
            },
            li: {
                listStyle: "none",
            },
            a: {
                textDecoration: "none",
                cursor: 'pointer'
            },
            button: {
                display: 'inline-block',
                fontFamily: 'body',
                margin: 'auto',
                letterSpacing: 'button',
                fontWeight: 'norBold',
       
                textTransform: 'uppercase',
                border: "none",
                cursor: 'pointer',
                borderRadius: '.3rem',
                border: '2px solid',
                minWidth: '16rem',
                textAlign: 'center',
                transition: '.3s ease',
                fontSize: 3,
                lineHeight: 1,
                padding: 1,
        
                ":focus-visible": {
                    outline: 0
                },
                i: {
                    fontSize: '2rem'
                }

            },
            input: {
                border: "none",
                ":focus": {
                    outline: 0
                }
            },
            hr: {
                width: '100%',
                height: '.1rem',
                borderColor: 'rgb(239 239 239 / 15%)'
            },
            ...grid,
        },

    },
    colors: {
        text: '#55565B',
        primary: '#5645FF',
        secondary: '#2812FF',
        highlight: '#000000',
        accent: '#ffffff',
        facebook: '#3B5998',
        google: '#DD4B39'
        // modes: {

        // },
    },
    space: [
        '12rem',
        '1.5rem'
    ],
    lineHeights: {
        standard: 1,

    },
    fontWeights: {
        slim: 300,
        standard: 400,
        norBold: 500,
        bold: 600,
        bolder: 700,
        supperBold: 900
    },
    letterSpacings: {
        bannerTitle: '2.5rem',
        bannerSubTitle: '.5rem',
        standard: '.1rem',
        button: '.22rem',
        title: '.2rem',
        subTitle: '.34rem',
    },
    fontSizes: [
        'clamp(1.3rem, 3vw, 3rem)',
        'clamp(3rem, 11.5vw, 16rem)',
        'clamp(.9rem, 2vw, 1.6rem)',
        'clamp(1.4rem, 2vw, 1.8rem)',
        'clamp(1.2rem, 2vw, 1.4rem)'
    ],
    fonts: {
        body: "Poppins, Helvetica Neue, Helvetica, Arial, sans-serif",
        heading: "Josefin Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
    },
    buttons: {
        primary: {
            color: 'accent',
            background: 'primary',

            borderColor: 'primary',
            '&:hover': {
                background: '#2812FF',
                borderColor: '#2812FF',
            }
        },
        highlight: {
            color: 'accent',
            background: 'highlight',

            borderColor: 'highlight',
            '&:hover': {
                background: 'accent',
                color: 'highlight'
            }
        },
        facebook: {
            color: 'accent',
            background: 'facebook',
            borderColor: 'facebook',
            '&:hover': {
                background: 'accent',
                color: 'facebook'
            }
        },
        google: {
            color: 'accent',
            background: 'google',

            borderColor: 'google',
            '&:hover': {
                background: 'accent',
                color: 'google'
            }
        },
    },
};

export default config;