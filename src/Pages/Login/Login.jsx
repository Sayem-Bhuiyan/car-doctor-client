import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import img from '../../assets/images/login/login.svg'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

  const {signInUser} = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signInUser(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      form.reset()
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row gap-20 justify-between">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-4xl text-center font-bold">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                name='password'
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn bg-[#FF3811] text-white text-lg font-semibold"/>
            </div>
            <div className='text-center mt-5 space-y-5' > 
                <p className='text-[#444444] text-base'>Or Login in with</p>
                <div className='space-x-4 text-lg'>
                    <button><FaFacebook /></button>
                    <button><FaLinkedin /></button>
                    <button><FcGoogle /></button>
                </div>
                <p className='text-[#737373] text-base font-semibold'>Do not have any account? <Link to="/signup" className='text-[#FF3811] cursor-pointer'>Sign Up </Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
