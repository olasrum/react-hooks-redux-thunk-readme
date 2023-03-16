// Action Creators
export function fetchAstronauts() {
  return  function (dispatch) {
   dispatch({type: "astronauts/astronautsLoading"});

   fetch("http://api.open-notify.org/astros.json")
    .then((r) =>r.json())
    .then((astronauts) =>
      dispatch({
        type: "astronauts/astronautsLoaded",
        payload: astronauts.people,
      })
      );
  };
}

// Reducers
const initialState = {
  entities: [],
  status: "idle", //array of astronauts
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    case "astronauts/astronautsLoadings":
      return {
        ...state,
        status: "loading",
      };
    default:
      return state;
  }
}
