import styled, { css } from 'styled-components';

type CardColor = {
    color: 'blue' | 'green' | 'red';
};

export const ProductCardWrapper = styled.div<CardColor>`
    ${({ theme, color }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 16px;
        box-shadow: 0 3px 16px ${theme.colors.lightGrey};

        p {
            color: ${theme.colors.darkGrey};
            font-size: 20px;
            margin: 24px 32px 32px;
            text-align: center;
        }

        .title {
            ${color == 'blue'
                ? `background-color: ${theme.colors.blue}`
                : color == 'green'
                ? `background-color: ${theme.colors.green}`
                : `background-color: ${theme.colors.red}`};

            padding: 20px 23px 24px 21px;
            border-radius: 0 0 16px 16px;
            width: 100%;

            p {
                color: ${theme.colors.white};
                text-align: center;
                font-size: 25px;
                margin: 0;
            }
        }

        @media ${theme.media.ipad} {
            margin: 0 8px;
        }
    `}
`;
