import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.colors.blue};
        width: 356px;
        height: 64px;
        margin-top: 5px;
        border: none;
        border-radius: 16px;
        margin-bottom: 120px;

        p {
            text-align: center;
            color: ${theme.colors.white};
            font-size: 20px;
            letter-spacing: 0.4px;
        }

        @media ${theme.media.ipad} {
            margin-bottom: 80px;
        }
    `}
`;
