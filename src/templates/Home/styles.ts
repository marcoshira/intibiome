import { ContentWrapperContainer } from '@/components/ContentWrapper/styles';
import styled, { css } from 'styled-components';

export const Home = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.secondaryColor};

        ${ContentWrapperContainer} {
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: repeat(auto-fill, minmax(27rem, 37rem));
            row-gap: 5rem;
            column-gap: 1.5rem;
        }
    `}
`;
