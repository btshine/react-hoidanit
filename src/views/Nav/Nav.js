import React from 'react'
import './Nav.scss'
import {
    Link, NavLink
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">

                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/todo" activeClassName="active">Todos</NavLink>
                <NavLink to="/about" activeClassName="active"> About</NavLink>
                <NavLink exact to="/user" activeClassName="active">Users</NavLink>
                <NavLink to="/login" activeClassName="active">Login</NavLink>
                <NavLink to="/dashboard" activeClassName="active">DashBoard</NavLink>
                <NavLink to="/newEmployee" activeClassName="active">New Employee</NavLink>
                <NavLink to="/logout" activeClassName="active">Logout</NavLink>
                <NavLink to="/admin" activeClassName="active">Admin</NavLink>
                <NavLink to="/trello" activeClassName="active">Trello</NavLink>
                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/about">About</Link> */}

            </div>
        )
    }
}

export default Nav
