import Head from 'next/head';
import { Home } from '../templates/Home';
import axios from 'axios';
import { IngredientsModel } from '../../api/ingredients';
import { IngredientsPage } from '@/templates/IngredientsPage';

type PageProps = {
    apiData: IngredientsModel;
};

export default function Ingredients({ apiData }: PageProps) {
    return (
        <>
            <Head>
                <title>A Rice</title>
            </Head>
            <IngredientsPage meals={apiData.meals} />
        </>
    );
}

// Gets the data from the API before the page is rendered.
//Pega os dados da API antes de renderizar a página.
export async function getStaticProps() {
    try {
        const result = await axios.get(
            'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
        );
        const data = result.data;
        return {
            props: {
                apiData: data,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                apiData: null,
            },
        };
    }
}
