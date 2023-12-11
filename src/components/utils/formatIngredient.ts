// Function that turns the string into lowercase and replaces the spacebars with underlines.
// Função que coloca a string em letra minúscula e troca os espaços por underlines.
export function formatIngredient(ingredient: string): string {
    return ingredient.toLowerCase().replaceAll(' ', '_');
}
