import React from 'react';
import history from "../../../history";
import { emptyDetail } from '../../../actions/index';
import { useDispatch } from "react-redux";


export const Button: React.FC = () => {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(emptyDetail())
        history.goBack();
    }
    
    return (
        <div>
                <div>
                    <div className="flex-container container">
                        <button onClick={handleClick} className="btn btn-grey white-color btn-detail-page">Back to catalog</button>
                    </div>
                </div>
        </div>
    )
}

export default Button;
