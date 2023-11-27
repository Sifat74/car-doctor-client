import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-center text-4xl pt-6 font-semibold'>Login</h2>
                    <form onSubmit={handleLogin} className="card-body mb-0 pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff3811] text-white hover:bg-black hover:text-lg">Login</button>
                        </div>
                    </form>
                    <div className="card-body mt-0 pt-0">
                        <button className="btn btn-outline border-[#ff3811] text-black hover:text-lg mt-2">
                            <FcGoogle className='text-xl'></FcGoogle>
                            Login with google</button>
                        <h2 className='mt-2 text-center'>Not have an Account? <Link to='/signup'><span className='text-[#ff3811] hover:underline'>Register Now</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;