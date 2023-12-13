import styled, { css } from 'styled-components';

export const BannerWrapper = styled.div`
    ${({ theme }) => css`
        background: transparent;
        margin-top: 40px;

        .desktopImg {
            width: 100%;
            height: auto;
            object-fit: contain;
        }

        .mobileImg {
            display: none;
        }

        @media ${theme.media.ipad} {
            margin-top: 0;
            .mobileImg {
                width: 100vw;
                height: auto;
                object-fit: contain;
                display: block;
            }

            .desktopImg {
                display: none;
            }
        }
    `}
`;
