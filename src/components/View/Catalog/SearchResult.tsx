import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import axios from 'axios';
import { getCast, getIndex } from '../../../actions/index';
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
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            {info.map((show: any, index: number) => {
                console.log(show.show.image)
                return (
                    <div key={show.show.id} className="flex-container container">

                        <div className="flex-item-left">
                            { show.show.image !== null ? 
                            <img src={show.show.image.original} alt={show.show.name} className="image-size"/> : 
                            <img src="https://i.ibb.co/1LH6TZb/fallback-image.png" alt={show.show.name} className="image-size"/>}
                        </div>

                        <div className="flex-item-right">
                            <div className="title-container">
                                <h1 className="display-inline font-size">Title:</h1>

                                <div className="display-inline font-size">
                                    <ReactMarkdown source={show.show.name}/>
                                </div>
                            </div>

                            <div className="genre-container">
                                <h1 className="display-inline font-size">Genre:</h1>
                                {show.show.genres.map((showGenre: string, index: number) => {
                                    return (
                                        <div key={index} className="display-inline font-size">
                                            <ReactMarkdown source={showGenre}/>
                                        </div>
                                    )
                                })}
                            </div>

                            <Link 
                                className="button-link"
                                to={`/DetailPage/${show.show.id}`}
                                onClick={() => getId(show.show.id, index)}
                            >
                                <div className="btn btn-grey white-color">See details...</div>
                            </Link>
                        </div>
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