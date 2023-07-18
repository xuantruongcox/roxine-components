/** @jsxImportSource theme-ui */
const Grid = (props) => {
    const {children, className=''} = props;
    return <div className={`grid ${className}`} {...props}>
        {children}
    </div>
}

Grid.Column = (props) => {
    const {children} = props;
    return <div {...props}>
        {children}
    </div>
}
export default Grid;