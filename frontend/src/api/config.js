import axios from "axios";

export const baseURL = `http://${window.location.hostname}:4000/`;
const instance = axios.create({
  baseURL: baseURL,
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" }
});

export default instance;
