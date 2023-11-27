import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const SignUp = () => {
    const { createUser, updateName } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                updateName(result, name)
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-center text-4xl pt-6 font-semibold'>Sign Up</h2>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
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
                            <button className="btn bg-[#ff3811] text-white hover:bg-black hover:text-lg">Sign Up</button>
                            <h2 className='mt-2 text-center'>Already have an Account? <Link to='/login'><span className='text-[#ff3811] hover:underline'>Login Now</span></Link></h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;