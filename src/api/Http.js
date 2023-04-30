import axios from "axios";

export const APIKEY = "6fa2ed80b3eb4cb78fa61748232904";

export const Http = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
});
