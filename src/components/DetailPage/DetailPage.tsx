import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import history from "../../history";
import ReactMarkdown from "react-markdown";
import { emptyDetail } from '../../actions/index';
import { useDispatch } from "react-redux";

interface StateToProps {
    cast: any;
    summary: any;
    currentIndex: number;
}

const DetailPage: React.FC<StateToProps> = ({ cast, summary, currentIndex }) => {
    const contentCheck = cast.length == 0 && summary.length == 0;
    
    if (contentCheck) {
        history.goBack();
    }

    function createMarkup() {
        return {__html: summary[currentIndex].show.summary};
    }
    
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(emptyDetail(null))
        history.goBack();
    }
    
    return (
        <div>
            {!contentCheck && ( <div>
                {cast.map((actor: any, index: number) => {
                    return (
                        <div key={index}>
                            <ReactMarkdown source={actor.person.name}/>
                        </div>
                    )
                })}
                <div dangerouslySetInnerHTML={createMarkup()} />
                <button onClick={handleClick}>Back to catalog</button>
            </div> )}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        cast: state.catalogData.castList || [],
        summary: state.catalogData.catalogInfo.data || [],
        currentIndex: state.catalogData.summaryIndex
    }
}

export default connect(mapStateToProps)(DetailPage);
