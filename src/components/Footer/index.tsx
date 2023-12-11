import { HeaderProps } from '../Header';
import * as Styled from './styles';

export const Footer = ({ red }: HeaderProps) => {
    return (
        <Styled.FooterWrapper red={red}>
            <h4>
                by{' '}
                <a
                    href="https://marcoshirazawa.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Marcos Hirazawa
                </a>
            </h4>
        </Styled.FooterWrapper>
    );
};
