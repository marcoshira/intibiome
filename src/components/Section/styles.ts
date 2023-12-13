import styled, { css } from 'styled-components';

export const SectionWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20%;
        margin-bottom: 80px;

        h3 {
            margin: 80px 0;
            color: ${theme.colors.blue};
            font-size: 39px;
            font-weight: bold;
        }

        .content {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        @media ${theme.media.ipad} {
            padding: 0 4%;
            width: 100%;
            margin-bottom: 60px;

            h3 {
                margin: 40px 0;
                font-size: 31px;
            }

            .content {
                max-width: 100%;
                overflow-x: scroll;
                justify-content: left;
            }
        }
    `}
`;
