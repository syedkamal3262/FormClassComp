import React, { Fragment } from 'react'
 import User from './user'

class UserList extends React.Component{

render(){
    return(
        <Fragment>
            <table>
                <tbody>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
                {this.props.users.map(a=>
                   <User key={a.id} users={a}/>
                )}      
                </tbody>
                
            </table>
            
        </Fragment>
    )
}
}
export default UserList;