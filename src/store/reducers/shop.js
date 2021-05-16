import { ADD_COLOR, REMOVE_COLOR, SET_COLORS } from "../action/types";

const initialState = {
  colors: {},
  price: 0,
};

const prices = {
  red: 5,
  green: 5,
  yellow: 5,
  blue: 5,
  pink: 5,
  purple: 5,
  custom: 10,
};

const shop = (state = initialState, action) => {
  const newState = { ...state };
    
  switch (action.type) {
    case ADD_COLOR:
      console.log(action.color);
      newState.colors[action.color]++;
      newState.price += prices[action.color] ? prices[action.color] : prices['custom'];
      break;
    case REMOVE_COLOR:
      console.log(action.color);
      newState.colors[action.color]--;
      newState.price -= prices[action.color] ? prices[action.color] : prices['custom'];
      break;
    case SET_COLORS:
      newState.colors = action.data.colors;
      newState.price = action.data.price;
      break;

    default:
      break;
  }

  return newState;
};

export default shop;
