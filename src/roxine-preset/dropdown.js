const dropdown = {
    height: 'auto',
    position: 'relative',
    toggler: {
        bg: 'yellow',
        display: 'block',
        padding: "1.5rem",
        '&:hover ~ ul': {

        }
    },
    'a': {
        display: 'block',
        padding: "1.5rem"
    },
    menu: {
        position: 'absolute',
        top: '100%',
        left: '0rem',
        right: '0rem',
        item: {
            bg: 'grey',
            width: '100%',
        

        },
        '&:hover': {
        }
    },
}
export default dropdown;