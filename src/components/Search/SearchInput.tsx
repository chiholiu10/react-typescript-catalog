import React from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { getData } from '../../actions/index';

interface Props {

}

const SearchInput : React.FC<Props> = () => {
    const dispatch = useDispatch();
    let input: any;

    const getInputValue = (value: string):void => {
        let url = `http://api.tvmaze.com/search/shows?q=${value}`
        passAPI(url);
    }

    const passAPI = (getUrl: string) => {
        axios(getUrl)
            .then(response => {
                dispatch(getData(response))
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

export default SearchInput;