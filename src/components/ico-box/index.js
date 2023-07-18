/** @jsxImportSource theme-ui */
import React from 'react';
import { Image, Link } from 'theme-ui';

const IcoBox = ({children, restProps}) => {
    return (
        <div sx={{variant: 'icoBox'}} {...restProps}>
            {children}
        </div>
    )
}
IcoBox.Header = ({ children, restProps }) => {
    return <div sx={{variant: 'icoBox.header'}} {...restProps}>{children}</div>
}
IcoBox.Header.Icon = ({ name})=>{
    return <i sx={{variant: 'icoBox.header.icon'}} className={name}/>
}
IcoBox.Header.Name = ({ children, restProps })=>{
    return <h2 sx={{variant: 'icoBox.header.name'}} {...restProps}>{children}</h2>
}
IcoBox.Body = ({ children, restProps }) => {
    return <div sx={{variant: 'icoBox.body'}} {...restProps}>{children}</div>

}
IcoBox.Body.Summary = ({children, restProps}) =>{
    return <p sx={{variant: 'icoBox.body.summary'}} {...restProps}>{children}</p>
}
IcoBox.Body.Link = ({restProps, children})=>{
    return <Link sx={{variant: 'icoBox.body.link'}} {...restProps}>{children}</Link>
}
export default IcoBox;