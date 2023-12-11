import { Header } from '@/components/Header';
import { IngredientsModel } from '../../../api/ingredients';
import * as Styled from './styles';
import { ContentWrapper } from '@/components/ContentWrapper';
import { Footer } from '@/components/Footer';
import { IngredientsCard } from '@/components/IngredientsCard';

export const IngredientsPage = ({ meals }: IngredientsModel) => {
    return (
        <Styled.IngredientsPageWrapper>
            <Header red={false} />
            <ContentWrapper>
                {meals.map((ingredient, index) => {
                    return <IngredientsCard key={index} {...ingredient} />;
                })}
            </ContentWrapper>
            <Footer red={false} />
        </Styled.IngredientsPageWrapper>
    );
};
