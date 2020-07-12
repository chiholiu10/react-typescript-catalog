import React from 'react';
import { connect } from 'react-redux';

interface StateToProps {
    info: any;
}

const Result: React.FC<StateToProps> = ({ info }) => {
    return (
        <div>
           Detail Page
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        info: state.catalogData.catalogInfo.data || []
    }
}

export default connect(mapStateToProps)(Result);