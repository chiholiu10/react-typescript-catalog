import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from "react-markdown";

interface StateToProps {
    summary: any;
    currentIndex: number;
}

const Summary: React.FC<StateToProps> = ({ summary, currentIndex }) => {
    function createMarkup() {
        return {__html: summary[currentIndex].show.summary};
    }
    
    return (
        <div>
            <div className="flex-item-right">
                <h1><ReactMarkdown source={summary[currentIndex].show.name}/></h1>
                <h1>Summary</h1>
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        summary: state.catalogData.catalogInfo.data || [],
        currentIndex: state.catalogData.summaryIndex,
        
    }
}

export default connect(mapStateToProps)(Summary);
