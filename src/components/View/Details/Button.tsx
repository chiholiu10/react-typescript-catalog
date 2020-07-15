import React from 'react';
import history from "../../../history";
import { emptyDetail } from '../../../actions/index';
import { useDispatch } from "react-redux";
import styled from 'styled-components';

export const Button: React.FC = () => {
    const dispatch = useDispatch();

    const Button = styled.button`
        font-size: 16px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        color: white;
    `;

    function handleClick() {
        dispatch(emptyDetail())
        history.goBack();
    }
    
    return (
        <div>
                <div>
                    <div className="flex-container container">
                        <Button onClick={handleClick} data-testid="button-test" className="btn btn-grey btn-detail-page">Back to catalog</Button>
                    </div>
                </div>
        </div>
    )
}

export default Button;