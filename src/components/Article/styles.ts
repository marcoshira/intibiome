import styled, { css } from 'styled-components';

export const ArticleWrapper = styled.article`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px 0;
        padding: 0 29%;

        h3 {
            text-align: center;
            color: ${theme.colors.blue};
            font-size: 39px;
            font-weight: bold;
            letter-spacing: 0.78px;
            margin: 40px 0;
        }

        p {
            text-align: center;
            color: ${theme.colors.darkGrey};
            font-size: 20px;
            letter-spacing: 0.4px;
        }

        @media ${theme.media.ipad} {
            padding: 0 4%;
            h3 {
                font-size: 31px;
                letter-spacing: 0.62px;
                margin-top: 0;
            }
        }
    `}
`;
