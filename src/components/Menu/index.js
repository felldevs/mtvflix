import React from 'react';
import Logo from '../../assets/images/logo.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Mtvflix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Acessar Vídeo
      </Button>

    </nav>
  );
}

export default Menu;