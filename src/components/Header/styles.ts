import styled, { css } from 'styled-components';

import { MenuWrapper as Menu } from '../Menu/styles';

export const HeaderWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        margin-bottom: 9px;

        .headerSearch {
            position: relative;
            left: 78%;
            top: 28px;
        }

        ${Menu} {
            position: absolute;
            top: 80px;
        }

        @media ${theme.media.ipad} {
            width: 100%;
            position: fixed;
            top: 0;
            background-color: ${theme.colors.white};
            z-index: 3;

            .headerSearch {
                position: absolute;
                left: auto;
                right: 7vw;
                top: 28px;
            }
        }
    `}
`;
