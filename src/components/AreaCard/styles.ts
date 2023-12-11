import styled, { css } from 'styled-components';

export const AreaCardWrapper = styled.div`
    ${({ theme }) => css`
        background-color: white;
        border-radius: 2rem;
        transition: ${theme.transitions.faster};
        border: 5px solid ${theme.colors.secondaryColor};
        padding: 3rem;

        a {
            color: ${theme.colors.neutral};
            text-decoration: none;
        }

        h3 {
            font-size: 2.4rem;
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
