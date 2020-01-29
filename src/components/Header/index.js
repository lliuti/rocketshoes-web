import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md'

import logo from '../../assets/logo.png';
import { Container, Logo, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to='/'>
        <Logo src={logo} alt='Rocketshoes'/>
      </Link>

      <Cart to='/cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color='#fff'/>
      </Cart>
    </Container>
  );
}
