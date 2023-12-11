import Link from 'next/link';
import { CategoryProps } from '../../../api/categories';
import { truncateString } from '../utils/truncateString';
import * as Styled from './styles';

export const Category = ({
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
}: CategoryProps) => {
    return (
        <Styled.CategoryWrapper>
            <Link href={`/meal/${strCategory}`}>
                <Styled.CategoryTextWrapper>
                    <h3>{strCategory}</h3>
                    <p>{truncateString(strCategoryDescription, 550)}</p>
                </Styled.CategoryTextWrapper>
                <img src={strCategoryThumb} alt={strCategory + ` image`} />
            </Link>
        </Styled.CategoryWrapper>
    );
};
