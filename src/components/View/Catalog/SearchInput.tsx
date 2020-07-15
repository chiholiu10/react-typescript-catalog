import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getData } from "../../../actions/index";
import styled from "styled-components";

export const SearchInput : React.FC = () => {
    const dispatch = useDispatch();
    let input: any;

    const Form = styled.form`
        display: inline-flex;
        width: 100%;
    `;

    const Input = styled.input`
        padding: 10px 15px;
        font-size: 18px;
    `

    const Button = styled.button`
        padding: 10px 15px;
        font-size: 18px;
    `;

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
            <Form className="form" 
                onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()) return;

                getInputValue(input.value);
            }}>

                <Input className="form-input-field disable-outline display-inline"
                    ref={node => (input = node)}
                    placeholder="Search catalog"
                    aria-label="search-input" 
                />
                <Button type="submit" className="btn btn-grey white-color display-inline">
                    Search
                </Button>
            </Form>
        </div>
    )
}

export default SearchInput;