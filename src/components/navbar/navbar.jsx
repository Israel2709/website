import React, { useEffect } from 'react';
import { Link } from "gatsby"
import './navbar.css';
import Logo from '../../../static/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let x = ['fixed-top'];
  if (scrolled) {
    x.push('scrolled');
  }

  return (
    <div className={x.join(" ")}>
      <div className="contenedor contenedor-navbar">
        <nav className="navbar navbar-expand-xl navbar-dark">
          <Link className="navbar-brand logo" to="/"><img src={Logo} alt="Logo" title="Logo" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto mr-5">
              <li className="nav-item">
                <Link to="/">Temple</Link>
              </li>
              <li className="nav-item">
                <Link to="/courses">Cursos</Link>
              </li>
              <li className="nav-item">
                <Link to="/teachers">Docentes</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
};

export default Navbar;