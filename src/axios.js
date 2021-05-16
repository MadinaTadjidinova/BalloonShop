import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-69f8f-default-rtdb.firebaseio.com/";

export default instance;
