import React from 'react';
import axios from 'axios';

interface Props {
}

const Search : React.FC<Props> = ({ }) => {
    let input: any;

    const getInputValue = (value: string):void => {
        console.log(value)
        let url = `http://api.tvmaze.com/singlesearch/shows?q=${value}`
        passAPI(url);
    }

    const passAPI = (getUrl: string) => {
        axios(getUrl)
            .then(response => {
                console.log(response)
            })
            
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()) return;

                getInputValue(input.value);
            }}>
                <input
                    ref={node => (input = node)}
                    placeholder="Search catalog"
                />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search;