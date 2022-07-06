import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducers } from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducers,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
  // spread operator ...middleware we are using multiple thunk or apply more middleware
);

export default store;


// thunk just allows us to make asynchronous request form our action creatores

// redux dev tools actully be able to connect it and tehn see it through this import  or this 

// createstore=>this is the function which help us to create our store

// combineReducers=>later on we are going to have multiple reducer for different parts of our application so this will conmbine all of them reducers so its just going to combine all of those into one large reducer.

// applyMiddleware is for redux thunks

// initialState is an empty Object