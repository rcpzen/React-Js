import React from 'react';

const Login = () => (
    <div className="form-Area">
        <form className="form-signin">
            <div className="row justify-content-center">
                 <img className="mb-4 login-img" src="http://awswallpapershd.com/wp-content/uploads/2016/10/Monkey-D-Luffy-One-Piece-Free-Wallpapers-For-Desktop.jpg" alt=""/>
            </div>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control mb-2" placeholder="Email adresiniz..." required="" autofocus=""/>
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control mb-2" placeholder="Şifreniz..." required=""/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Giriş Yap</button>
    
        </form>
    </div>
)

export default Login