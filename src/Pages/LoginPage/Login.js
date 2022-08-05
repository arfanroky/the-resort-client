import React, { useRef} from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword ,useSendPasswordResetEmail, useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner';


const Login = () => {
    const emailRef = useRef('');

    const { register, handleSubmit, formState: {errors} } = useForm();
    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );
    

      const navigate = useNavigate();
      const location = useLocation();

      let from = location.state?.from?.pathname || "/";
      const [token] = useToken(signInUser);
      const [user] = useAuthState(auth);

        console.log(user);
      if(token){
          navigate(from, {replace: true});
      }

      if(signInLoading || sending){
          return <Spinner></Spinner>
      }

      
    const onSubmit = async e => {
        await signInWithEmailAndPassword(e.email, e.password)
        
    };

    const handlePasswordReset = async() => {
        const email = emailRef.current.value;
        if(email){
            sendPasswordResetEmail(email);
            toast.success('Sent Email for Reset password')
        }
        else{
            toast.error('Please enter your Email address!')
        }
    }

    return (
        <div className="md:h-[92vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-thin text-primary tracking-wider uppercase -mt-20 mb-12 ">
          Sign Up
        </h1>
        
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-[400px] md:p-8 px-12 w-full md:mx-auto md:shadow-2xl md:-shadow-2xl md:border md:border-primary rounded text-center"
        >
  
          <div className="my-4">
            <input
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is Required',
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a valid Email',
                },
              })}
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full max-w-md"
              ref={emailRef}
            />
          </div>
          {/* Error For Email */}
          <label className="label">
            {errors.email?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
  
          <div className="mt-4">
            <input
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is Required',
                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 characters or longer',
                },
              })}
              type="password"
              placeholder="Password"
              className="input input-bordered input-primary w-full max-w-md"
            />
          </div>
          {/* Error For Password */}
          <label className="label">
            {errors.password?.type === 'required' && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === 'minLength' && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
  
          <p className=" w-full max-w-md md:text-left">
            Already Have An Account?{' '}
            <Link to="/register" className=" text-accent underline">
              Create an account
            </Link>
          </p>

          <button
            onClick={handlePasswordReset}
           className=" w-full max-w-md md:text-left">
           Forgot Password?
          </button>
<br />
          
          <p className=" w-full max-w-md md:text-left text-error my-4 pl-1">
            <small>
              {(signInError || resetError ) &&
                (signInError.message ||
                  resetError.message)}
            </small>
          </p>

          <input
            className="btn btn-primary w-full max-w-md"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    );
};

export default Login;