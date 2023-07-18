const photography = {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    minWidth: "34rem",
    minHeight: '20rem',
    backgroundImage: 'url(https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '110%',
    transition: '.3s ease',
    overflow: 'hidden',
    link: {
        position: 'relative',
        display: 'inline-block',
        color: 'accent',
        bg: "primary",
        fontSize: [21],
        lineHeight: 0,
        padding: '1.5rem',
        opacity: 0,
        transform: 'translateY(-15%)',
        transition: '.3s ease'
    },
    '::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0rem',
        left: '0rem',
        bg: 'rgb(0 0 0 / 50%)',
        opacity: 0,
        transition: '.5s ease'
    },
    '::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '200%',
        height: '80%',
        left: '100%',
        transform: "rotate(45deg)",

        bg: 'rgb(255 255 255 / 40%)',

        transition: '.3s ease, left .5s ease'
    },
    '&:hover': {
        backgroundSize: '100%',
        '> *': {
            opacity: 1,
            transform: 'translateX(0%)',
        },
        '::before': {
            opacity: 1
        },
        '::after': {
            left: '-200%',

        }
    }

}

export default photography;