import * as Styled from './styles';

export type ContentWrapperProps = {
    children?: React.ReactNode;
};
export const ContentWrapper = ({ children }: ContentWrapperProps) => {
    return (
        <Styled.ContentWrapperContainer>
            {children}
        </Styled.ContentWrapperContainer>
    );
};
