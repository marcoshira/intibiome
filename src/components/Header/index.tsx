import Image from 'next/image';
import * as Styled from './styles';
import { Menu } from '../Menu';

export const Header = () => {
    return (
        <Styled.HeaderWrapper>
            <Image
                src="/images/header.png"
                alt="header image"
                width={195}
                height={79}
            />
            <Image
                src="/images/ic.search.svg"
                alt="search image"
                width={25}
                height={25}
                className="headerSearch"
            />
            <Menu />
        </Styled.HeaderWrapper>
    );
};
