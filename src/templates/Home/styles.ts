import styled, { css } from 'styled-components';

export const Home = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media ${theme.media.ipad} {
            margin-top: 79px;
            .iconsImg {
                width: 96%;
                height: auto;
                object-fit: contain;
            }
        }
    `}
`;
