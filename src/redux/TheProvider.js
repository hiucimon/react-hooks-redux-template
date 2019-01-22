
import React from "react";
import store from './TheStore';
import {Provider} from "react-redux";

const TheProvider = ({ children }) => {
    console.log(store);
    store.dispatch({
        type: 'FETCH_DATA',
        text: 'Use Redux'
    })
    return <Provider store={store}>{children}</Provider>;
};

export { TheProvider };

