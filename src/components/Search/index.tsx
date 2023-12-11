import { useRouter } from 'next/router';
import { HeaderProps } from '../Header';
import * as Styled from './styles';
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline';
import { FormEvent, useState } from 'react';

export const Search = ({ red }: HeaderProps) => {
    // Inserting the input value into a variable to pass it to the router.
    // Colocando o valor do input numa variável, para assim passá-lo para o router.
    const [inputValue, setInputValue] = useState('');
    const router = useRouter();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push('/search/' + inputValue);
    };

    return (
        <Styled.SearchWrapper red={red}>
            <Styled.SearchIconWrapper>
                <SearchOutline className="Search" />
                <form onSubmit={handleSubmit}>
                    <input
                        pattern="^.+$"
                        type="text"
                        required
                        className="Text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <input type="submit" className="Submit" />
                </form>
            </Styled.SearchIconWrapper>
        </Styled.SearchWrapper>
    );
};
