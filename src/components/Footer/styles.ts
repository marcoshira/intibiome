import styled, { css } from 'styled-components';
import { Theme } from '../../../types/styled-components';
import { HeaderProps } from '../Header';

const colorChanger = (red: boolean, theme: Theme) =>
    css`
        background-color: ${red ? theme.colors.secondaryColor : 'white'};

        h4 {
            a {
                &:hover {
                    color: ${red ? 'white' : theme.colors.secondaryColor};
                    border-bottom: 1px dotted
                        ${red ? 'white' : theme.colors.secondaryColor};
                }
            }
        }
    `;

export const FooterWrapper = styled.footer<HeaderProps>`
    ${({ theme, red }) => css`
        width: 100vw;
        height: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;

        ${colorChanger(red, theme)}

        h4 {
            color: ${theme.colors.neutral};
            a {
                border-bottom: 1px dotted ${theme.colors.neutral};
                color: ${theme.colors.neutral};
                text-decoration: none;
                transition: ${theme.transitions.faster};
            }
        }
    `}
`;
