import React from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { getData } from '../../../actions/index';;

export const SearchInput : React.FC = () => {
    const dispatch = useDispatch();
    let input: any;

    const getInputValue = (value: string):void => {
        let url = `https://api.tvmaze.com/search/shows?q=${value}`
        passAPI(url);
    }

    const passAPI = (getUrl: string) => {
        axios(getUrl)
            .then(response => {
                dispatch(getData(response))
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="container">
            <h1>Keyword</h1>
            <form className="form display-inline-flex" 
                onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()) return;

                getInputValue(input.value);
            }}>

                <input className="form-input-field disable-outline display-inline"
                    ref={node => (input = node)}
                    placeholder="Search catalog"
                    aria-label="search-input" 
                />
                <button type="submit" className="btn btn-grey white-color display-inline">
                    Search
                </button>
            </form>
        </div>
    )
}