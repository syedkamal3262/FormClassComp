import React, { Fragment } from 'react'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import UserForm from '../components/userForm'
import UserList from '../components/userList'
import _404 from '../components/_404'
class Home extends React.Component{
constructor(props){
    super(props)
    this.state={
        users:[]
        }
this.submit=this.submit.bind(this)
}


submit(data){
const users=[...this.state.users];
users.push(data);
this.setState({users})
console.log(this.state.users)
}

render(){
    return(
        <Fragment>
            <Router>
            <Header />
            <Switch>
                  <Route exact path="/" >
                    <UserForm submit={this.submit}/>
                    </Route>
                  <Route path="/users">
                   <UserList users={this.state.users}/>
                </Route> 
                <Route path="**" component={_404} />
             </Switch>   
            </Router>
        </Fragment>
    )
}
}
export default Home;