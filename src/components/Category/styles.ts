import styled, { css } from 'styled-components';

export const CategoryWrapper = styled.div`
    ${({ theme }) => css`
        border-radius: 2rem;
        background-color: white;

        transition: ${theme.transitions.faster};
        border: 5px solid ${theme.colors.secondaryColor};
        a {
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 45rem;
        }
        img {
            width: 100%;
            max-height: 55%;
            border-radius: 0 0 1.4rem 1.4rem;
        }

        &:hover {
            background-color: ${theme.colors.thirdColor};
            border: 5px solid white;
            cursor: pointer;
            h3 {
                color: white;
            }
            p {
                color: white;
            }
        }
    `}
`;

export const CategoryTextWrapper = styled.div`
    ${({ theme }) => css`
        width: 100%;
        h3 {
            font-size: 2.4rem;
            padding: 2rem 2.5rem;
            font-weight: 600;
            color: ${theme.colors.neutral};
            transition: ${theme.transitions.faster};
        }
        p {
            font-size: 1.4rem;
            color: ${theme.colors.grey};
            padding: 0 2.5rem;
            text-align: justify;
            transition: ${theme.transitions.faster};
        }
    `}
`;
