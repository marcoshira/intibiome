import { ReactNode } from 'react';
import * as Styled from './styles';

export type SectionProps = {
    title?: string;
    children?: ReactNode;
};
export const Section = ({ title, children }: SectionProps) => {
    return (
        <Styled.SectionWrapper>
            <h3>{title}</h3>
            <div className="content">{children}</div>
        </Styled.SectionWrapper>
    );
};
