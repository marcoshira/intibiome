// All areas search template.
// Modelo dos dados retornados ao procurar todas as áreas.
export const areasAPI = {
    meals: [
        {
            strArea: 'American',
        },
        {
            strArea: 'British',
        },
        {
            strArea: 'Canadian',
        },
        {
            strArea: 'Chinese',
        },
        {
            strArea: 'Croatian',
        },
        {
            strArea: 'Dutch',
        },
        {
            strArea: 'Egyptian',
        },
        {
            strArea: 'Filipino',
        },
        {
            strArea: 'French',
        },
        {
            strArea: 'Greek',
        },
        {
            strArea: 'Indian',
        },
        {
            strArea: 'Irish',
        },
        {
            strArea: 'Italian',
        },
        {
            strArea: 'Jamaican',
        },
        {
            strArea: 'Japanese',
        },
        {
            strArea: 'Kenyan',
        },
        {
            strArea: 'Malaysian',
        },
        {
            strArea: 'Mexican',
        },
        {
            strArea: 'Moroccan',
        },
        {
            strArea: 'Polish',
        },
        {
            strArea: 'Portuguese',
        },
        {
            strArea: 'Russian',
        },
        {
            strArea: 'Spanish',
        },
        {
            strArea: 'Thai',
        },
        {
            strArea: 'Tunisian',
        },
        {
            strArea: 'Turkish',
        },
        {
            strArea: 'Unknown',
        },
        {
            strArea: 'Vietnamese',
        },
    ],
} as AreasModel;

// Type for the all areas API return.
// Tipo para o retorno da API.
export type AreasModel = {
    meals: AreaModel[];
};

// Specific type for a single area.
// Tipo específico de uma área.
export type AreaModel = {
    strArea: string;
};
