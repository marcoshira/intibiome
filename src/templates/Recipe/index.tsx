import { Header } from '@/components/Header';
import * as Styled from './styles';
import { ContentWrapper } from '@/components/ContentWrapper';
import { Meal } from '@/components/Meal';
import { RecipesProps } from '../../../api/recipe';
import { Footer } from '@/components/Footer';
import { RecipeComponent } from '@/components/Recipe';

export type RecipePageProps = {
    recipe: RecipesProps;
};
export const RecipePage = ({ recipe }: RecipePageProps) => {
    return (
        <Styled.RecipeWrapper>
            <Header red={false} />
            <ContentWrapper>
                <RecipeComponent meals={recipe.meals} />
            </ContentWrapper>
            <Footer red={false} />
        </Styled.RecipeWrapper>
    );
};
