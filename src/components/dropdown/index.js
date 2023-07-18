/** @jsxImportSource theme-ui */

import React from 'react';



const Dropdown = ({ children, ...restProps }) => {
    return (
        <div sx={{variant: 'dropdown'}} {...restProps} className="dropdown">
            {children}
        </div>
    )
}

Dropdown.Toggler = function DropdownToggler({ children, ...restProps }) {
    return <a href="#!" sx={{variant: 'dropdown.toggler'}} {...restProps} className='dropdown__toggler'>{children}</a>
}
Dropdown.Menu = function DropdownMenu({ children, ...restProps }) {
    return <ul sx={{variant: 'dropdown.menu'}} {...restProps} className="dropdown__menu">{children}</ul>
}
Dropdown.Menu.Item = function DropdownMenuItem({ children, ...restProps }) {
    return <li sx={{variant: 'dropdown.menu.item'}} className='dropdown__menu-item'{...restProps}>{children}</li>
}

export default Dropdown