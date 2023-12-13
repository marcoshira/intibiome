import styled, { css } from 'styled-components';

export const FooterWrapper = styled.div`
    ${({ theme }) => css`
        width: 100vw;
        height: 242px;
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};
        padding: 3% 20%;

        .footerLinks {
            margin-bottom: 60px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            p {
                font-size: 16px;
                text-align: right;
                letter-spacing: 0.32px;
                border-left: 1px solid ${theme.colors.white};
                padding: 5px 24px;
            }

            p:first-child {
                border-left: none;
            }
        }

        .logos {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        @media ${theme.media.ipad} {
            height: auto;
            .footerLinks {
                margin-bottom: 0px;
                flex-direction: column;
                p {
                    text-align: center;
                    border-left: none;
                    position: relative;
                    margin: 30px 0;
                }
                p::after {
                    content: '';
                    width: 25px;
                    background-color: white;
                    position: absolute;
                    bottom: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-bottom: 1px solid ${theme.colors.white};
                }

                p:last-child::after {
                    content: none;
                }
            }

            .logos {
                height: 170px;
                flex-direction: column-reverse;
                align-items: center;
                margin: 60px 0;
            }
        }
    `}
`;
