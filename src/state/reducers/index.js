import { actionTypes } from "../actions";

export const initialState = {
  isFetching: false,
  errorMessage: "",
  artistData: [],
  artist: [],
  releases: [],
  products: [],
  productInfo: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_END:
      return {
        ...state,
        isFetching: false,
      };
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case actionTypes.GET_ALL_ARTISTS:
      return {
        ...state,
        artistData: action.payload,
      };
    case actionTypes.SET_BIO_DATA:
      return {
        ...state,
        releases: action.payload[0],
        artist: action.payload[1],
      };
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.FETCH_PRICE_PRODUCT:
      return {
        ...state,
        productInfo: action.payload
      }
    default:
      return state;
  }
};
