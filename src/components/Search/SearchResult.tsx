import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import ReactMarkdown from "react-markdown";
import axios from 'axios';
import { getCast } from '../../actions/index';
import { Link } from "react-router-dom";

interface StateToProps {
    info: any;
}

const Result: React.FC<StateToProps> = ({ info }) => {
    const dispatch = useDispatch();

    const getId = (id: number) => {
        console.log(id)
        let url = `http://api.tvmaze.com/shows/${id}/cast`;
        passCastingAPI(url);
    }

    const passCastingAPI = (url: string) => {
        axios(url)
            .then(response => {
                console.log(response.data)
                dispatch(getCast(response.data))
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
                            onClick={() => getId(show.show.id)}
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
    console.log(state.catalogData.catalogData)
    return {
        info: state.catalogData.catalogInfo.data || [],
    }
}

export default connect(mapStateToProps)(Result);