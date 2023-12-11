import Link from 'next/link';
import { AreaModel } from '../../../api/areas';
import * as Styled from './styles';

export const AreaCard = ({ strArea }: AreaModel) => {
    return (
        <Styled.AreaCardWrapper>
            <Link href={'/area/' + strArea}>
                <h3>{strArea} Food</h3>
            </Link>
        </Styled.AreaCardWrapper>
    );
};
