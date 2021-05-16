import axios from "../../axios";
import { ADD_COLOR, REMOVE_COLOR, SET_COLORS} from "./types";

export const add = (color) => ({
  type: ADD_COLOR,
  color: color,
});

export const remove = (color) => ({
  type: REMOVE_COLOR,
  color: color,
});

export const set = (data) => ({
  type: SET_COLORS,
  data: data,
});

export const load = () => {
  return (dispatch) =>
    axios.get("/defoult.json").then((response) => dispatch(set(response.data)));
};