import Head from 'next/head';
import { Home } from '../templates/Home';
import axios from 'axios';
import { CategoriesProps } from '../../api/categories';

type PageProps = {
    apiData: CategoriesProps;
};

export default function Index({ apiData }: PageProps) {
    return (
        <>
            <Head>
                <title>A Rice</title>
            </Head>
            <Home categories={apiData} />
        </>
    );
}

// Gets the data from the API before the page is rendered.
//Pega os dados da API antes de renderizar a página.
export async function getStaticProps() {
    try {
        const result = await axios.get(
            'https://www.themealdb.com/api/json/v1/1/categories.php',
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
