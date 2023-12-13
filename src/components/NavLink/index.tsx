import * as Styled from './styles';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';

export type NavLinkProps = {
    text?: string;
    dropdown?: string[];
    className?: string;
};
export const NavLink = ({ text, dropdown, className }: NavLinkProps) => {
    return (
        <Styled.NavLinkWrapper className={className}>
            <p>{text}</p>
            {dropdown?.length && <ArrowDown />}
            <div className="dropdown">
                {dropdown?.map((val, index) => {
                    return <p key={index}>{val}</p>;
                })}
            </div>
        </Styled.NavLinkWrapper>
    );
};
