import React, { Fragment } from 'react'


class UserForm extends React.Component{

    constructor(props){
        super(props)
        
        this.changeHandler=this.changeHandler.bind(this)
        
    }
    state={
        temp:{
            username:'',
            useremail:'',
            gender:'Male',
            id:''
        }
        
    }
changeHandler(e){
e.preventDefault();
this.setState({temp:{
    ...this.state.temp,
    [e.target.name]:e.target.value,
    id:Date.now()
}    
})
}


render(){
    return(
        <Fragment>
                <form onSubmit={e=>e.preventDefault()}>
               <label htmlFor="username">Username</label><br />
               <input id="username"
               name="username"
               type="text" 
                onChange={this.changeHandler}
                value={this.state.temp.username}
               /><br /><br />
               <label htmlFor="useremail">Email </label><br />
               <input id="useremail"
               type="text"
               name="useremail"
               value={this.state.temp.useremail}
               onChange={this.changeHandler}
               /><br /><br />
               <select 
               value={this.state.temp.gender}
               onChange={this.changeHandler}
               name="gender"
               >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
               </select><br /><br />
               <button type="submit" 
               onClick={this.props.submit.bind(this,this.state.temp)}
               >submit</button>
               </form>
        </Fragment>
        )
}
}
export default UserForm;