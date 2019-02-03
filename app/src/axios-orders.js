import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-74934.firebaseio.com/"
});

export default instance;
