import Link from 'next/link';
import * as Styled from './styles';
import { BowlRice } from '@styled-icons/boxicons-regular/BowlRice';
import { Search } from '../Search';
import React, { useState } from 'react';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close } from '@styled-icons/material-rounded/Close';

export type HeaderProps = {
    red: boolean;
};
export const Header = ({ red }: HeaderProps) => {
    // State to check if the menu icon has been clicked or not.
    // Estado para checar se o ícone do menu foi clicado ou não.
    const [visible, setVisible] = useState(false);

    return (
        <Styled.HeaderWrapper red={red}>
            <Link href="/" className="Home">
                <h2>A Rice</h2>
                <BowlRice />
            </Link>

            <Styled.HeaderLinksWrapper visible={visible}>
                {/* Open / close menu button. */}
                {/* Botão de abrir / fechar o menu. */}
                <Styled.Button
                    onClick={() => setVisible(!visible)}
                    aria-label="Open/Close Menu"
                    className="Button"
                    visible={visible}
                >
                    {visible ? (
                        <Close aria-label="Close Menu" className="Close" />
                    ) : (
                        <MenuIcon aria-label="Open Menu" className="Open" />
                    )}
                </Styled.Button>
                <div>
                    <Search red={red} />
                    <Link href="/ingredients">
                        <h3 className="MenuLink">Ingredients</h3>
                    </Link>
                    <Link href="/areas">
                        <h3 className="MenuLink">Area</h3>
                    </Link>
                </div>
            </Styled.HeaderLinksWrapper>
        </Styled.HeaderWrapper>
    );
};
