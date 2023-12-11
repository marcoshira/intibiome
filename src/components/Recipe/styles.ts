import styled, { css } from 'styled-components';

export const RecipeWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: top;
        width: 100%;
        color: ${theme.colors.neutral};

        .FlexItem {
            width: 35%;
        }

        @media${theme.media.ipad} {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .FlexItem {
                width: 80%;
            }
        }

        @media${theme.media.lteMedium} {
            .FlexItem {
                width: 85%;
            }
        }
    `}
`;

export const ThumbWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 4rem;
        background-color: white;

        img {
            width: 100%;
            height: 35rem;
            object-fit: cover;
            border-radius: 4rem 4rem 0 0;
        }

        .TitleContainer {
            padding: 2rem;
            padding-right: 5rem;
            h3 {
                font-size: 2.4rem;
                border-bottom: 1px dotted ${theme.colors.neutral};
            }

            p {
                margin-top: 1rem;
                color: ${theme.colors.darkGrey};
                text-align: right;
            }
        }

        &.IngredientsContainer {
            padding: 3rem;
            margin-top: 2rem;
            h4 {
                text-align: center;
                font-size: 2.4rem;
                margin-bottom: 2rem;
                position: relative;
                /* border-bottom: 1px dotted ${theme.colors.neutral}; */
                &::after {
                    content: '';
                    border-bottom: 1px dotted ${theme.colors.black};
                    width: 100%;
                    position: absolute;
                    bottom: -0.5rem;
                    left: 0;
                }
            }
            section {
                p {
                    text-align: center;
                    font-size: 1.8rem;
                    color: ${theme.colors.neutral};
                    margin-bottom: 0.8rem;
                }
            }
        }

        @media${theme.media.ipad} {
            margin-bottom: 2rem;
        }
    `}
`;

export const InstructionsWrapper = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;
        border-radius: 4rem;
        background-color: white;
        padding: 5rem;

        h3 {
            color: ${theme.colors.secondaryColor};
            text-align: center;
            border-bottom: 1px dotted ${theme.colors.secondaryColor};
            font-size: 3.6rem;
            margin-bottom: 5rem;
        }

        p {
            color: ${theme.colors.neutral};
            text-align: justify;
            font-size: 2rem;
        }

        .Video {
            margin-top: 5rem;
            text-align: left;

            a {
                margin-top: 1rem;
                text-decoration: none;
                transition: ${theme.transitions.faster};
                word-wrap: break-word;

                &:hover {
                    color: ${theme.colors.thirdColor};
                }
            }
        }
        @media${theme.media.ipad} {
            width: 80%;
        }

        @media${theme.media.lteMedium} {
            width: 85%;
            p {
                font-size: 1.6rem;
            }
        }
    `}
`;
