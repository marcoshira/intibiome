import styled, { css } from 'styled-components';
import { HeaderProps } from '../Header';
import { Theme } from '../../../types/styled-components';

const colorChanger = (red: boolean, theme: Theme) =>
    css`
        background-color: ${red ? 'white' : theme.colors.secondaryColor};

        input {
            color: ${red ? theme.colors.secondaryColor : 'white'};
        }

        .Search {
            color: ${red ? theme.colors.secondaryColor : 'white'};
        }
    `;
export const SearchWrapper = styled.div<HeaderProps>`
    ${({ theme, red }) => css`
        border-radius: 2.5rem;
        margin-right: 1rem;
        form {
            width: 0;
            transition: ${theme.transitions.fast};
            position: relative;
            padding: 0.5rem 0;

            // Extending the form's width if there is focus on the input text.
            // Aumentando a largura do form se tiver foco no input text.
            &:has(.Text:focus) {
                width: 20rem;

                .Text {
                    outline: none;
                }
            }

            // Extending the form's width if there is text on the input.
            // Aumentando a largura do form se tiver texto no input.
            &:has(.Text:not(:placeholder-shown):valid) {
                width: 20rem;
            }

            .Text {
                transition: ${theme.transitions.fast};
                border: none;
                position: absolute;
                bottom: 0.5rem;
                font-family: ${theme.font.family.default};
                background-color: transparent;
                font-size: 1.6rem;
            }
        }

        // Extending the form's width if there is hover.
        // Aumentando a largura do form se tiver hover.
        &:hover {
            form {
                width: 20rem;
            }
        }
        ${colorChanger(red, theme)}

        @media ${theme.media.lteMedium} {
            form {
                &:has(.Text:focus) {
                    width: 8rem;
                }
                &:has(.Text:not(:placeholder-shown):valid) {
                    width: 8rem;
                }
            }
            &:hover {
                form {
                    width: 8rem;
                }
            }
        }

        @media ${theme.media.mobile} {
            padding: 1rem 0;
            form {
                width: 25rem;
                &:has(.Text:focus) {
                    width: 25rem;
                }
                &:has(.Text:not(:placeholder-shown):valid) {
                    width: 25rem;
                }
            }
            &:hover {
                form {
                    width: 25rem;
                }
            }
        }
    `}
`;

export const SearchIconWrapper = styled.section`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        svg {
            height: 2.5rem;
            margin: 1rem;
        }

        .Submit {
            visibility: hidden;
            width: 0;
            height: 0;
        }
    `}
`;
