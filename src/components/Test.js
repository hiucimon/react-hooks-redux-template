

import React from 'react';
import {connect} from "../redux/TheStore.js";


const mapStateToProps = (state, props) => ({
    message: `${state.data} ${props.extra}`
});

const mapDispatchToProps = dispatch => ({
    sendMsg: () => dispatch({ type: "RESET_DATA", payload: "null" })
});

const Data = props => {
    return (
        <div>
            You have {props.message} in the store.
            <button onClick={() => props.sendMsg()}>
                Reset From MapDispatchToProps Function
            </button>
        </div>
    );
};

// An example of functional component using the connect HoC (works also with classes)
// const Test = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Data);


export default Test;
