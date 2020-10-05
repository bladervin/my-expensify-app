import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <br></br>
      <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
      <br></br>
    </header>
)

export default Header;
