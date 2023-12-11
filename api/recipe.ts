// Recipe search template.
// Modelo dos dados retornados de receitas.
export const recipesAPI = {
    meals: [
        {
            idMeal: '52772',
            strMeal: 'Teriyaki Chicken Casserole',
            strDrinkAlternate: null,
            strCategory: 'Chicken',
            strArea: 'Japanese',
            strInstructions:
                'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!',
            strMealThumb:
                'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
            strTags: 'Meat,Casserole',
            strYoutube: 'https://www.youtube.com/watch?v=4aZr5hZXP_s',
            strIngredient1: 'soy sauce',
            strIngredient2: 'water',
            strIngredient3: 'brown sugar',
            strIngredient4: 'ground ginger',
            strIngredient5: 'minced garlic',
            strIngredient6: 'cornstarch',
            strIngredient7: 'chicken breasts',
            strIngredient8: 'stir-fry vegetables',
            strIngredient9: 'brown rice',
            strIngredient10: '',
            strIngredient11: '',
            strIngredient12: '',
            strIngredient13: '',
            strIngredient14: '',
            strIngredient15: '',
            strIngredient16: null,
            strIngredient17: null,
            strIngredient18: null,
            strIngredient19: null,
            strIngredient20: null,
            strMeasure1: '3/4 cup',
            strMeasure2: '1/2 cup',
            strMeasure3: '1/4 cup',
            strMeasure4: '1/2 teaspoon',
            strMeasure5: '1/2 teaspoon',
            strMeasure6: '4 Tablespoons',
            strMeasure7: '2',
            strMeasure8: '1 (12 oz.)',
            strMeasure9: '3 cups',
            strMeasure10: '',
            strMeasure11: '',
            strMeasure12: '',
            strMeasure13: '',
            strMeasure14: '',
            strMeasure15: '',
            strMeasure16: null,
            strMeasure17: null,
            strMeasure18: null,
            strMeasure19: null,
            strMeasure20: null,
            strSource: null,
            strImageSource: null,
            strCreativeCommonsConfirmed: null,
            dateModified: null,
        },
    ],
};

// Specific type for a single recipe.
// Tipo específico de uma receita.
export type RecipeProps = {
    idMeal: string;
    strMeal: string;
    strDrinkAlternate: string | null;
    strCategory: string;
    strArea: string | null;
    strInstructions: string | null;
    strMealThumb: string;
    strTags: string | null;
    strYoutube: string | null;
    strIngredient1: string | null;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
    strIngredient16: string | null;
    strIngredient17: string | null;
    strIngredient18: string | null;
    strIngredient19: string | null;
    strIngredient20: string | null;
    strMeasure1: string | null;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strMeasure16: string | null;
    strMeasure17: string | null;
    strMeasure18: string | null;
    strMeasure19: string | null;
    strMeasure20: string | null;
    strSource: string | null;
    strImageSource: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string | null;
};

// Type for the recipe API return.
// Tipo para o retorno da API.
export type RecipesProps = {
    meals: RecipeProps[];
};
