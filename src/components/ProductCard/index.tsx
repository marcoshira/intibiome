import Image from 'next/image';
import * as Styled from './styles';

export type ProductCardProps = {
    title: string;
    text: string;
    imgSrc: string;
    altImg: string;
    color: 'blue' | 'green' | 'red';
};
export const ProductCard = ({
    title,
    color,
    imgSrc,
    text,
    altImg,
}: ProductCardProps) => {
    return (
        <Styled.ProductCardWrapper color={color}>
            <Image src={imgSrc} alt={altImg} width={356} height={351} />
            <p>{text}</p>
            <div className="title">
                <p>{title}</p>
            </div>
        </Styled.ProductCardWrapper>
    );
};
