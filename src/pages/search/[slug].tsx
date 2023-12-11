import Head from 'next/head';
import axios from 'axios';
import { RecipesProps } from '../../../api/recipe';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { MealsPage } from '@/templates/Meals';

type PageProps = {
    apiData: RecipesProps;
};

type QueryProps = {
    slug: string;
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

/* 
Gets the data from the API before the page is rendered. Since there's no way to get all of the
possible ingredients, it was used the getServerSideProps.
*/
/*
Pega os dados da API antes de renderizar a página.
Como é impossível buscar todos os possíveis ingredientes, foi usado getServerSideProps.
*/
export const getServerSideProps: GetServerSideProps<
    PageProps,
    QueryProps
> = async (context: GetServerSidePropsContext<QueryProps>) => {
    // Gets the param set at the link.
    // Busca o parâmetro imposto no link.
    const { params } = context;
    const slug = params?.slug;
    try {
        const result = await axios.get(
            'https://www.themealdb.com/api/json/v1/1/search.php?s=' + slug,
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
