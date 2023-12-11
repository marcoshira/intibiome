import * as Styled from './styles';
import { RecipeProps, RecipesProps } from '../../../api/recipe';

type Recipe = RecipesProps;

export const RecipeComponent = ({ meals }: Recipe) => {
    // Putting all the ingredients together so it is easier to work with.
    // Colocando todos os ingredientes juntos, assim facilidando o trabalho.
    const ingredients: (string | null)[] = [
        meals[0].strIngredient1,
        meals[0].strIngredient2,
        meals[0].strIngredient3,
        meals[0].strIngredient4,
        meals[0].strIngredient5,
        meals[0].strIngredient6,
        meals[0].strIngredient7,
        meals[0].strIngredient8,
        meals[0].strIngredient9,
        meals[0].strIngredient10,
        meals[0].strIngredient11,
        meals[0].strIngredient12,
        meals[0].strIngredient13,
        meals[0].strIngredient14,
        meals[0].strIngredient15,
        meals[0].strIngredient16,
        meals[0].strIngredient17,
        meals[0].strIngredient18,
        meals[0].strIngredient19,
        meals[0].strIngredient20,
    ];

    // Putting all the measures together so it is easier to work with.
    // Colocando todas as medidas juntas, assim facilidando o trabalho.
    const measures: (string | null)[] = [
        meals[0].strMeasure1,
        meals[0].strMeasure2,
        meals[0].strMeasure3,
        meals[0].strMeasure4,
        meals[0].strMeasure5,
        meals[0].strMeasure6,
        meals[0].strMeasure7,
        meals[0].strMeasure8,
        meals[0].strMeasure9,
        meals[0].strMeasure10,
        meals[0].strMeasure11,
        meals[0].strMeasure12,
        meals[0].strMeasure13,
        meals[0].strMeasure14,
        meals[0].strMeasure15,
        meals[0].strMeasure16,
        meals[0].strMeasure17,
        meals[0].strMeasure18,
        meals[0].strMeasure19,
        meals[0].strMeasure20,
    ];

    return (
        <Styled.RecipeWrapper>
            <div className="FlexItem">
                <Styled.ThumbWrapper>
                    <img
                        src={`${meals[0].strMealThumb}/preview`}
                        alt={meals[0].strMeal}
                    />
                    <section className="TitleContainer">
                        <h3>{meals[0].strMeal}</h3>
                        {meals[0].strTags && (
                            <p className="Tags">Tags: {meals[0].strTags}</p>
                        )}
                    </section>
                </Styled.ThumbWrapper>
                <Styled.ThumbWrapper className="IngredientsContainer">
                    <h4>Ingredients:</h4>
                    <section>
                        {ingredients.map((ing, index) => {
                            if (ing) {
                                return (
                                    <p key={index}>
                                        {measures[index]} - {ing}
                                    </p>
                                );
                            }
                        })}
                    </section>
                </Styled.ThumbWrapper>
            </div>
            <Styled.InstructionsWrapper>
                <div>
                    <h3>Instructions</h3>
                    <p>{meals[0].strInstructions}</p>
                    <p>
                        This recipe comes all the way from the{' '}
                        {meals[0].strArea}s!
                    </p>
                </div>
                <div>
                    {meals[0].strYoutube && (
                        <p className="Video">
                            Here's a video tutorial in case you are having
                            trouble:{' '}
                            <a
                                href={meals[0].strYoutube}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {meals[0].strYoutube}
                            </a>
                        </p>
                    )}
                    {meals[0].strSource && (
                        <p className="Video">
                            Here's where we got the idea for this recipe:{' '}
                            <a
                                href={meals[0].strSource}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {meals[0].strSource}
                            </a>
                        </p>
                    )}
                </div>
            </Styled.InstructionsWrapper>
        </Styled.RecipeWrapper>
    );
};
