import axios from "../../axios";
import { ADD_COLOR, REMOVE_COLOR, SET__COLOR } from "./types";

export const add = (color) => ({
  type: ADD_COLOR,
  color: color
});

export const remove = (color) => ({
  type: REMOVE_COLOR,
  color: color
});
export const set = (data) => ({
    type: SET__COLOR,
    data: data
  });
export const load = () => {
    return (dispatch) => axios.get("https://builder-69f8f-default-rtdb.firebaseio.com/defoult.json")
      .then(response => dispatch(set(response.data)))
  };