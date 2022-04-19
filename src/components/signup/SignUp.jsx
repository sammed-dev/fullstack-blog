import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e)=>{
        e.preventDefault();
        console.log(userName);
    }



  return (
    <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: 'url(assets/img/bg-girl.jpg)'}}>
        <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
            <h5 className="text-uppercase text-center">Register</h5>
            <br />
            <br />
            <form className="form-type-material" onSubmit={handleRegister}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Username" value={userName} onChange={(e)=> setUserName(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Email address" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password (confirm)" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} />
            </div>
            <br />
            <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
            </form>
            <hr className="w-30" />
            <p className="text-center text-muted fs-13 mt-20">Already have an account?
            <Link to="/login"> sign in</Link>
            </p>
        </div>
</div>

  )
}

export default SignUp