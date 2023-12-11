import styled, { css } from 'styled-components';
import { HeaderProps } from '.';
import { Theme } from '../../../types/styled-components';

type MenuVisible = {
    visible?: boolean;
};

// Function tha opens the menu if the boolean visible is true.
// Função que abre o menu caso a boolean visible seja verdadeira.
const menuVisible = () => css`
    visibility: visible;
    height: 100vh;
`;

// Function tha fixes the button position if the boolean visible is true.
// Função que fixa a posição do botão caso a boolean visible seja verdadeira.
const iconLock = () => css`
    position: fixed;
`;

// Function that changes Header color if needed.
// Função para mudar a cor do Header caso desejado.
const colorChanger = (red: boolean, theme: Theme) => css`
    box-shadow: ${red
        ? '0px 1px 8px white'
        : '0px 1px 8px ' + theme.colors.secondaryColor};
    background-color: ${red ? theme.colors.secondaryColor : 'white'};
    .Home {
        color: ${red ? 'white' : theme.colors.secondaryColor};

        &::after {
            border-bottom: 1px solid
                ${red ? 'white' : theme.colors.secondaryColor};
        }
    }
    .MenuLink {
        color: ${red ? 'white' : theme.colors.secondaryColor};
        &::after {
            border-bottom: 1px solid
                ${red ? 'white' : theme.colors.secondaryColor};
        }
    }
`;

export const HeaderWrapper = styled.header<HeaderProps>`
    ${({ theme, red }) => css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 5rem;
        width: 100vw;
        height: 8rem;

        .Home {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: left;
            text-decoration: none;
            position: relative;

            svg {
                height: 3.6rem;
                width: 3.6rem;
                margin-bottom: 1rem;
            }

            h2 {
                font-weight: 600;
                font-size: 3.2rem;
                margin-right: 0.8rem;
            }

            &::after {
                transition: ${theme.transitions.fast};
                content: '';
                width: 0;
                position: absolute;
                bottom: 0.4rem;
            }

            &:hover {
                &::after {
                    width: 95%;
                }
            }
        }
        ${colorChanger(red, theme)}
        @media ${theme.media.lteMedium} {
            padding: 1rem 2rem;

            .Home {
                h2 {
                    font-size: 2.8rem;
                    margin-right: 0;
                }
            }
        }
    `}
`;

export const HeaderLinksWrapper = styled.div<MenuVisible>`
    ${({ theme, visible }) => css`
        div {
            display: flex;
            flex-direction: row;
            align-items: center;

            a {
                text-decoration: none;
            }

            h3 {
                margin: 0 1rem;
                position: relative;

                &::after {
                    transition: ${theme.transitions.fast};
                    content: '';
                    width: 0;
                    position: absolute;
                    bottom: 0;
                    left: -2.5%;
                }

                &:hover {
                    cursor: pointer;
                    &::after {
                        width: 105%;
                    }
                }
            }
            @media ${theme.media.lteMedium} {
                h3 {
                    margin: 0;
                    margin-left: 0.6rem;
                }
            }
            @media ${theme.media.mobile} {
                height: 0;
                position: fixed;
                visibility: hidden;
                ${visible && menuVisible()}
                top: 0;
                left: 0;
                right: 0;
                background-color: white;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                transition: ${theme.transitions.fast};
                h3 {
                    font-size: 2.8rem;
                    margin-bottom: 3rem;
                }
                div {
                    position: relative;
                    height: auto;
                    margin-bottom: 3rem;
                    background-color: ${theme.colors.secondaryColor};

                    svg {
                        position: absolute;
                        left: 0;
                        bottom: 0.2rem;
                    }

                    form {
                        .Text {
                            right: 1rem;
                            width: 19rem;
                            font-size: 1.8rem;
                            bottom: 0.4rem;
                        }
                    }
                }
            }
        }
    `}
`;

export const Button = styled.button<MenuVisible>`
    ${({ theme, visible }) => css`
        position: absolute;
        ${visible && iconLock()}
        display: none;
        top: ${theme.spacings.medium};
        color: ${theme.colors.secondaryColor};
        border: none;
        background: transparent;
        z-index: 5;
        width: 4.5rem;
        height: 4rem;
        right: 3rem;
        top: 1.5rem;
        transition: all 300ms ease-in-out;
        @media ${theme.media.mobile} {
            display: block;
        }
    `}
`;
