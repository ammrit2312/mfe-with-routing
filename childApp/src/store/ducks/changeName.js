const NAME_CHANGE = "nameChange";

export const nameChange = (data) => ({
  type: NAME_CHANGE,
  data: data,
});

const initialState = {
  name: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAME_CHANGE:
      // console.log("Oye hoye ##", action.data)
      return { ...state, name: action.data };
    default:
      return state;
  }
};
