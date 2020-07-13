import React from 'react';
import { connect } from 'react-redux';
import history from "../../history";
import ReactMarkdown from "react-markdown";

interface StateToProps {
    cast: any;
    summary: any;
    pageSecured: boolean;
}

const Result: React.FC<StateToProps> = ({ cast }) => {
    function handleClick() {
        history.goBack();
    }
    
    return (
        <div>
            Cast
            <div>
                {cast.map((actor: any, index: number) => {
                    return (
                        <div key={index}>
                            <ReactMarkdown source={actor.person.name}/>
                        </div>
                    )
                })}
            </div>
            <button onClick={handleClick}>Back to catalog</button>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state.catalogData.showDetail)
    return {
        cast: state.catalogData.castList || [],
        summary: state.catalogData.catalogInfo.data || [],
        pageSecured: state.catalogData.showDetail 

    }
}

export default connect(mapStateToProps)(Result);
