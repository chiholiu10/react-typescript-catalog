import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from "react-markdown";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

interface StateToProps {
    info: any;
}

const Result: React.FC<StateToProps> = ({ info }) => {
    return (
        <div>
            {info.map((show: any) => {
                return (
                    <div key={show.show.id}>
                        <ReactMarkdown source={show.show.name}/>

                        {show.show.image && <img src={show.show.image.medium}/>}
                        
                        {show.show.genres.map((showGenre: string, index: number) => {
                            return (
                                <div key={index}>
                                    <ReactMarkdown source={showGenre}/>
                                </div>
                            )
                        })}

                        <Router>
                            <ul>
                                <li>
                                    <Link to="/">See detais..</Link>
                                </li>
                            </ul>
                        </Router>
                        
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        info: state.catalogData.catalogInfo.data || []
    }
}

export default connect(mapStateToProps)(Result);