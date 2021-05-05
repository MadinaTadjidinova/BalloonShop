const initialState = {
colors:{
    red: 1,
    green: 1,
    yellow: 1,
    blue: 1,
    pink: 1,
    purple: 1,
}, 
price: 35
};

const prices = {
    red: 5,
    green: 5,
    yellow: 5,
    blue: 5,
    pink: 5,
    purple: 5,
  };

   const shopReducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "ADD_COLOR":
        newState.colors[action.color]++;
        newState.price += prices[action.color];
        break;
      case "REMOVE_COLOR":
        newState.colors[action.color]--;
        newState.price -= prices[action.color];
        break;
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default shopReducer;

  
 