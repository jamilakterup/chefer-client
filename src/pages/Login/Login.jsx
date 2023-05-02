import React from 'react';
import {Link} from 'react-router-dom';
import {FaGoogle, FaFacebookF} from 'react-icons/fa';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/login.json";

const Login = () => {

    const handleLoginUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    return (
        <>
            <div className="hero min-h-screen my-12">
                <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </div>

                    <div className="flex-shrink-0 w-full max-w-sm">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLoginUser} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-primary ">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                                <p><small>Don't have an account? <Link className='text-primary underline' to='/register'>Create an account</Link></small></p>
                            </form>
                        </div>
                        <p className='text-center my-6'>Or</p>
                        <div className='border-2 p-2 rounded-lg border-primary'>
                            <p className='flex items-center justify-center gap-5 font-bold'><FaGoogle className='text-primary' /> Continue with google</p>
                        </div>
                        <div className='border-2 p-2 rounded-lg border-primary my-4'>
                            <p className='flex items-center justify-center gap-5 font-bold'><FaFacebookF className='text-primary' /> Continue with facebook</p>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;