import React from 'react';
import { connect } from "react-redux";
import { currentUser } from "../services/auth"
import Calculator from "./Calculator";
import Login from './Login';

const Home = props => {
    return (
        (props.loggedIn && currentUser()) ? <Calculator /> : <Login /> 
    )
}

const mapStateToProps = state => {
    const  { loggedIn } = state.authentication;

    return { loggedIn };
}

export default connect(mapStateToProps)(Home);