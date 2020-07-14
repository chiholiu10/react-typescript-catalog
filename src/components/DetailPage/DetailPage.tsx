import React from 'react';
import { connect } from 'react-redux';
import history from "../../history";
import Cast from '../View/Details/Cast';
import Summary from '../View/Details/Summary';
import Button from '../View/Details/Button';

interface StateToProps {
    cast: any;
    summary: any;
}

const DetailPage: React.FC<StateToProps> = ({ cast, summary }) => {
    const contentCheck = cast.length === 0 && summary.length === 0;

    if (contentCheck) {
        history.goBack();
    }

    return (
        <div>
            {!contentCheck && ( 
            <div>
                <div className="flex-container container">
                    <Cast />
                    <Summary/>
                </div> 
                <Button/>
            </div>
            )}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        cast: state.catalogData.castList || [],
        summary: state.catalogData.catalogInfo.data || []
    }
}

export default connect(mapStateToProps)(DetailPage);
