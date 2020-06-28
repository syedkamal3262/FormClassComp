import React, { Fragment } from 'react'
import {NavLink} from 'react-router-dom'

class Header extends React.Component{
render(){
    return(
        <Fragment>
            <h2 className="menu">
                <NavLink to="/" activeClassName="selected" exact>Signin</NavLink>
                <NavLink to="/users" activeClassName="selected" >Users</NavLink>
            </h2>
        </Fragment>
    )
}
}
export default Header;