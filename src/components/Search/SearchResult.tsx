import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import axios from 'axios';
import { 
    getCast, 
    getIndex 
} from '../../actions/index';

import { Link } from "react-router-dom";

interface StateToProps {
    info: any;
}

const SearchResult: React.FC<StateToProps> = ({ info }) => {
    const dispatch = useDispatch();

    const getId = (id: number, index: number) => {
        let url = `http://api.tvmaze.com/shows/${id}/cast`;
        dispatch(getIndex(index));
        passCastingAPI(url);
    }

    const passCastingAPI = (url: string) => {
        axios(url)
            .then(response => {
           
                dispatch(getCast(response.data))
                console.log('axios')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            {info.map((show: any, index: number) => {
                return (
                    <div key={show.show.id}>
                        <ReactMarkdown source={show.show.name}/>

                        {show.show.image && <img src={show.show.image.medium} alt={show.show.name} />}
                        
                        {show.show.genres.map((showGenre: string, index: number) => {
                            return (
                                <div key={index}>
                                    <ReactMarkdown source={showGenre}/>
                                </div>
                            )
                        })}

                        <Link
                            to={`/DetailPage/${show.show.id}`}
                            onClick={() => getId(show.show.id, index)}
                            >
                            <div>See details...</div>
                        </Link>
                        
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        info: state.catalogData.catalogInfo.data || [],
    }
}

export default connect(mapStateToProps)(SearchResult);