import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import {userRegisterRequest} from '../../actions/RegisterActions';


 class Register extends Component{
    render(){
        const {userRegisterRequest}=this.props;
        return (
            <div className="form-Area">
                <RegisterForm userRegisterRequest={userRegisterRequest}/>
            </div>
        )
    }
}



export default connect((state)=>{return{}},{userRegisterRequest})(Register)