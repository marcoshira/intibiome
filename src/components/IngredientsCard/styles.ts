import styled, { css } from 'styled-components';

export const IngredientsCardWrapper = styled.div`
    ${({ theme }) => css`
        background-color: white;
        padding: 3rem;
        border-radius: 4rem;
        transition: ${theme.transitions.faster};
        border: 5px solid ${theme.colors.secondaryColor};
        a {
            text-decoration: none;
            color: ${theme.colors.neutral};
            transition: ${theme.transitions.faster};

            h3 {
                font-size: 3.2rem;
                margin-bottom: 2rem;
            }

            p {
                font-size: 1.6rem;
            }
        }

        &:hover {
            background-color: ${theme.colors.thirdColor};
            border: 5px solid white;

            a {
                color: white;
            }
        }
    `}
`;
