import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/login.json";
import {Link} from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Register now!</h1>
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p><small>Already have an account? <Link className='text-primary underline' to='/login'>Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;