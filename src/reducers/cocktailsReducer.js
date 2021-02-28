import React from 'react';

export const COCKTAILS_DATA_REQUESTED = 'COCKTAILS_DATA_REQUESTED';
export const COCKTAILS_DATA_REQUEST_SUCCEEDED =
  'COCKTAILS_DATA_REQUEST_SUCCEEDED';
export const COCKTAILS_DATA_REQUEST_FAILED = 'COCKTAILS_DATA_REQUEST_FAILED';

export const cocktailsDataRequested = () => ({
  type: COCKTAILS_DATA_REQUESTED,
});

export const cocktailsDataRequestSucceeded = (cocktails) => ({
  type: COCKTAILS_DATA_REQUEST_SUCCEEDED,
  payload: { cocktails },
});

export const cocktailsDataRequestFailed = (error) => ({
  type: COCKTAILS_DATA_REQUEST_FAILED,
  payload: { error },
});

export const CocktailsContext = React.createContext();

export const initialState = {
  cocktails: [],
  loading: false,
  errorMessage: '',
};

export const cocktailsReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case COCKTAILS_DATA_REQUESTED:
      return {
        ...state,
        loading: false,
        errorMessage: '',
      };
    case COCKTAILS_DATA_REQUEST_SUCCEEDED: {
      return {
        ...state,
        cocktails: payload.cocktails,
      };
    }
    case COCKTAILS_DATA_REQUEST_FAILED: {
      return {
        ...state,
        cocktails: [],
        errorMessage: payload.error,
      };
    }
    default:
      return state;
  }
};
