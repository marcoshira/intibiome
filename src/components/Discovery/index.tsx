import Image from 'next/image';
import * as Styled from './styles';

export type DiscoveryProps = {
    text: string;
    imgSrc: string;
    alt: string;
};
export const Discovery = ({ alt, imgSrc, text }: DiscoveryProps) => {
    return (
        <Styled.DiscoveryWrapper>
            <Image src={imgSrc} alt={alt} width={357} height={232} />
            <p>{text}</p>
        </Styled.DiscoveryWrapper>
    );
};
