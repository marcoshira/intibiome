import styled, { css } from 'styled-components';

export const NavLinkWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 15px 24px;
        margin-right: 20px;
        svg {
            width: 20px;
        }

        .dropdown {
            visibility: hidden;
            opacity: 0;
            height: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: left;
            width: 100vw;
            position: absolute;
            top: 49px;
            left: 0;
            background-color: ${theme.colors.brandGrey};
            color: ${theme.colors.white};
            transition: ${theme.transitions.fastest};

            p:first-of-type {
                margin-left: 21%;
            }

            p {
                padding: 0px 24px;
            }
        }

        &:hover {
            cursor: pointer;

            .dropdown {
                visibility: visible;
                opacity: 1;
                height: 47px;
            }
        }

        &:last-of-type:hover {
            .dropdown {
                display: none;
                height: 0;
            }
        }

        &.mobile {
            display: none;
        }

        @media ${theme.media.ipad} {
            display: none;

            &.mobile {
                display: block;
                width: 100%;
                padding: 24px;
            }
        }
    `}
`;
