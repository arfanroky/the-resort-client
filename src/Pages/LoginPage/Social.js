import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Spinner from '../../Shared/Spinner';

const Social = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [signInWithFacebook,fUser, fLoading, fError] = useSignInWithFacebook(auth);

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [token] = useToken(gUser || gitUser);
    if(token){
        navigate(from, {replace: true});
    }

    if(gLoading || gitLoading){
        return <Spinner></Spinner>
    }
    
    return (
        <div>
        <p 
        onClick={ async () => await signInWithGoogle()}>
                google 
</p>
        <p 
        onClick={async () => await signInWithGithub()}
        >
            gitHub
        </p>
        <p onClick={async () => await signInWithFacebook()}>

        </p>
    </div>
    );
};

export default Social;