import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import img from '../../assets/images/login/login.svg'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Signup = () => {

  const {createUser} = useContext(AuthContext);

  const handleSignup = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    
    createUser(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(user, {
        displayName: name
      })
      .then(() => {
        console.log('profile updated');
      })
      .catch( (error) => {
        console.log(error);
      })
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
          <form onSubmit={handleSignup} className="card-body">
            <h2 className="text-4xl text-center font-bold">Sign Up</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn bg-[#FF3811] text-white text-lg font-semibold"/>
            </div>
            <div className='text-center mt-5 space-y-5' > 
                <p className='text-[#444444] text-base'>Or Login in with</p>
                <div className='space-x-4 text-lg'>
                    <button><FaFacebook /></button>
                    <button><FaLinkedin /></button>
                    <button><FcGoogle /></button>
                </div>
                <p className='text-[#737373] text-base font-semibold'>Already have an account? <Link to="/login" className='text-[#FF3811] cursor-pointer'>Login </Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
