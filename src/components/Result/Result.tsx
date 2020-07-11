import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from "react-markdown";

interface StateToProps {
    info: any;
}



const Result: React.FC<StateToProps> = ({ info }) => {
    return (
        <div>
            {info.map((show: any) => {
                console.log(show.show)
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
                        <a href={`http://api.tvmaze.com/lookup/shows?thetvdb=${show.show.externals.thetvdb}`}>Open link</a>
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