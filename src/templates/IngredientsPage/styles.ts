import { ContentWrapperContainer } from '@/components/ContentWrapper/styles';
import styled, { css } from 'styled-components';

export const IngredientsPageWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.secondaryColor};

        ${ContentWrapperContainer} {
            display: grid;
            justify-content: center;
            grid-template-columns: repeat(auto-fill, minmax(25rem, 42rem));
            row-gap: 5rem;
            column-gap: 1.5rem;

            @media ${theme.media.ipad} {
                padding: 5rem 2rem;
            }
        }
    `}
`;
