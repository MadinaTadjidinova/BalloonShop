import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL =
  "builder-69f8f-default-rtdb.firebaseio.com/defoult.json";

export default instance;
