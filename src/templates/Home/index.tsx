import { Header } from '@/components/Header';
import * as Styled from './styles';
import { Banner } from '@/components/Banner';
import { Article } from '@/components/Article';
import Image from 'next/image';
import { Section } from '@/components/Section';
import { ProductCard } from '@/components/ProductCard';
import { Discovery } from '@/components/Discovery';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';

export type HomeProps = {
    title?: string;
};
export const Home = ({ title }: HomeProps) => {
    return (
        <Styled.Home>
            <Header />
            <Banner
                imgSrc="/images/banner-hero.png"
                imgMobile="/images/banner-mobile.png"
                alt="banner hero"
            />
            <Article
                title="we're here to help"
                content="When it comes to caring for our most intimate areas, we've lost our connection. Embarrassed, unwilling, or unable to communicate with others, we're needlessly neglecting the parts of our bodies that need it most. We're here to help. Providing you with the expertise, knowledge and products you need to feel confident in your personal care."
            />
            <Image
                src="/images/icons.png"
                alt="icons"
                height={259}
                width={1132}
                className="iconsImg"
            />
            <Article
                title="whatever your age. whatever your lifestyle. whatever your interests."
                content="Co-created with gynaecologists, our revolutionary products have been expertly developed to support your intimate microbiome and pH balance, and strengthen overall natural health. As the experts in intimate hygiene, we want to bring discussion about intimate wellness care out of the dark and demystify the taboos that surround it."
            />
            <Section title="our products">
                <ProductCard
                    imgSrc="/images/wash blue.png"
                    altImg="Wash blue"
                    color="blue"
                    text="intibiome wellness daily intimate wash"
                    title="wellness"
                />
                <ProductCard
                    imgSrc="/images/wash green.png"
                    altImg="Wash green"
                    color="green"
                    text="intibiome active extra protection intimate wash"
                    title="active"
                />
                <ProductCard
                    imgSrc="/images/wash red.png"
                    altImg="Wash red"
                    color="red"
                    text="intibiome agecare dryness relief intimate wash"
                    title="wellness"
                />
            </Section>
            <Banner
                imgSrc="/images/banner2.png"
                imgMobile="/images/banner2-mobile.png"
                alt="banner products"
            />
            <Section title="keep up to date with our discoveries">
                <Discovery
                    alt="young woman smiling"
                    imgSrc="/images/disco1.png"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Discovery
                    alt="old woman smiling"
                    imgSrc="/images/disco2.png"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Discovery
                    alt="water bubbles"
                    imgSrc="/images/disco3.png"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
            </Section>
            <Button title="see more" />
            <Footer
                links={[
                    'contact us',
                    'faq',
                    'site map',
                    'privacy policy',
                    'legal notice',
                ]}
            />
        </Styled.Home>
    );
};
