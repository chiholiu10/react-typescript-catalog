import React from 'react';
import { connect } from 'react-redux';
import history from "../../history";
import ReactMarkdown from "react-markdown";
import { emptyDetail } from '../../actions/index';
import { useDispatch } from "react-redux";

interface StateToProps {
    cast: any;
}

const Result: React.FC<StateToProps> = ({ cast }) => {
    console.log(cast)
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(emptyDetail())
        history.goBack();
    }
    
    return (
        <div>
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
    return {
        cast: state.catalogData.castList || []
    }
}

export default connect(mapStateToProps)(Result);
