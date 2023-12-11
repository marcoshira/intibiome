import Link from 'next/link';
import { MealProps } from '../../../api/meals';
import * as Styled from './styles';

export const Meal = ({ idMeal, strMeal, strMealThumb }: MealProps) => {
    return (
        <Styled.MealWrapper>
            <Link href={`/recipe/${idMeal}`}>
                <img src={strMealThumb} alt={strMeal + ` image`} />
                <h3>{strMeal}</h3>
            </Link>
        </Styled.MealWrapper>
    );
};
