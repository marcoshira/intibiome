import Head from 'next/head';
import { Home } from '../templates/Home';

export default function Index() {
    return (
        <>
            <Head>
                <title>intibiome</title>
            </Head>
            <Home title="When it comes to caring for our most intimate areas, we've lost our connection. Embarrassed, unwilling, or unable to communicate with others, we’re needlessly neglecting the parts of our bodies that need it most. We're here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care." />
        </>
    );
}
