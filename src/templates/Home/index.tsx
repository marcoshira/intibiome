import { Header } from '@/components/Header';
import * as Styled from './styles';
import { ContentWrapper } from '@/components/ContentWrapper';
import { CategoriesProps, categoriesAPI } from '../../../api/categories';
import { Category } from '@/components/Category';
import { Footer } from '@/components/Footer';
// import { Content } from '@/components/Content';
// import { Hero } from '@/components/Hero';

export type HomeProps = {
    categories: CategoriesProps;
};
export const Home = ({ categories }: HomeProps) => {
    return (
        <Styled.Home>
            <Header red={false} />
            <ContentWrapper>
                {categories?.categories.map((cat, index) => {
                    return <Category key={index} {...cat} />;
                })}
            </ContentWrapper>
            <Footer red={false} />
        </Styled.Home>
    );
};
