import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Login extends Component{
 render(){
    return (
        <div className="form-Area">
            <form className="form-signin">
                <div className="row justify-content-center">
                     <img className="mb-4 login-img" src="http://awswallpapershd.com/wp-content/uploads/2016/10/Monkey-D-Luffy-One-Piece-Free-Wallpapers-For-Desktop.jpg" alt=""/>
                </div>
                
                <input type="email" id="inputEmail" className="form-control mb-2" placeholder="Email adresiniz..."/>
              
                <input type="password" id="inputPassword" className="form-control mb-2" placeholder="Şifreniz..." />
                <button className="btn btn-md btn-primary btn-block" type="submit">Giriş Yap</button>
                <Link to="/KayitOl" className="btn btn-md btn-primary btn-block">Kayıt Ol</Link>
            </form>
        </div>
    )
 } 

}