import * as Styled from './styles';

export type ArticleProps = {
    title?: string;
    content?: string;
};
export const Article = ({ title, content }: ArticleProps) => {
    return (
        <Styled.ArticleWrapper>
            <h3>{title}</h3>
            <p>{content}</p>
        </Styled.ArticleWrapper>
    );
};
