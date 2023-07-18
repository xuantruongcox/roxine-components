const icoBox = {
    position: 'relative',
    textAlign: 'center',
    maxWidth: '35rem',
    paddingTop: '4rem',
    paddingBottom: "2rem",
    px: '5rem',
    borderRadius: '.8rem',
    bg: '#f8f8f8',
    overflow: 'hidden',
    transition: '.4s ease',
    header: {
        position: 'relative',
        icon: {
            fontSize: '4.5rem',
            marginBottom: '2.5rem',
            display: 'block',
            transition: '.4s ease',
        },
        name: {
            fontSize: 3,
            fontWeight: 'standard',
            transition: '.4s ease',
            marginBottom: '1.5rem'
        }
    },
    body: {
        position: 'relative',
        summary: {
            fontSize: 4
        },
        link: {
            fontSize: '1.4rem',
            transition: '.4s ease',
            '&:hover': {
                color: 'primary'
            }
        }
    },
    '::before': {
        position: 'absolute',
        content: '""',
        width: '100%',
        height: '100%',
        top: '0rem',
        left: '0rem',
        bg: 'white',
        transform: 'translateX(100%)',
        transition: '.2s ease',
    },
    '&:hover': {
        boxShadow: '0 0.1429rem 0.6429rem 0.07143rem rgb(1 2 2 / 10%)',
        'i, h2': {
            color: 'primary'
        },
        '::before': {
            transform: 'translateX(0%)'

        }
    }
}

export default icoBox;