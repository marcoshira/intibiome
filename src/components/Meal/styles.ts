import styled, { css } from 'styled-components';

export const MealWrapper = styled.div`
    ${({ theme }) => css`
        border-radius: 2rem;
        background-color: white;
        width: 32rem;
        transition: ${theme.transitions.faster};
        border: 5px solid ${theme.colors.secondaryColor};
        a {
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 35rem;

            h3 {
                height: 20%;
                display: flex;
                align-items: center;
                font-size: 1.6rem;
                padding: 1rem 2.5rem;
                text-align: center;
                font-weight: 600;
                color: ${theme.colors.neutral};
                transition: ${theme.transitions.faster};
            }

            img {
                width: 100%;
                height: 80%;
                border-radius: 1.4rem 1.4rem 0 0;
                object-fit: cover;
            }
        }

        &:hover {
            background-color: ${theme.colors.thirdColor};
            border: 5px solid white;
            cursor: pointer;
            h3 {
                color: white;
            }
        }
    `}
`;

export const MealTextWrapper = styled.div`
    ${({ theme }) => css`
        width: 100%;
    `}
`;
