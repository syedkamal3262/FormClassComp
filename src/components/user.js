import React, { Fragment } from 'react'


class User extends React.Component{
   
render(){
    return(
        <Fragment>
            <tr>
                <td>{this.props.users.username}</td>
                <td>{this.props.users.useremail}</td>
                <td>{this.props.users.gender}</td>
            </tr>
                
        </Fragment>
    )
}
}
export default User;