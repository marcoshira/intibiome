import Image from 'next/image';
import * as Styled from './styles';

export type BannerProps = {
    imgSrc: string;
    alt: string;
    imgMobile?: string;
};
export const Banner = ({ imgSrc, alt, imgMobile }: BannerProps) => {
    return (
        <Styled.BannerWrapper>
            <Image
                src={imgSrc}
                alt={alt}
                width={1920}
                height={550}
                className="desktopImg"
            />
            <Image
                src={imgMobile ? imgMobile : imgSrc}
                alt={alt}
                width={1920}
                height={550}
                className="mobileImg"
            />
        </Styled.BannerWrapper>
    );
};
