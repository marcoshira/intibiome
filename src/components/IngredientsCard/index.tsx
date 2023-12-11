import Link from 'next/link';
import { IngredientModel } from '../../../api/ingredients';
import * as Styled from './styles';
import { formatIngredient } from '../utils/formatIngredient';

export const IngredientsCard = ({
    strDescription,
    strIngredient,
}: IngredientModel) => {
    return (
        <Styled.IngredientsCardWrapper>
            <Link href={`/ingredient/` + formatIngredient(strIngredient)}>
                <h3>{strIngredient}</h3>
                <p>{strDescription}</p>
            </Link>
        </Styled.IngredientsCardWrapper>
    );
};
