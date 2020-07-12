import React from 'react';
import SearchInput from '../Search/SearchInput';
import SearchResult from '../Search/SearchResult';

interface Props {}

const MainPage : React.FC<Props> = () => {
    return (
        <div>
            <SearchInput/>
            <SearchResult/>
        </div>
    )
}

export default MainPage;