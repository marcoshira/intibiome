import styled, { css } from 'styled-components';

type MenuVisible = {
    visible?: boolean;
};

// Function tha opens the mobile menu if the boolean visible is true.
// Função que abre o menu para mobile caso a boolean visible seja verdadeira.
const menuMobVisible = () => css`
    visibility: visible;
    height: calc(100vh - 70px);
    z-index: 3;
`;

// // Function tha closes the desktop menu if the boolean visible is true.
// // Função que fecha o menu para desktop caso a boolean visible seja verdadeira.
// const menuDeskVisible = () => css`
//     visibility: visible;
//     height: 100vh;
// `;

// Function tha fixes the button position if the boolean visible is true.
// Função que fixa a posição do botão caso a boolean visible seja verdadeira.
// const iconLock = () => css`
//     position: fixed;
// `;

export const MenuWrapper = styled.nav<MenuVisible>`
    ${({ theme, visible }) => css`
        position: absolute;
        top: 80px;
        width: 100vw;
        height: 49px;

        @media ${theme.media.ipad} {
            width: auto;
            top: 0px;
            left: 0;
            right: 0;
            height: ${visible ? `auto` : `calc(100vw - 70px)`};
        }
    `}
`;

export const Button = styled.button`
    ${({ theme }) => css`
        position: absolute;
        display: none;
        color: ${theme.colors.darkGrey};
        border: none;
        background: transparent;
        width: 24px;
        height: 24px;
        left: 7%;
        top: 28px;
        transition: all 300ms ease-in-out;
        @media ${theme.media.ipad} {
            display: block;
        }
    `}
`;

export const NavLinks = styled.div<MenuVisible>`
    ${({ theme, visible }) => css`
        border: none;
        transition: all 300ms ease-in-out;
        display: flex;
        height: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};        
        transition: ${theme.transitions.fast};        

        @media ${theme.media.ipad} {
            margin-top: 70px;
            position: fixed;
            height: ${visible ? `100vh` : `0`};
            visibility: ${visible ? `visible` : `hidden`};
            padding ${visible ? `30px 0 0 40px` : `0`};
            width: 100vw;
            flex-direction: column;
            justify-content: start;
        }
    `}
`;
