import styled, { css } from 'styled-components';

export const DiscoveryWrapper = styled.div`
    ${({ theme }) => css`
        border-radius: 16px;
        box-shadow: 0 3px 16px ${theme.colors.lightGrey};
        margin: 0 16px;

        img {
            border-radius: 16px 16px 0 0;
        }

        p {
            color: ${theme.colors.darkGrey};
            text-align: left;
            font-size: 20px;
            letter-spacing: 0.4px;
            padding: 24px 32px 50px;
        }

        @media ${theme.media.ipad} {
            margin: 0 8px;
        }
    `}
`;
