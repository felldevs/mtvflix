import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Mtvflix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Acessar Vídeo
      </Button>

    </nav>
  );
}

export default Menu;