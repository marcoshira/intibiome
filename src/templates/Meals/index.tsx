import { Header } from '@/components/Header';
import * as Styled from './styles';
import { ContentWrapper } from '@/components/ContentWrapper';
import { Meal } from '@/components/Meal';
import { MealsProps } from '../../../api/meals';
import { Footer } from '@/components/Footer';

export type MealsPageProps = {
    meals: MealsProps;
};
export const MealsPage = ({ meals }: MealsPageProps) => {
    return (
        <Styled.MealsWrapper>
            <Header red={false} />
            <ContentWrapper>
                {meals?.meals ? (
                    meals?.meals.map((meal, index) => {
                        return <Meal key={index} {...meal} />;
                    })
                ) : (
                    <h2 className="MealsNull">
                        Não possuímos nenhuma receita com este ingrediente. =(
                    </h2>
                )}
            </ContentWrapper>
            <Footer red={false} />
        </Styled.MealsWrapper>
    );
};
