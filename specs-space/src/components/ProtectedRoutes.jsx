import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';


function PublicRoute({ children, isAuthenticated }) {
    if (isAuthenticated === 'public' || 'user') {
        return <>{children}</>
    } else {
        return <div>You dont have access</div>
    }
};
function UserRoute({ children, isAuthenticated }) {
    if (isAuthenticated === 'user' || 'admin') {
        return <>{children}</>
    } else {
        return <div>You dont have access</div>
    }
};
function AdminRoute({ children, isAuthenticated }) {
    if (isAuthenticated === 'public') {
        return <>{children}</>
    } else {
        return <div>You dont have access</div>
    }
};


export { PublicRoute, UserRoute, AdminRoute };
