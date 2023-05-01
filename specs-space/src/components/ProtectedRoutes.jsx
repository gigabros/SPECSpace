import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';


function PublicRoute({ children, isAuthenticated }) {
    if (isAuthenticated === 'public') {
        return <>{children}</>
    } else {
        return <div>You dont have access p</div>
    }
};
function UserRoute({ children, isAuthenticated }) {
    if (isAuthenticated === 'student') {
        return <>{children}</>
    } else {
        return <div>You dont have access s</div>
    }
};
function AdminRoute({ children, isAuthenticated }) {
    if (isAuthenticated === 'admin') {
        return <>{children}</>
    } else {
        return <div>You dont have access a</div>
    }
};


export { PublicRoute, UserRoute, AdminRoute };
