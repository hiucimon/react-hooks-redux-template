
// import React, { createContext, useReducer, useContext } from "react";

import reducer from "./reducers/MainReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore  } from "redux";
import ReduxPromise from "redux-promise";

// import { ThemeContext, UserContext, StoreContext } from '../TheContext';

const options=[];
const composeEnhancers = composeWithDevTools(options);

const customMiddleware = store => next => action => {
    console.log("Action Triggered");
    console.log(action);
    next(action);
};

const reduxMiddleware = store => next => action => {
    console.log("Action Triggered");
    console.log(action);
    composeWithDevTools(
        applyMiddleware(ReduxPromise),
        // other store enhancers if any
    );
    next(action);
};

const middleware=[reduxMiddleware,customMiddleware];

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        serialize: {
            options: {
                undefined: true,
                function: function(fn) { return fn.toString() }
            }
        }
    })
);

// const connect = (
//     mapStateToProps = () => {},
//     mapDispatchToProps = () => {}
// ) => WrappedComponent => {
//     return props => {
//         const { dispatch, state } = useContext(StoreContext);
//         return (
//             <WrappedComponent
//                 dispatch={dispatch}
//                 {...mapStateToProps(state, props)}
//                 {...mapDispatchToProps(dispatch)}
//             />
//         );
//     };
// };

export default store;

// export { connect };
