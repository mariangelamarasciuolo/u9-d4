const initialState = {
  favJobs: {
    data: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        data: {
          ...state.data,
          content: [...state.data.content, action.payload],
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
