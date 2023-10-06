export const TodoReducer = (inicialState = [], action) => {
  switch (action.type) {
    case 'TODO ADD':
      return [...inicialState, action.payload];
    default:
      return inicialState;
  }
};
