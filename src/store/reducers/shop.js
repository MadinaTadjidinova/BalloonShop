import { ADD_COLOR, REMOVE_COLOR, SET__COLOR } from "../action/types";
const initialState = {
colors:{
}, 
price: 0
};

const prices = {
    red: 5,
    green: 5,
    yellow: 5,
    blue: 5,
    pink: 5,
    purple: 5,
  };

   const shop = (state = initialState, action) => {
    const newState = { ...state };
  function rem () {
    newState.colors[action.color]--;
    newState.price -= prices[action.color];
  }
    switch (action.type) {
      case ADD_COLOR:
        newState.colors[action.color]++;
        newState.price += prices[action.color];
        break;
      case REMOVE_COLOR:
        setTimeout(  
            rem()
          ,
          4000
        )
        break;
        case SET__COLOR:
      newState.colors = action.data.colors;
      newState.price = action.data.price;
      break;
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default shop;

  
 