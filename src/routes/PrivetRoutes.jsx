import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from '../providers/AuthProvider';

const PrivetRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log(user);

    if (user) {
        return children;
    }

    return <Navigate to='/login' />
};

export default PrivetRoutes;