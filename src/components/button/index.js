/** @jsxImportSource theme-ui */

const Button = ({children, restProps, type})=>{
    return (
        <button sx={{variant: type}} {...restProps}>{children}</button>
    )
}


export default Button;