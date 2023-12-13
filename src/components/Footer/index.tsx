import Image from 'next/image';
import * as Styled from './styles';

export type FooterProps = {
    links?: string[];
};
export const Footer = ({ links }: FooterProps) => {
    return (
        <Styled.FooterWrapper>
            <div className="footerLinks">
                {links?.map((val, index) => {
                    return <p key={index}>{val}</p>;
                })}
            </div>
            <div className="logos">
                <Image
                    src="/images/ulabs.png"
                    alt="u-labs logo"
                    width={116}
                    height={29}
                />
                <Image
                    src="/images/social.png"
                    alt="instagram logo"
                    width={42}
                    height={42}
                />
            </div>
        </Styled.FooterWrapper>
    );
};
