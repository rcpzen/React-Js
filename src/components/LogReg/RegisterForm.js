import React, { Component } from 'react';


export default class Register extends Component{

    constructor (props){
      super(props);
        this.state = {
            username:'',
            password:'',
            emailAdress:''   
        }

        this.onChange= this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange (e){
        this.setState({ [e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        this.props.userRegisterRequest(this.state);

    }

    render(){
        return (
            
            <form className="form-signin" onSubmit={this.onSubmit}>
                
                <input type="text" 
                id="inputUserName" 
                className="form-control mb-2" 
                value={this.state.username}
                onChange={this.onChange}
                name="username"/>
               
                
                <input type="password" 
                id="inputUserPassword" 
                onChange={this.onChange}
                name="password"
                className="form-control mb-2" 
                placeholder="Şifreniz..." 
                required="" />
               
              
                <input type="email" 
                id="inputEmail" 
                name="emailAdress"
                onChange={this.onChange}
                className="form-control mb-2" 
                placeholder="Email adresiniz..." 
                required="" />
                
               <button className="btn btn-md btn-primary btn-block" type="submit">Kayıt Ol</button>
        
            </form>
       
        )
    }
}



 