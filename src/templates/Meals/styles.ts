import { ContentWrapperContainer } from '@/components/ContentWrapper/styles';
import styled, { css } from 'styled-components';

export const MealsWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.secondaryColor};

        ${ContentWrapperContainer} {
            display: grid;
            justify-content: center;
            /* align-items: center; */
            grid-template-columns: repeat(auto-fill, minmax(30rem, 32rem));
            row-gap: 5rem;
            column-gap: 3.5rem;
            min-height: 54.5rem;
            padding: 5rem 8rem;

            .MealsNull {
                padding-bottom: 54%;
                color: white;
            }

            @media ${theme.media.mobile} {
                padding: 5rem 2rem;
            }
        }
    `}
`;
