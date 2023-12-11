import { Header } from '@/components/Header';
import * as Styled from './styles';
import { ContentWrapper } from '@/components/ContentWrapper';
import { Footer } from '@/components/Footer';
import { AreasModel } from '../../../api/areas';
import { AreaCard } from '@/components/AreaCard';

export type AreasPageProps = {
    title?: string;
};
export const AreasPage = ({ meals }: AreasModel) => {
    return (
        <Styled.AreasPageWrapper>
            <Header red={false} />
            <ContentWrapper>
                {meals.map((area, index) => {
                    return <AreaCard key={index} {...area} />;
                })}
            </ContentWrapper>
            <Footer red={false} />
        </Styled.AreasPageWrapper>
    );
};
