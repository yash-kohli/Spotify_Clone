export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  //Remove after finishing the project
  token:
    "BQBAypueOcqLuHDwz0rfjOtmUfESL1c8ml4BFLcUr5_qaoVMZsuJbg5XzX4N80wd-Y-w9W_-yQBV-_C7RKwsPLzpU2ndkB7zM3x24VQZl2UZaUW8U72V_ben5wPaHbJMw0ZugV77odoJbhbQI9Pn73b8o09HrA6W6z8Gs4MLyW8OhEneYbRw",
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  // Action --> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
