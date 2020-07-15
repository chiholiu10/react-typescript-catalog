import React from 'react';
import SearchInput from '../View/Catalog/SearchInput';
import SearchResult from '../View/Catalog/SearchResult';

const CatalogPage : React.FC = () => {
    return (
        <div>
            <SearchInput/>
            <SearchResult/>
        </div>
    )
}

export default CatalogPage;