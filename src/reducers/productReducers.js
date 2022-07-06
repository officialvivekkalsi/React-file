import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

export const productListReducers = (state = { Products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state,loading: true, Products: [] };  
    case PRODUCT_LIST_SUCCESS:
      console.log('payload',action.payload)
      return { ...state,loading: false, Products: action.paylaod };
      // action.payload because we have loaded our data
    case PRODUCT_LIST_FAIL:
      return { ...state,Products:[],loading: false, error: action.payload };
    default:
      return state;
  }
};

// Reducer is simply a function that takes our current state and its is going to take an action what we want to do to this state like loading  data and depending on what that action type is,this page can have multiple actions