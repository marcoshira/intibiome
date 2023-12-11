import Head from 'next/head';
import axios from 'axios';
import { MealsProps } from '../../../api/meals';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { CategoryProps } from '../../../api/categories';
import { MealsPage } from '@/templates/Meals';

type PageProps = {
    apiData: MealsProps;
};

type QueryProps = {
    slug: string;
};

type Path = {
    params: {
        slug: string;
    };
};

export default function Index({ apiData }: PageProps) {
    return (
        <>
            <Head>
                <title>A Rice</title>
            </Head>
            <MealsPage meals={apiData} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths<QueryProps> = async () => {
    // Fetch the dynamic paths for your pages.
    // Busca os paths da página.
    const result = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
    );
    const data = result.data;

    const categories: CategoryProps[] = data.categories;

    // Set the possible paths by the strCategory.
    // Define os possíveis paths pela strCategory.
    const paths: Path[] = categories.map((cat) => ({
        params: { slug: cat.strCategory },
    }));
    return {
        paths,
        fallback: false,
    };
};

// Gets the data from the API before the page is rendered.
// Pega os dados da API antes de renderizar a página.
export const getStaticProps: GetStaticProps<PageProps, QueryProps> = async (
    context: GetStaticPropsContext<QueryProps>,
) => {
    // Gets the param set at the link.
    // Busca o parâmetro imposto no link.
    const { params } = context;
    const slug = params?.slug;
    try {
        const result = await axios.get(
            'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + slug,
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
};
