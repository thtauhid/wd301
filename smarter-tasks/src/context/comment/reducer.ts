import { CommentsActions, CommentsState } from "./types";

export const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const commentsReducer = (
  state: CommentsState = initialState,
  action: CommentsActions
): CommentsState => {
  switch (action.type) {
    case "FETCH_COMMENTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };

    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case "ADD_COMMENT":
      return {
        ...state,
        isLoading: false,
        comments: [action.payload, ...state.comments],
      };

    default:
      return state;
  }
};
