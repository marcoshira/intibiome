import { useState } from 'react';
import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close } from '@styled-icons/material-rounded/Close';
import { NavLink } from '../NavLink';

export type MenuProps = {
    title?: string;
};
export const Menu = ({ title }: MenuProps) => {
    const [visible, setVisible] = useState(false);

    return (
        <Styled.MenuWrapper visible={visible}>
            {/* Open / close menu button. */}
            {/* Botão de abrir / fechar o menu. */}
            <Styled.Button
                onClick={() => setVisible(!visible)}
                aria-label="Open/Close Menu"
                className="Button"
            >
                {visible ? (
                    <Close aria-label="Close Menu" className="Close" />
                ) : (
                    <MenuIcon aria-label="Open Menu" className="Open" />
                )}
            </Styled.Button>
            <Styled.NavLinks visible={visible}>
                <NavLink
                    text="about us"
                    dropdown={['brand philosophy', 'product technology']}
                />
                <NavLink
                    text="our products"
                    dropdown={[
                        'all products',
                        'intibiome wellness',
                        'intibiome active',
                        'intibiome agecare',
                    ]}
                />
                <NavLink
                    text="intimate health"
                    dropdown={['article 1', 'article 2', 'article 3', 'faq']}
                />

                <NavLink text="contact us" />

                <NavLink text="brand philoshy" className="mobile" />
                <NavLink text="products technology" className="mobile" />
                <NavLink text="all products" className="mobile" />
                <NavLink text="intibiome wellness" className="mobile" />
                <NavLink text="intibiome active" className="mobile" />
                <NavLink text="intibiome agecare" className="mobile" />
                <NavLink text="article 1" className="mobile" />
                <NavLink text="article 2" className="mobile" />
                <NavLink text="article 3" className="mobile" />
                <NavLink text="faq" className="mobile" />
                <NavLink text="contact us" className="mobile" />
            </Styled.NavLinks>
        </Styled.MenuWrapper>
    );
};
