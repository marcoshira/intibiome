import * as Styled from './styles';

export type ButtonProps = {
    title?: string;
};
export const Button = ({ title }: ButtonProps) => {
    return (
        <Styled.ButtonWrapper>
            <p>{title}</p>
        </Styled.ButtonWrapper>
    );
};
