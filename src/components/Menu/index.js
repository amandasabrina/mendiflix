import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/mendiflixlogo.png';
import { LogoImage, MenuWrapper } from './styles.js';
import Button from '../Button';
// import './Menu.css';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage src={Logo} alt="Mendiflix logo" />
            </Link>            

             <Button as={Link} to="/cadastro/video">            
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;

/* <Button as="a" href="/cadastro/video"> */